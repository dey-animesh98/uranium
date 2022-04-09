
const express = require('express');
const router = express.Router();
const randomController = require('../controllers/randomController');


router.post('/my-players', randomController.allPlayers)

// router.get('/my-players2', randomController.allPlayers2)


module.exports = router;

































// to send data in  post request-> prefer sending in BODY -> click body-raw-json
//write a post request to accept an element in post request body and add it to the given array and return the new array
// router.post('/test-post2', function (req, res) {
//     let data= req.body
//     console.log(data)
//     res.send( {  msg: "hi guys..my 2nd post req"  }   )
// });