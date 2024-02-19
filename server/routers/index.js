const express = require("express");
const router = express.Router();
// const API = require('../controllers/api');
// // const multer = require('multer');

// // let storage = multer.diskStorage({
// //     destination: function(req, file, cb) {
// //         cb(null, "./uploads");
// //     },
// //     filename : function (req, file, cb) {
// //         cb(null, file.filename+"_"+Date.now()+"_"+file.originalname);
// //     }
// // })
// // let upload = multer({
// //     storage: storage,
// // }).single("image");

router.get("/", (req,res) => {
    res.send("Hello World");
});

router.post('/', (req,res) => {
    res.send('Hello 포스트');
});

// router.get('/', API.fetchAllPost);
// router.post('/', upload, API.createPost);








module.exports = router;