const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMiddleware = require("../middleware/authMiddleware")



//---------------------TEST--API---------------------//
router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
//---------------------///-------------------------//


router.get("/test-mid", userMiddleware.middleware1, userController.testMiddleWare)

router.get("/test-global", userController.testGlobalMw1 )

router.post("/test-global-2", userController.testGlobalMw2)


module.exports = router;
