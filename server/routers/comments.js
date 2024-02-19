const express = require("express");
const router = express.Router();



// const { Post, Comment, Like } = require("../models");
// const { Op } = require("sequelize");
// const authMiddleWare = require("../middlewares/auth-middleware");

router.get('/', (req,res) => {
    res.send('Hello 겟');
});

router.post('/', (req,res) => {
    res.send('Hello 포스트');
});


module.exports = router;
