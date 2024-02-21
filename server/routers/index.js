const express = require("express");
const router = express.Router();


router.get("/", (req,res) => {
    res.send("Hello World");
});

router.post('/', (req,res) => {
    res.send('Hello 포스트');
});








module.exports = router;