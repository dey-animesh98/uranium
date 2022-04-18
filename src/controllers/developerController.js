// const batchModel = require("../models/batchModel");
const query = require("express");
const batchModel = require("../models/batchModel");
const developerModel = require("../models/developerModel");


//Problem 2
const createNewDeveloper = async function (req, res) {
  const data = req.body;
  const developerCreated = await developerModel.create(data);
  res.send({ msg: developerCreated })
}

//Problem 3
const getFemaleScholar = async function (req, res) {
  const theEligibleDev = await developerModel.find({ gender: "Female", percentage: { $gte: 70 } })
  res.send({ msg: theEligibleDev })
}
//Problem 4
const getDeveloper = async function (req, res) {
  const getPercentage = req.query.percentage
  const getProgram = req.query.program

  const theProgram = await batchModel.find({ program: getProgram }).select({ _id: 1 })
  const theDevelopers = await developerModel.find({ percentage: { $gte: getPercentage }, batch: { $in: theProgram } })
  res.send({ msg: theDevelopers })

}



module.exports.createNewDeveloper = createNewDeveloper
module.exports.getFemaleScholar = getFemaleScholar
module.exports.getDeveloper = getDeveloper


