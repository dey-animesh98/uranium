const express = require("express");
const router = express.Router();
const MyController = require("../controllers/Controller");
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

//---------------------TEST--API---------------------//
router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
//---------------------///---------------------//

router.post("/createNewBook", MyController.createNewBook);

// router.get("/getBooksData", MyController.getBooksData)

router.post("/createNewAuthor", MyController.createNewAuthor);

router.get("/booksofChetan", MyController.booksByCB);

router.post("/bookTwoState", MyController.bookTS)

router.post("/bookByPrices",MyController.bookByPrice )

module.exports = router;
