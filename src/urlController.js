const urlModel = require('./urlModel')
const validUrl = require('valid-url')
const shortid = require('shortid')
const redis = require('redis')
const { promisify } = require("util");
const { connected } = require('process');


//Connect to redis
const redisClient = redis.createClient(19382,"redis-19382.c301.ap-south-1-1.ec2.cloud.redislabs.com",{ no_ready_check: true });
redisClient.auth("DDebcA8K76cXEsz5jeMl2nri7ir0VrUl", function (err) {
    if (err) throw err;
});

redisClient.on("connect", async function () {
    console.log("Redis is connected...");
});

//Connection setup for redis
const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);


//---------------------------Valiadtions-----------------------------------------//
//request body validation
const isValidRequest = function (request) {
    return (Object.keys(request).length > 0)
}
//value validation
const isValidValue = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    if (typeof value === 'number' && value.toString().trim().length === 0) return false
    return true
}
//Url Validation
const isValidUrl = function (url) {
    const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
    return urlRegex.test(url)
}

//---------------------------------------------------Shorten Url API-----------------------------------------------------------------//
const shortenUrl = async (req, res) => {
    try {
        const longUrl = req.body.longUrl
        
        //If URL already Present
        const cachedLongUrl = await GET_ASYNC(`${longUrl}`)
        if(cachedLongUrl){
            const parseLongUrl = JSON.parse(cachedLongUrl)
            return res.status(201).send({status:true,message: "Shorten link already generated previously", data:parseLongUrl})
        }

        //Url Validations
        if (!isValidRequest(req.body)) return res.status(400).send({ status: false, message: "No input by user" })
        if (!isValidValue(longUrl)) return res.status(400).send({ status: false, message: "longUrl is required." })
        if (!validUrl.isUri(longUrl) || !isValidUrl(longUrl)) return res.status(400).send({ status: false, message: "Long Url is invalid." })

        const baseUrl = "http://localhost:3000"
        if (!validUrl.isUri(baseUrl)) return res.status(400).send({ status: false, message: `${baseUrl} is invalid base Url` })

            //Short id generation
            const shortUrlCode = shortid.generate()
            const alreadyExistCode = await urlModel.findOne({ urlCode: shortUrlCode })
            if (alreadyExistCode) return res.status(400).send({ status: false, message: `${alreadyExistCode} is already exist` })
           
            //Concatenate Urls
            const shortUrl = baseUrl + '/' + shortUrlCode
            const generateUrl = { longUrl: longUrl, shortUrl: shortUrl, urlCode: shortUrlCode }
            
            //Set cache the newly created url
            if(generateUrl){
                await SET_ASYNC(`${longUrl}`,JSON.stringify(generateUrl))
            }

            await urlModel.create(generateUrl)
            return res.status(201).send({ status: true, message: "Short url Successfully created", data: generateUrl })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


//---------------------------------------------------Get Url API-----------------------------------------------------------------//
const getUrl = async (req, res) => {
    try {
        const urlCode = req.params.urlCode
        let cachedUrlCode = await GET_ASYNC(`${urlCode}`)

        if (cachedUrlCode) {
            const parseUrl = JSON.parse(cachedUrlCode)
            const cachedLongUrl = parseUrl.longUrl
            return res.status(302).redirect(cachedLongUrl)
        }
        const findUrlcode = await urlModel.findOne({ urlCode })

        if (!findUrlcode) return res.status(404).send({ status: false, message: "URL code not found" })

        await SET_ASYNC(`${urlCode}`, JSON.stringify(findUrlcode))
        return res.status(302).redirect(findUrlcode.longUrl)
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { shortenUrl, getUrl }


