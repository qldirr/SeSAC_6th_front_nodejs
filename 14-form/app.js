const express = require('express')    // express 모듈 가져오기
const app = express();    // express 애플리케이션 객체 생성
const PORT = 8888;   // 서버가 실행될 포트 번호

app.set('view engine', 'ejs')   // view engine이 ejs임을 알려줌
app.set('views', './views')    // 뷰들이 위치하게 될 폴더 위치

// 미들웨어(middleware) 연결
// - 요청(request), 응답(response)의 중간에서 작업함
// express에서는 app.use()로 등록해야함
// ex. body-parse 모듈
app.use(express.urlencoded({ extended: true }))   // urlencoded로 파싱된 body를 요청 -> post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json())     // 요청의 body객체에 json형태로 반환 

// 라우팅(Routing) - 주소 설정
// localhost:PORT 로 접속했을때 index.ejs 를 응답하겠다
app.get('/', (req, res) => {
    res.render('index', { title: '폼 실습' })
})

app.get('/getForm', (req, res) => {
    // console.log(req.query);    // { id: 'banana', pw: '1234' } - 쿼리문자열
    // res.send('get 요청 성공')     // 실행이 되면 url이 http://localhost:8888/getForm?id=banana&pw=1234 처럼 쿼리문자열이 추가됨
    res.render('result', {
        title: 'GET 요청 결과',
        userInfo: req.query    // userInfo : { id: 'banana', pw: '1234' }
    })
})

app.post('/postForm', (req, res) => {
    // console.log(req.body);    // { id: 'apple', pw: '1234' } - body-parse 모듈을 사용해 출력
    // res.send('post 요청 성공')    // post방식은 url 뒤에 쿼리문자열이 추가되지 않음
    res.render('result', {
        title: 'POST 요청 결과',
        userInfo: req.body    // userInfo : { id: 'banana', pw: '1234' }
    })

})

// res.send() : 문자열, JSON, 파일 등을 클라이언트에게 응답(JSON을 가장 많이 응답), 서버가 데이터를 응답할 때 사용
// res.render(view, data) : 템플릿 엔진을 사용해 서버측에서 동적으로 html을 생성하고 클라이언트에게 응답, 서버측에서 동적으로 페이지를 렌더링할때 사용
//                  -> view : views/ 폴더의 ejs 파일 연결, data : 뷰에 넣어줄 정보

// listen(port 번호, 서버 실행 시 실행할 콜백함수) : 서버 시작 메서드 
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})