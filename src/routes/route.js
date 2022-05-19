const express = require('express');
const router = express.Router();
const weatherController= require("../controllers/weatherController")


//--------------------------------------------------------//

router.get("/test-me", function (req, res) {
    res.send("My server is running awesome!")
})
//--------------------------------------------------------//

router.get("/weather/city",weatherController.getweather)

router.get("/weather/my-cities", weatherController.sortByCities)

router.get("/weather/city/minmax",weatherController.sortByMin)
module.exports = router;