const express = require('express')
const router = express.Router();


//authontication middleware

router.get("/all-questions", (req, res) => {
    res.send("all questions");
})

module.exports = router;