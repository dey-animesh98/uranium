
const { query } = require("express");


const testMiddleWare = async function (req,res){
  res.send({msg:"This messagge is send by user controller for strict middleWare."})
}

const testGlobalMw1 = async function(req,res){
  res.send({msg:"This is first global middleware for controller."})
}

const testGlobalMw2 = async function(req,res){
  res.send({msg:"This is second global middleware for controller."})
}

module.exports.testMiddleWare = testMiddleWare
module.exports.testGlobalMw1 = testGlobalMw1
module.exports.testGlobalMw2 = testGlobalMw2







