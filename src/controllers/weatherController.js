let axios = require("axios")
const { options } = require("../routes/route")


let getweather = async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        res.status(200).send({ status: true, msg: result.data}) //.main.temp 

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const sortByCities = async function (req, res) {
    try {
        // let id = req.query.appid
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow","Pune"]
        let cityTempList = []
        for (let i = 0; i < cities.length; i++) {
            let myCity = { city: cities[i] }

            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=63362e88851a1da3fb7a18912571b3cc`  //${id}
            }
            let result = await axios(options)
            myCity.temperature = result.data.main.temp
            cityTempList.push(myCity)

        }
        let tempSort = cityTempList.sort((a, b) => a.temperature - b.temperature)
        res.status(200).send({ status: true, msg: tempSort })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// Temp min-max
const sortByMin = async function (req, res) {
    try {
        // let id = req.query.appid
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow","Pune"]
        let cityTempList = []
        for (let i = 0; i < cities.length; i++) {
            let myCity = { city: cities[i] }

            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=63362e88851a1da3fb7a18912571b3cc`  //${id}
            }
            let result = await axios(options)
            myCity.temp_min = result.data.main.temp_min
            myCity.temp_max = result.data.main.temp_max
            cityTempList.push(myCity)

        }
        // let tempSort = cityTempList.sort((a, b) => a.temperature - b.temperature)
        res.status(200).send({ status: true, msg: cityTempList })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getweather = getweather
module.exports.sortByCities = sortByCities
module.exports.sortByMin =sortByMin