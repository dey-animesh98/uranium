const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Problem 1 ----USER CREATION
const createUser = async function (req, res) {
  let data = req.body;
  let userCreated = await userModel.create(data);
  res.send({ msg: userCreated });
};
// Problem 2 -------USER LOGIN
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "Username or Password incorrect",
    });

  // if username and password valid then create JWT token
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      name: user.firstName,
      organisation: "Function Up",
    },
    "functionUp-Uranium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, msg: token });
};

// Problem 3  ---fetching user details
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "User not exists" });

  res.send({ status: true, data: userDetails });
};


// Problem 4  --------- User data updation 
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "User not exists" });

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: true, data: updatedUser });
};


// Problem 5 ----Delete User
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let userDeleted = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
  res.send({ status: true, msg: userDeleted })

}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
