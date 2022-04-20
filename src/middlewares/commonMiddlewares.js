

const checkHeader= function ( req, res, next) {
    let header = req.headers
    let appUser = header['isfreeuser']
    if (!appUser){
        res.send({msg:"ERROR - Required header not present"})
    }else{
       
        next()
    }
       
    
}

module.exports.checkHeader= checkHeader
