const express = require('express')   
const app = express();    
const PORT = 3000;   

app.set('view engine', 'ejs') 
app.set('views', './views')  

// req.body 를 보여주기 위한 미들웨어
app.use(express.urlencoded({ extended: true }))  
app.use(express.json())  


app.get('/', (req, res) => {
    res.render('dynamic', { title: '동적 폼을 배워보자' })
})

// ajax 
app.get('/ajax', (req, res) => {
    // GET 방식이므로 주소창에다가 querystring을 직접 입력해도 값 확인 가능
    // EX) http://localhost:3000/ajax?name=he&gender=여자
    console.log(req.query);
    res.send(req.query)
})

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})