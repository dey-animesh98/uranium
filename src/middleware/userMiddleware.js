
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")

//  Token Validation MiddleWare
const tokenValidation = function (req, res, next) {
  try {
    //Signature Validation---------
    let token = req.headers["x-Auth-token"];
    if (!token)
      token = req.headers["x-auth-token"];

    if (!token)
      return res.status(400).send({ status: false, msg: "ERROR- Token not found" }); //If token not available in req header or not logged in user

    let decodedToken = jwt.verify(token, "functionUp-Uranium")

    //Payload Validation-----------
    let userToBeFetch = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeFetch != userLoggedIn)
      return res.status(401).send({ status: false, msg: "ERROR- You are not Authorised to the performed action." }) //signature is valid but payload not ok. userId mismatch (authorization)

    next()
  }
  catch (err) {
    console.log("Error is: -", err.message)
    res.status(500).send({ status: false, msg: "Error", Error: err.message }) //if try block not work(invalid signature, hearder,payload)
  }
}


const userIdValidation = async function (req, res, next) {
  try {
    let userId = req.params.userId
    let userDetails = await userModel.findById(userId)
    if (!userDetails)
      return res.send({ status: false, msg: "User not exists" })
    next()
  }
  catch (err) {
    console.log("Error is: -", err.message)
    res.status(500).send({ status: false, msg: "Error", Error: err.message })
  }
}


const accountValidation = async function (req, res, next) {
  try {
    let userId = req.params.userId
    let userDetails = await userModel.findById(userId);
    let deletedUser = userDetails.isDeleted
    if (deletedUser == true) return res.status(404).send({ status: false, msg: "User Account Deleted" })
    next()
  }
  catch (err) {
    console.log("Error is: -", err.message)
    res.status(500).send({ status: false, msg: "Error", Error: err.message })
  }
}

module.exports.tokenValidation = tokenValidation
module.exports.userIdValidation = userIdValidation
module.exports.accountValidation = accountValidation






// if (!decodedToken)
// return res.status(400).send({ status: false, msg: "ERROR- user Invalid Token" })// In which condition this code execute??