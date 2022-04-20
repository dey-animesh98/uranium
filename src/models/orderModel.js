const mongoose = require('mongoose');
const moment = require("moment");
const { isDate } = require('moment');
var now = moment();

const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "User"
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    amount: {
        type: Number,
        default: 0
    },
    isFreeAppUser: Boolean,
    
    purchaseDate: { type: String, required: true, default: now.format("DD-MM-YYYY hh:mm a") }

}, { timestamps: true })
module.exports = mongoose.model('Order', orderSchema) //orders