const express = require('express');
const app = express();
const PORT = 8000;
const cookieParser = require('cookie-parser')
const session = require('express-session');
const controller = require('./controller/Cuser')

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

app.use(session({
  secret: 'your_secret_key',    // 필수 옵션, 세션 암호화하는데 쓰는 키
  resave: false,     // 세션이 변경되지 않더라도 매번 다시 저장할건지 설정
  saveUninitialized: false,    // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션을 생성할 건지
  cookie: {    // 세션 쿠키 설정(세션 관리할때 클라이언트로 보내는 쿠키)
    httpOnly: true,   // 클라이언트에서 쿠키 확인 못하게 막음
    secure: false,    // http에서 사용 가능하도록(false는 https에서만 사용 가능)
    maxAge: 60 * 1000,   // 단위(ms)
    // expires: 만료기간 설정
  }
}))

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

// 세션 로그인 - 메인 페이지 이동
app.get('/session', (req, res) => {
  console.log('loggedin session', req.session.loggedin);
  if (req.session.loggedin) {
    res.render('session', { userid: req.session.userid })
  } else {
    res.render('session')
  }
})

// 세션 로그인 - 로그인 페이지 이동
app.get('/sessionLogin', (req, res) => {
  res.render('sessionLogin')
})

// 세션 로그인 - 로그인 처리
app.post('/sessionLogin', controller.sessionLogin)

// 세션 로그아웃
app.get('/sessionLogout', (req, res) => {
  console.log('sessionlogout', req.session);
  req.session.destroy((err) => {
    console.log('after logout', req.session);
    if (err) return res.status(500).send('로그아웃 실패');
    res.redirect('/session')   // 경로 변경
  })
})

// TODO: 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
