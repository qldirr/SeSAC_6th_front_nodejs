const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))   // 정적 파일 서빙: public 디렉토리를 정적 파일을 제공하기 위한 디렉토리로 설정

app.get('/', (req, res)=>{
    res.render('index', {title:'Home'})
})

app.get('/about', (req,res) => {  
    res.render('about', {title:'About'})   
})

app.get('/create', (req,res) => {   
    res.render('create', {title:'Create'})  
})

// 지정된 경로 외의 경로일때
app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(8000, () => {
    console.log('8000 port');
})