const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "1234";

const app = express();
app.use(express.json());
app.use(cookieParser());

router.post("/login", async (req, res) => {
    const { nickname, password } = req.body;

    try {
        const user = await user.findOne({
            where: { nickname },
        });

        if(!user || user.password !== password) {
            return res
            .status(412)
            .send({ errorMessage: "닉네임 또는 패스워드를 확인해주세요. "});
        }

        const token = jwt.sign(
            { nickname: nickname, userId: user.userId },
            SECRET_KEY,
            {
                expiresIn: "1h",
            }
        );

        res.cookie("token", token);

        return res.json({ token: token });
    } catch(err) {
        return res.status(400).send({ errorMessage: "로그인에 실패하였습니다."});
    }
});


// router.get('/', (req,res) => {
//     res.send('Hello 겟');
// });

// router.post('/', (req,res) => {
//     res.send('Hello 포스트');
// });


module.exports = router;

