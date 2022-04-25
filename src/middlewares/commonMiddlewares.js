


const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}


module.exports.mid2= mid2
