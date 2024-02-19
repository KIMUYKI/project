const express = require("express");
// const cookieParser = require("cookie-parser");
const router = express.Router();
// const { User } = require("../models");
// const jwt = require("jsonwebtoken");
// const SECRET_KEY = "1234";

const app = express();
// app.use(cookieParser());
router.get('/', (req,res) => {
    res.send('Hello 겟');
});

router.post('/', (req,res) => {
    res.send('Hello 포스트');
});


module.exports = router;

