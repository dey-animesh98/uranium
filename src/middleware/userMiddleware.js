
const jwt = require("jsonwebtoken");

//  Token Validation MiddleWare
const tokenValidation = function (req, res, next) {

  let token = req.headers["x-Auth-token"];

  if (!token)
    token = req.headers["x-auth-token"];

  if (!token)
    return res.send({ status: false, msg: "ERROR- Token not found" });

  let decodedToken = jwt.verify(token, "functionUp-Uranium");

  if (!decodedToken)
    return res.send({ status: false, msg: "ERROR- Invalid Token" });

  next()

}


module.exports.tokenValidation = tokenValidation

