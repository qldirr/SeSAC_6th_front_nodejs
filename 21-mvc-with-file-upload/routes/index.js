const express = require('express')
const router = express.Router();
const controller = require('../controller/Cfile')

app.get('/', (req, res) => {
    res.render('index', { title: '파일 업로드를 배워보자' })
})

app.post('/upload', uploadDetail.single('userfile'), (req, res) => {    
    console.log(req.body);    // { title: 'dd' } -> title 데이터 정보 확인 가능
    console.log(req.file);    // 업로드된 파일 정보 -> 위에서 설정한 'destination' 속성의 값 'uploads/' 경로에 파일이 들어감

    res.render('uploaded', {title : req.body.title, src : req.file.path})
    
})

// multer객체.array() - 여러 파일을 하나의 인풋에 업로드
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    console.log(req.body);    // { title: 'dog' }
    console.log(req.files);   // [{}, {}, ...] 배열 형태로 각 파일 정보 저장

    res.send('success upload! (multiple)')
})


// multer객체.fields() - 여러 파일을 각각의 인풋에 업로드, 파라미터에 name 속성을 배열 안 객체로 넣어주기
app.post('/upload/fields', uploadDetail.fields([{name: 'userfile1'}, {name: 'userfile2'}]), (req, res) => {
    console.log(req.body);    // { title1: 'wow', title2: 'go' }
    console.log(req.files);   // {userfile1 : [{}, ... ], userfile2 : [{}, ... ]} 형태로 각 파일 정보 저장
    
    res.send('success upload! (multiple2)')
})

// 동적 폼 업로드
app.post('/dynamicFile', uploadDetail.single('thumbnail'), (req, res) => {  
    const title = req.body.title
    const file = req.file
    console.log(req.body);
    res.send({file, title})
})