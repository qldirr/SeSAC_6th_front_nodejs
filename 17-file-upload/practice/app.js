const express = require('express')
const path = require('path')
const multer = require('multer');    // multer 모듈 불러오기
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))   
app.use('/static', express.static(__dirname + '/public'))   


const uploadDetail = multer({  
    storage: multer.diskStorage({    
        destination(req, file, done){    
            done(null, 'uploads/')  
        },
        filename(req, file, done){  
            const userName = req.body.name
            const ext = path.extname(file.originalname)  
            done(null, userName + ext)      // 폼에서 입력받은 이름을 파일명에 넣어서 저장
        }
    }),
    limits: {fileSize : 5 * 1024 * 1024}    // 업로드 크기 제한
})


app.get('/', (req, res) => {
    res.render('index', { title: '회원가입 동적 파일 업로드' })
})

app.post('/uploadFile', uploadDetail.single('userfile'), (req, res) => {    
    console.log(req.body); 
    console.log(req.file);   
    const id = req.body.id
    const age = req.body.age
    const name = req.body.name
    const file = req.file 
    // res.render('uploaded', {userInfo: req.body, src : req.file.path})
    res.send({ id, name, age, file })
    
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})