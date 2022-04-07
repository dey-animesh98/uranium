const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ',req.query)
    res.send('My Api')
});


router.get('/all-candidates', function (req,res){
    
    const listOFCandidates =["Rahul","Jay","Ram", "Raju", "Avi","Vimal", "Azad", "Kanai","Raja", "Rahim"]
    
    res.send(listOFCandidates)
})

router.get('/candidates', function(req, res){
   
    const listOFCandidates =["Rahul","Jay","Ram", "Raju", "Avi","Vimal", "Azad", "Kanai","Raja", "Rahim"]
    for (let i=0; i<listOFCandidates.length; i++ ) {
        let finalCandidate = listOFCandidates[i] 
    }
//    console.log(req.query.key)
    res.send ({
        finalCandidate : req.query.key}
    )

})

module.exports = router;
// adding this comment for no reason