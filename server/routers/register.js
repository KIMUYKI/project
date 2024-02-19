const express = require('express');
const router = express.Router();
// const {Op} = require('sequelize');
// const {User} = require('../models');

router.get('/', (req,res) => {
    res.send('Hello 겟');
});

router.post('/', (req,res) => {
    res.send('Hello 포스트');
});


module.exports = router;