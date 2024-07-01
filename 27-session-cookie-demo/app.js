const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = 3000;

// 사용자 정보
const userInfo = { id: 'banana', pw: '1234' };

// 미들웨어 설정
app.use(express.urlencoded({ extended: true }));

// 쿠키 미들웨어
app.use(cookieParser());

// 세션 미들웨어
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', './views');


// 라우트(메인 화면)
app.get('/', (req, res) => {
  if (req.session.loggedin) {    // 세션에 loggedin 값이 있다면 마이페이지로 이동
    res.redirect('/dashboard');
  } else {
    // 세션에 loggedin 값이 없다면 로그인 페이지로 이동, '아이디 기억하기' 체크박스 선택 여부에 따라 쿠키에서 아이디 값을 보냄
    res.render('login', { rememberedId: req.cookies.rememberedId || '' });
  }
});

// 로그인 메서드
app.post('/login', (req, res) => {
  const { id, pw, remember } = req.body;     // 로그인 페이지에서 form안의 name 속성들 추출

  if (id === userInfo.id && pw === userInfo.pw) {
    // 로그인 성공시 세션에 값 대입
    req.session.loggedin = true;
    req.session.userId = id;

    if (remember === '1') {    // 로그인 페이지에서 '아이디 기억하기' 체크박스를 체크했다면 쿠키에 id값 대입
      res.cookie('rememberedId', id, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // res.cookie(키, 값, 옵션) - 쿠키 설정, 30일
    } else {   // '아이디 기억하기' 체크박스를 해제했을때
      res.clearCookie('rememberedId');     // res.clearCookie(키, 옵션) - 쿠키 삭제
    }

    // 경로 이동
    res.redirect('/dashboard');
  } else {
    // 로그인 실패시
    res.send('로그인 실패. <a href="/">다시 시도</a>');
  }
});

// 마이페이지(로그인해야 볼 수 있음)
app.get('/dashboard', (req, res) => {
  if (req.session.loggedin) {     // 세션에 loggedin 의 값이 있다면
    res.render('dashboard', { userId: req.session.userId });    // 마이페이지로 이동하는데 세션에 있는 userId를 가지고 가서 출력
  } else {
    // 세션에 loggedin 값이 없다면 메인 페이지로 이동
    res.redirect('/');
  }
});

// 로그아웃 메서드
app.get('/logout', (req, res) => {
  // 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    // 메인 페이지로 이동
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});


// 전체적인 설명
// req.session.loggedin = true;   // 유저가 로그인 해있는지, 메인화면 이동/마이페이지 이동 시 이 세션에 값 있는지 확인
// req.session.userId = id;    // 유저의 아이디를 넣은곳, 마이페이지 이동시 loggedin가 true라면 userId값을 같이 렌더
// remember   // 로그인 화면에서의 '아이디 기억하기' 체크박스, 체크가 되었다면 쿠키에 로그인시 입력한 id값을 넣고 메인화면으로 이동할때 
          // 쿠키값이 있다면 아이디 입력창에 쿠키값을 대입