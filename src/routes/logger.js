
let log = function() {
    console.log(module)
    console.log('I am inside log function')
}

module.exports.logging = log

const listOFCandidates =["Rahul","Jay","Ram", "Raju", "Avi","Vimal", "Azad", "Kanai","Raja", "Rahim"]
const myStudent= function(req, res){
const newArr = []
const theValue = req.query.value
for (let i = 0; i<listOFCandidates.length; i++){
    const candi = listOFCandidates[i]
    if (theValue > 10  ){
        return res.send("Invalid")
    }else{
       listOFCandidates.length = theValue
        newArr.push(candi)
    }
 }
res.send({listOFCandidates : newArr})

}
   
    
    
   


module.exports.finalStudent = myStudent