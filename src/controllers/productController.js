const req = require("express/lib/request")
const productModel = require("../models/productModel")

const createProduct = async function(req,res){
    const data= req.body
    const productCreated = await productModel.create(data)
    res.send({msg:productCreated})
}
module.exports.createProduct =createProduct