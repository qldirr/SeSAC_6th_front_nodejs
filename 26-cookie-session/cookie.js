const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const path = require('path')
const dotenv = require('dotenv')

app.set('view engine', 'ejs')
app.set('views', './views')

// dotenv 모듈을 이용해 .env 파일의 환경 변수를 불러옴
dotenv.config({
    // 기본 .env 파일 로드
    path: path.resolve(__dirname, '.env')
})

// cookie-parser : 요청에 실려온 쿠키를 해석해 req.cookies 객체로 만듦
app.use(cookieParser(process.env.COOKIE_SECRET))   // cookie-parser 미들웨어(비밀키만 설정)
const cookieConfig = {
    httpOnly: true,     // 웹 서버를 통해서만 쿠키에 접근 가능, 프론트쪽에서 document.cookie로 접근 차단
    maxAge: 7 * 24 * 60 * 60 * 1000,    // 쿠키 수명(ms), 7일 (7*24*60*60*1000), 1분(60*1000)
    // expires - 만료 날짜 / 시간 지정 가능
    signed: true    // 쿠키의 암호화(req.signedCookies에서 조회 가능), 쿠키 값이 암호화되어 들어감
    // secure - 웹 브라우저와 웹 서버가 https 통신하는 경우만 쿠키를 서버에 전송
}

app.get('/', (req, res) => {
    res.render('cookie')
})

app.get('/setCookie', (req, res) => {
    // res.send(), res.render(), res.end() 메서드는 서버가 클라이언트에게 응답하는 메서드
    // res.cookie(키, 값, 옵션) : 쿠키 설정 메서드 -> 서버가 클라이언트한테 응답하는게 아니라 쿠키 설정만 함(응답 헤더에 설정)
    res.cookie('myKeyTest', 'myValueTest', cookieConfig)

    // 클라이언트에게 응답
    res.send('set signed cookie')
})

app.get('/getCookie', (req, res) => {
    // req.signedCookies : cookie-parser가 만든 요청의 서명된 쿠키 해석
    res.send(req.signedCookies)
    // 결과가 myKeyTest : s%3AmyValueTest.laJbytUX6Wk0KsytMgLtGheswGwQfXKatZ2ED7FZtO0 이런식으로 출력
    // s%3A 접두사 - 해당 쿠키값 자체가 서명됨을 알려주는 접두사, 클라이언트가 임의로 서명된 쿠키를 만들거나 조작할 수 없도록
})

app.get('/clearCookie', (req, res) => {
    // res.clearCookie(키, 옵션) : 쿠키를 삭제하는 메서드, 서버가 클라이언트에게 응답하는 메서드가 아님
    //                            쿠키를 생성할 때의 키와 옵션이 일치해야함(단 maxAge/expires 키는 일치할 필요 없음)
    res.clearCookie('myKeyTest', 'myValueTest', cookieConfig)

    res.send('deleted signed cookie')
})

// process.env 객체를 통해 환경 변수에 접근, .env 파일에서 작성한 포트번호가 대입
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`portnumber is ${port}`);
    console.log('쿠키 비밀키', process.env.COOKIE_SECRET);
})



// ver1. 평문 쿠키
// : myValueTest
// ver2. 서명된 쿠키
// s%3AmyValueTest.hJ%2B5zrjA0i%2BCMvWo8bV5ldOFBkahM3DUIlM99CDAM88
// 서명된 쿠키?
// s%3A쿠키값.임의의문자열
// s%3A? 접두사 (해당 쿠키값 자체가 서명됨을 알려주는 접두사)
// -> 서명된 쿠키/평문 쿠키를 구별
// -> 클라이언트가 임의로 서명된 쿠키를 만들거나 조작할 수 없도록
// -----
// 1. 서버가 "서명된 쿠키(설정 시 signed:true 설정)"를 받으면, "s%3A"를 보고 서명된 쿠키임을 인식
// 2. 서버의 비밀키(process.env.COOKIE_SECRET)를 사용해 다시 서명하고 받은 서명이랑 비교
// 3. 두 값이 일치하면 쿠키가 변조되지 않았음을 신뢰하고 사용