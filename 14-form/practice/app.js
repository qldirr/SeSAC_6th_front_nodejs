const express = require('express')    // express 모듈 가져오기
const app = express();    // express 애플리케이션 객체 생성
const PORT = 8800;   // 서버가 실행될 포트 번호

app.set('view engine', 'ejs')   // view engine이 ejs임을 알려줌
app.set('views', './views')    // 뷰들이 위치하게 될 폴더 위치

app.use(express.urlencoded({ extended: true }))   // urlencoded로 파싱된 body를 요청 -> post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json())     // 요청의 body객체에 json형태로 반환 

app.get('/', (req, res) => {
    res.render('index', { title: '폼 실습' })
})

app.get('/getForm', (req, res) => {
    res.render('result', {
        title: 'GET 요청 결과',
        userInfo: req.query    // userInfo : { id: 'banana', pw: '1234' }
    })
})

app.post('/postForm', (req, res) => {
    res.render('result', {
        title: 'POST 요청 결과',
        userInfo: req.body    // userInfo : { id: 'banana', pw: '1234' }
    })

})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

