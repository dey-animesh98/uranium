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

router.post("/createNewAuthor", MyController.createNewAuthor);
router.post("/createNewBook", MyController.createNewBook);




module.exports = router;
