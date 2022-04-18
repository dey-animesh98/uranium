// const developerModel = require("../models/developerModel");
const batchModel = require("../models/batchModel");


//Problem 1
const createNewBatch = async function (req, res) {
    const data = req.body;
    const batchCreated = await batchModel.create(data);
    res.send({ msg: batchCreated})
}




module.exports.createNewBatch = createNewBatch
