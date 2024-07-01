const express = require('express');
const app = express();
const PORT = 8000;
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 쿠키 미들웨어
app.use(cookieParser('your_secret_key'));
const cookieConfig = {
  httpOnly: true,     // 웹 서버를 통해서만 쿠키에 접근 가능, 프론트쪽에서 document.cookie로 접근 차단
  maxAge: 24 * 60 * 60 * 1000,    // 쿠키 수명(ms), 7일 (7*24*60*60*1000), 1분(60*1000)
  signed: true    // 쿠키의 암호화(req.signedCookies에서 조회 가능), 쿠키 값이 암호화되어 들어감
}

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('/cookie', (req, res) => {
  const popup = req.signedCookies.popup || ''
  res.render('cookie', { popup })
})

app.post('/setCookie', (req, res) => {
  res.cookie('popup', 'hide', cookieConfig)
  res.send('cookie has been set')
})

// TODO: 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
