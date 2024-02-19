// 모듈 import
const express = require('express')
const dotenv = require("dotenv");

const indexRouter =  require("./routers");
const loginRouter = require("./routers/login");
const registerRouter = require("./routers/register");
const postRouter = require("./routers/post");
const commentRouter = require("./routers/comments");

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);


// const { sequelize } = require('./models')

// sequelize.sync({force:flse})
// .then(() => {
//     console.log('데이터베이스 연결 성공');

// })
// .catch((err) => {
//     console.error(err)
// })

//미들웨어 설정






//라우터 설정


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  
  app.listen(port, () =>{
    console.log('server running at :', port)
})