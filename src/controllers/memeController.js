let axios = require("axios")
const { options } = require("../routes/route")

//Problem 1
let getmeme = async function (req, res) {
    try {
       let options = {
           method: "get",
           url : `https://api.imgflip.com/get_memes`
       }
       let result = await axios(options)
       res.status(200).send({status:true, msg:result.data})

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Problem 2
let editMemes = async function(req,res){
    try{
        let id = req.query.template_id
        let firstText = req.query.text0
        let secondText = req.query.text1
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${firstText}&text1=${secondText}&username=ani1998&password=animesh1`
        }
        let result = await axios(options)
        res.status(200).send({status:true, link:result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





module.exports.getmeme = getmeme
module.exports.editMemes =editMemes