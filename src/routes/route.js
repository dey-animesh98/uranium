const express = require('express');
const router = express.Router();

const userController =  require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const middleware = require('../middlewares/commonMiddlewares')

//-----------------BASIC TESTING ---------------------//
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//---------------------------------------------------//

router.post("/create-product", productController.createProduct)
router.post("/create-user", userController.createUser)
router.post("/create-order", middleware.checkHeader, orderController.createOrder)


module.exports = router;