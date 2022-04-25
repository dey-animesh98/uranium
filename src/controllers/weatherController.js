let axios = require("axios")


// let getStates = async function (req, res) {

//     try {
//         let options = {
//             method: 'get',
//             url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
//         }
//         let result = await axios(options)
//         let data = result.data  
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

let getweather = async function(req,res){
    try{
        let city = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        res.status(200).send({status:true, msg: result.data}) //.main.temp

    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getweather = getweather