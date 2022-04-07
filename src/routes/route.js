const express = require('express');

const router = express.Router();
const logger = require("../logger/logger")
const helper = require("../util/helper")
const formattor = require("../validator/fomattor")
var _ = require('lodash');

router.get('/test-me', function (req, res) {
    logger.myMassage()
    
    console.log("The date is:- ",helper.myDate)
    console.log("The month is:- ",helper.myMonth)
    helper.myInfo()
    
    console.log("Calling trim: ",formattor.myString)
    console.log("Converting to lower case: ",formattor.myLowerCase)
    console.log("Converting to Upper case: ",formattor.myUpperCase)
    
    res.send('My first ever API Assignment 6th April!')
});

router.get('/hello', function (req, res) {
const allMonth = _.chunk( ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],3);
console.log("The months:- ", allMonth)

const oddArr = _.tail([1,3,5,7,9,11,13,15,17,19])
console.log("Last 9 elements:-", oddArr)

const dupArr =_.union( [5,22,33,74,25],[3,22,73,37,35],[43,85,3,36,12],[15,28,3,30,21],[18,3,13,17,12]) 
console.log("Marged and uniq array:- ", dupArr)

const myObj =_.fromPairs( [["name", "Animesh"], ["age",24],["city","Kolkata"]])
console.log("Merged object: -",myObj)

res.send('My first ever API Assignment 6th April! Module - 4')
});
module.exports = router;
// adding this comment for no reason