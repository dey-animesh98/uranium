const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/book-entry", BookController.createBook )

router.get("/get-book-data", BookController.getBookData )

router.get("/get-book-data-filter", BookController.getBookFilterData )

module.exports = router;