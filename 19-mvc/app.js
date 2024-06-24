const express = require('express')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', './views')

const indexRouter = require('./routes/index')   // ./routes 뒤에 index를 쓰지 않아도 폴더를 대표하는 파일인 index를 가져옴
app.use('/', indexRouter)   // 루트 경로로 요청이 들어올때 마다 저 파일을 읽어오겠다

const userRouter = require('./routes/user')
// 'localhose:PORT/user' 가 기본 요청 주소
app.use('/user', userRouter)     // '/user'를 기본 라우터로 가져감 -> './routes/user' 파일 내의 모든 주소 앞에는 '/user'가 붙어있다고 생각

// 404 처리 - 맨 마지막 라우트(주소)로 선언, 안그러면 나머지 라우팅(주소를 설계한 행위)이 전부 무시됨, 404는 무조건 맨밑에 선언
app.get('*', (req, res) => {
    res.render('404')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})