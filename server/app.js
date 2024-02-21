// 모듈 import
const express = require('express');
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const { sequelize } = require('./models');
const indexRouter =  require("./routers");
const loginRouter = require("./routers/login");
const registerRouter = require("./routers/register");
const postRouter = require("./routers/post");
const commentRouter = require("./routers/comments");

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'html');





sequelize.sync({force:false})
.then(() => {
    console.log('데이터베이스 연결 성공');

})
.catch((err) => {
    console.error(err)
})


app.use(express.json());

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);

//미들웨어 설정






//라우터 설정


app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  app.use((req, res, next) => {
    res.status(404).send('Not Found');
  });
  
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
  });
  
  app.listen(port, () =>{
    console.log('server running at :', port)
})