// const requestBody = req.body
// if(!isValidRequest(requestBody))  return res.status(400).send({ status: false, message: "No input by user." })

// const longUrl = requestBody.longUrl
// if(!isValidValue(longUrl)) return res.status(400).send({ status: false, message: "Long Url is required." })

// if (!validUrl.isUri(baseUrl)) return res.status(400).send({ status: false, message: "Base Url is invalid." })

// if(!validUrl.isUri(longUrl)) return res.status(400).send({ status: false, message: "Long Url is invalid." })

// let url = await urlModel.findOne({longUrl})

// // url exist and return the response
// if (url) {
//     res.json(url)
// } else {

// const urlCode = shortid.generate()

// let shortUrl = baseUrl + '/' + urlCode

//     requestBody['urlCode'] = urlCode; 
//     requestBody['shortUrl'] = shortUrl;

//     let newData = await urlModel.create(requestBody)

//     let result = {
//     longUrl: newData.longUrl,
//     shortUrl: newData.shortUrl,
//     urlCode: newData.urlCode
// }
//     return res.status(201).send({ status: true,message:"Shorten Link Genereated", data: result })
// }
// //
// const urlCode = req.params.urlCode
// const urlDetails = await urlModel.findOne({urlCode})

// if(urlDetails){
//   return res.status(302).redirect(urlDetails.longUrl)
// }
// else{
//   return res.status(404).send({ status: false, msg: "No URL Found" });
// }
//------------------------------------------
// const urlCode = req.params.urlCode
// const urlDetails = await urlModel.findOne({urlCode})

// if(urlDetails){
//   return res.status(302).redirect(urlDetails.longUrl)
// }
// else{
//   return res.status(404).send({ status: false, msg: "No URL Found" });
// }


////////////////////////////////////////////////////////
//By Rubi
// const isValid = function (value) {
//     if (typeof value === 'undefined' || value === null) return false
//     if (typeof value === 'string' && value.trim().length === 0) return false
//     if (typeof value === 'number' && value.toString().trim().length === 0) return false
//     return true
// }

// const isValidRequestBody = function (request) {
//     return (Object.keys(request).length > 0)
// }

// const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/                                      // /^(ftp|http|https):\/\/[^ "]+$/

// const createShortUrl = async function (req, res) {
//     try {
//         let longUrl = req.body.longUrl
//         if (!isValidRequestBody(longUrl))
//         return res.status(400).send({ status: false, message: "No input by user" })

//         if (!isValid(longUrl))
//         return res.status(400).send({ status: false, message: "longUrl is required." })

//         if (!urlRegex.test(longUrl.trim()))

//         return res.status(400).send({ status: false, message: " Please provide valid Url." })

//         let baseUrl = "http://localhost:3000"
//         if (!validUrl.isUri(baseUrl))
//         return res.status(400).send({ status: false, message: `${baseUrl} is invalid base Url` })

//         const alreadyExistUrl = await urlModel.findOne({longUrl:longUrl})

//         if (alreadyExistUrl)
//         return res.status(400).send({ status: false, message: `${alreadyExistUrl} is already exist` })

//         let shortUrlCode = shortid.generate()

//         const alreadyExistCode = await urlModel.findOne({urlCode:shortUrlCode})
//         if (alreadyExistCode)

//         return res.status(400).send({ status: false, message: `${alreadyExistCode} is already exist` })
//         let shortUrl = baseUrl+'/'+shortUrlCode

//         const alreadyShortUrl = await urlModel.findOne({shortUrl:shortUrl})
//         if (alreadyShortUrl)
//         return res.status(400).send({ status: false, message: `${alreadyShortUrl} is already exist` })

//         const generateUrl = {
//             longUrl:longUrl,
//             shortUrl:shortUrl,
//             urlCode:shortUrlCode
//         }

//         const createUrl = await urlModel.create(generateUrl)
//         return res.status(201).send({ status: false, message: "Successfully created", data:createUrl })
//     }
//     catch (err) {
//         return res.status(500).send({ status: false, message: "Error", error: err.message })
//     }
// }

 
// const getorignalUrl = async function(req,res){
//     try{

//     let urlCode = req.params.urlCode

//     if (!isValidRequestBody(urlCode))
//     return res.status(400).send({ status: false, message: "No input by user" })

//     if (!isValid(urlCode))
//     return res.status(400).send({ status: false, message: "url Code is required." })

//     const findUrlCode = await urlModel.findOne({urlCode:urlCode})

//     if(findUrlCode){

//     // let newUrl = JSON.parse(JSON.stringify(findUrlCode.longUrl))
//     return res.status(301).redirect(findUrlCode.longUrl)
//     }
//     }
//     catch (err) {
//         return res.status(500).send({ status: false, message: "Error", error: err.message })

//     }

// }

// module.exports.createShortUrl = createShortUrl

// module.exports.getorignalUrl = getorignalUrl