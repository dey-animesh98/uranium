const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// Problem 1
router.post("/createNewBook", BookController.createNewBook)

router.get("/getBooksData", BookController.getBooksData)

// Problem 2
router.get("/bookList", BookController.getBookList)
// Problem 3
router.post("/getBookInYear", BookController.getBookByYear)
// Problem 4 -1
router.post("/getBookParticular", BookController.getBookByParticular)
// Problem 4 -2
router.post("/getBookParticular2", BookController.getParticularByBooks2)
// Problem 5
router.get("/getINRBooks", BookController.getBookByINR)
// Problem 6
router.get("/getRandomBooks", BookController.getBookByRandom)

module.exports = router;