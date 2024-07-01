const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '.env'),
});

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views');

// express-session 미들웨어
app.use(session({
    secret: process.env.COOKIE_SECRET,    // 필수 옵션, 세션 암호화하는데 쓰는 키
    resave: false,     // 세션이 변경되지 않더라도 매번 다시 저장할건지 설정
    saveUninitialized: false,    // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션을 생성할 건지
    cookie: {    // 세션 쿠키 설정(세션 관리할때 클라이언트로 보내는 쿠키)
        httpOnly: true,   // 클라이언트에서 쿠키 확인 못하게 막음
        secure: false,    // http에서 사용 가능하도록(false는 https에서만 사용 가능)
        maxAge: 60 * 1000,   // 단위(ms)
        // expires: 만료기간 설정
    }
}))
// 인자로 세션에 대한 설정 객체를 넣음

app.get('/', (req, res) => {
    res.render('session')
})

app.get('/set', (req, res) => {
    // 세션 설정,  req.session.키 = 값(내가 원하는 키에 값 대입)
    if (req.query.name) {
        req.session.name = req.query.name
        req.session.age = req.query.age
    } else {
        req.session.name = 'banana'
        req.session.age = 10
    }

    // { [sid1]:{ name:'banana', age:10 }, [sid2]:{ name:'banana', age:10 } }
    res.send('세션 설정 완료')   // 개발자도구 - application - cookie storage 에서 확인 가능
})

app.get('/name', (req, res) => {
    // 세션 사용(조회), req.session.키 로 접근
    console.log('req.session - ', req.session);
    // Session {
    //     cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
    //     name: 'banana',
    //     age: 10
    //   }
    res.send({ id: req.sessionID, name: req.session.name })    
    // 같은 브라우저에서 여러 탭으로 들어가도 같은 id가 나옴, 브라우저가 다르면 id가 다르게 나옴(브라우저 단위로 클라이언트 구분)
})

app.get('/destroy', (req, res) => {
    // 세션 삭제, req.session.destroy(세션 삭제 시 호출할 콜백함수)
    req.session.destroy((err) => {
        if(err) throw err;

        // res.send('세션 삭제 완료')    
        // 위에서 출력한 req.sessionID 만 남아있고 name은 삭제가 됨, 그리고 req.sessionID 값도 삭제 전과 후가 달라짐

        res.redirect('/name')   // 경로 변경
    })
})

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
});

// express-session 모듈 : 세션 관리, 로그인 등 세션을 구현하거나 특정 클라이언트에 대한 데이터를 저장할때 사용
// -> 사용자 별로 req.session 객체 안에 유지

// 1. 세션 사용 - req.session.키
// 2. 세션 설정 - req.session.키 = 값
// 3. 세션 삭제 - req.destroy(콜백)

// 로그인 유지를 구현하려면 로그인 후 로그인이 완료되면 req.session.키 에다가 로그인 정보를 넣고 router마다 
// req.session.키 를 조회하여 값이 존재하면 router 메서드가 실행되도록 하고 없으면 다시 로그인 페이지로 넘어가게 구현 가능
// ex) 로그인 메서드에서 req.session.userId = req.body.id 대입 -> 다른 페이지로 이동할때 req.session.userId가 존재하는지 체크하고
//      있으면 페이지 이동, 없으면 로그인 페이지로 이동   &&  로그아웃 할때에는 세션 삭제 메서드 실행