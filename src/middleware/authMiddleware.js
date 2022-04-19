const { nextTrick } = require("process")


const middleware1 = function (req, res, next) {
    let a = 1

    if (a === 1) {
        console.log("This is strict midware true condition")
        next()

    } else
        res.send({ msg: "ERROR - This is strict midware false condition" })
}
module.exports.middleware1 = middleware1