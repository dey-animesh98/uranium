const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const userMiddleware = require("../middleware/userMiddleware")
//------------------------------------------------------------
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//-------------------------------------------------------------


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", userMiddleware.accountValidation, userMiddleware.tokenValidation, userController.getUserData)

router.put("/users/:userId",userMiddleware.accountValidation,userMiddleware.userIdValidation,userMiddleware.tokenValidation, userController.updateUser)

router.delete("/users/:userId",userMiddleware.accountValidation,userMiddleware.userIdValidation,userMiddleware.tokenValidation,  userController.deleteUser)

module.exports = router;

