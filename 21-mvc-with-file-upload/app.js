const express = require('express')
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/static', express.static(__dirname + '/public'))


const indexRouter = require('./routes/index')   // ./routes 뒤에 index를 쓰지 않아도 폴더를 대표하는 파일인 index를 가져옴
app.use('/', indexRouter)


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})