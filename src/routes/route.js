const express = require('express');
const router = express.Router();
const memeController= require("../controllers/memeController")


//--------------------------------------------------------//

router.get("/test-me", function (req, res) {
    res.send("My server is running awesome!")
})
//--------------------------------------------------------//

router.get("/all-memes", memeController.getmeme)
router.post("/create-memes", memeController.editMemes)


module.exports = router;