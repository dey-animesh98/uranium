const express = require("express");
const router = express.Router();
const devController = require("../controllers/developerController");
const batchController =require("../controllers/batchController")

//---------------------TEST--API---------------------//
router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
//---------------------///---------------------//


router.post("/batches", batchController.createNewBatch)

router.post("/developers", devController.createNewDeveloper)

router.get("/scholarship-developers", devController.getFemaleScholar)

router.get("/developer", devController.getDeveloper)





module.exports = router;
