const urlModel = require('./urlModel')
const validUrl = require('valid-url')
const shortid = require('shortid')


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
const isValidUrl = function (url) {
    const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
    return urlRegex.test(url)
}

//---------------------------------------------------Shorten Url API-----------------------------------------------------------------//
const shortenUrl = async (req, res) => {
    try {
        let longUrl = req.body.longUrl

        if (!isValidRequest(req.body)) return res.status(400).send({ status: false, message: "No input by user" })

        if (!isValidValue(longUrl)) return res.status(400).send({ status: false, message: "longUrl is required." })

        if (!validUrl.isUri(longUrl)) return res.status(400).send({ status: false, message: "Long Url is invalid." })
        if (!isValidUrl(longUrl)) return res.status(400).send({ status: false, message: "Long Url is invalid reg." })

        let baseUrl = "http://localhost:3000"

        if (!validUrl.isUri(baseUrl)) return res.status(400).send({ status: false, message: `${baseUrl} is invalid base Url` })

        const alreadyExistUrl = await urlModel.findOne({ longUrl })
        if (alreadyExistUrl) {
            res.status(200).send({ status:true, "message": "Shorten link already generated previosly", data: alreadyExistUrl })
        } else {

            let shortUrlCode = shortid.generate()

            const alreadyExistCode = await urlModel.findOne({ urlCode: shortUrlCode })
            if (alreadyExistCode) return res.status(400).send({ status: false, message: `${alreadyExistCode} is already exist` })

            let shortUrl = baseUrl + '/' + shortUrlCode

            const alreadyShortUrl = await urlModel.findOne({ shortUrl })
            if (alreadyShortUrl) return res.status(400).send({ status: false, message: `${alreadyShortUrl} is already exist` })

            const generateUrl = {
                longUrl: longUrl,
                shortUrl: shortUrl,
                urlCode: shortUrlCode
            }

            await urlModel.create(generateUrl)
            return res.status(201).send({ status: true, message: "Short url Successfully created", data: generateUrl })
        }
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

//---------------------------------------------------Get Url API-----------------------------------------------------------------//
const getUrl = async (req, res) => {
    try {
        const urlCode = req.params.urlCode
        const urlDetails = await urlModel.findOne({ urlCode })

        if (urlDetails) {
            return res.status(302).redirect(urlDetails.longUrl)
        }
        else {
            return res.status(404).send({ status: false, msg: "No URL Found" });
        }

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { shortenUrl, getUrl }


