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

router.get('/candidates', logger.finalStudent)

module.exports = router;
// adding this comment for no reason