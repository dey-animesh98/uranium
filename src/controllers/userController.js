const req = require("express/lib/request")
const userModel = require("../models/userModel")

const createUser = async function (req, res) {
    const data = req.body
    let header = req.headers
    let appUser = header['isfreeuser']

    if (!appUser) {
      return  res.send({ msg: "ERROR-Please enter required field in header(isfreeuser)" })
    }

    const userCreated = await userModel.create(data)
    res.send({ msg: userCreated })
}
module.exports.createUser = createUser
