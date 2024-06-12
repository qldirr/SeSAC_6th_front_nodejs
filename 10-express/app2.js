const express = require('express')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')   // EJS를 템플릿 엔진으로 설정
app.set('views', './views')   // 뷰 엔진 설정 - 뷰 디렉토리를 './views'로 설정, views 폴더안에 파일들은 ejs문법으로 만든 파일들


app.get('/', (req,res) => {   // 루트 경로 '/'에 'index' 뷰를 렌더링
    res.render('index', {title:'홈'})    // index.ejs 파일을 렌더링, 'title' 변수 선언
})

app.get('/about', (req,res) => {  
    res.render('about', {title:'소개'})     // 경로가 '/about' 이면 about.ejs 파일 렌더링
})

app.get('/create', (req,res) => {   
    res.render('create', {title:'작성'})    // 경로가 '/create' 이면 create.ejs 파일 렌더링
})

app.listen(PORT, () => {
    console.log('8000 서버실행');
})