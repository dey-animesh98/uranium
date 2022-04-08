const express = require('express');
const logger = require('./logger')
// const missingNumber = require('../missingNumber')

const router = express.Router();

router.get('/msgn', function (req, res) {
    
    const theMissing=[1,2,3,4,5,7,8,9,10]
    const missingSum = theMissing.reduce(function(acc,curr){
        acc = acc + curr
        return acc
    }, 0 );
    
    let allSum = function(){
       let theall= 10*(10+1)/2
        return theall
    }
    const theMissingNumber = (allSum()-missingSum)
    res.send( {missing: theMissingNumber});

});


router.get('/prob1', function (req, res) {
    res.send(missingNumber.prob1());
});

router.get('/prob2', function (req, res) {
    res.send(missingNumber.prob2());
});


module.exports = router;








// adding this comment for no reason
//take req. param er  input ke function er argument pass

// router.get('/user-profile/:abcd', function(req, res) {
//     console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });