const req = require("express/lib/request")
const orderModel = require("../models/orderModel")
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')
const middleware = require('../middlewares/commonMiddlewares')

const createOrder = async function (req, res) {
    const data = req.body
    const productId = req.body.productId
    const userId = req.body.userId


    //User Validation-----------------------------------------
    if (!userId) {
        return res.send({ msg: "Please enter User ID" })
    }
    const userValidId = await userModel.findById(userId);
    if (!userValidId) {
        return res.send({ msg: "User ID not valid" })
    }
    // Product validation----------------------------------------------------
    if (!productId) {
        return res.send({ msg: "Please enter Product ID" })
    }

    const productValidId = await productModel.findById(productId);
    if (!productValidId) {
        return res.send({ msg: "Product ID not valid" })
    }
    // Paid user validation---------------------------------
    const appUserType = req.headers['isfreeuser']

    let productDetail = await productModel.findById(productId);
    let productValue = productDetail.price;

    let userDetail = await userModel.findById(userId);
    let userBalance = userDetail.balance;


    if (appUserType == 'false') {
        if (productValue <= userBalance) {
            const updateBalance = await userModel.findByIdAndUpdate(
                { _id: userId },
                { $inc: { balance: -productValue } },
                { new: true })

            data.amount = productValue
            data.isFreeAppUser = false
            const orderDetail = await orderModel.create(data)
            res.send({ msg: orderDetail })

        } else {
            res.send({ msg: "User Balance Low" })
        }
        //Free user valodation------------------------------------------
    } else {
        data.amount = 0
        data.isFreeAppUser = true
        const orderDetail = await orderModel.create(data)
        res.send({ msg: orderDetail })
    }


}
module.exports.createOrder = createOrder