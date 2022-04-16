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

router.post("/newAuthor", MyController.createNewAuthor);
router.post("/newPublisher", MyController.createNewPublisher);
router.post("/newBook", MyController.createNewBook)
router.get("/bookDetails", MyController.allDetails)




module.exports = router;
