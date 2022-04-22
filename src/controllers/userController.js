const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Problem 1 ----USER CREATION

const createUser = async function (req, res) {
  try {
    let datam = req.body;
    if (Object.keys(data).length != 0) {
      let userCreated = await userModel.create(data);
      res.status(201).send({ status: true, msg: userCreated })
    } else res.status(400).send({ status: false, msg: "BAD REQUEST BY USER. NO INPUT" })
  }

  catch (err) {
    console.log("Error is: -", err.message)
    res.status(500).send({ status: false, msg: "Error", Error: err.message })
  }
}

// Problem 2 -------USER LOGIN

const loginUser = async function (req, res) {
  try {
    let emailId = req.body.emailId;
    let password = req.body.password;
    if (!emailId) {
      return res.status(400).send({ status: false, msg: "Email not Id entered by user " })
    }
    if (!password) {
      return res.status(400).send({ status: false, msg: "Password not entered by user " })
    }
    let user = await userModel.findOne({ emailId: emailId, password: password });
    if (!user)
      return res.status(400).send({ status: false, msg: "Username or Password incorrect", })

    // if username and password valid then create JWT token
    let token = jwt.sign({ userId: user._id.toString(), name: user.firstName, organisation: "Function Up", }, "functionUp-Uranium")

    res.setHeader("x-auth-token", token)
    res.status(200).send({ status: true, msg: token })
  }
  catch (err) {
    console.log("Error is: -", err.message)
    res.status(500).send({ status: false, msg: "Error", Error: err.message })
  }
}


// Problem 3  ---fetching user details
const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(400).send({ status: false, msg: "User not exists" })
    res.status(200).send({ status: true, data: userDetails })
  }
  catch (err) {
    console.log("Error is: -", err.message)
    res.status(500).send({ status: false, msg: "Error", Error: err.message })
  }
}


// Problem 4  --------- User data updation 
const updateUser = async function (req, res) {
  try{  
    let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.send({ status: true, data: updatedUser })
  }
  catch(err){
    console.log("Error is: -", err.message)
    res.status(500).send({ status: false, msg: "Error", Error: err.message })
  }
}


// Problem 5 ----Delete User
const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDeleted = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted:true }, { new: true })
  res.status(200).send({ status: true, msg: userDeleted })
  }
  catch(err){
    console.log("Error is: -", err.message)
    res.status(500).send({ status: false, msg: "Error", Error: err.message })
  }

}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
