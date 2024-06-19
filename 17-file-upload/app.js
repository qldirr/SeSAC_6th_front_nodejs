const express = require('express')
const path = require('path')
const multer = require('multer');    // multer 모듈 불러오기
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// multer 미들웨어 등록
// app.use('/uploads', express.static(__dirname + '/uploads'))를 사용하면 /uploads 경로로 들어오는 요청에 대해 uploads 디렉토리에 있는 파일들을 정적으로 제공할 수 있음
// 이를 통해 클라이언트는 서버의 특정 디렉토리에 있는 파일을 직접 요청하여 받아올 수 있음, 이 설정은 주로 이미지, CSS 파일, JavaScript 파일 등 정적 자산을 제공할 때 사용
// 'localhost:port번호/uploads/업로드한 파일명' 을 주소창에 치면 해당 이미지가 보여짐
app.use('/uploads', express.static(__dirname + '/uploads'))   
app.use('/static', express.static(__dirname + '/public'))   

// const upload = multer({
//     dest: 'uploads/'     // dest - 파일을 업로드하고 그 파일이 저장될 경로를 지정하는 속성
// })

const uploadDetail = multer({    // 세부 설정
    storage: multer.diskStorage({    // 저장할 공간에 대한 정보, diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능 제공
        destination(req, file, done){    
            done(null, 'uploads/')   // 파일을 저장할 경로
        },
        filename(req, file, done){  
            const ext = path.extname(file.originalname)   // path.extname() : 확장자 추출, path.basename() : 파일명에서 확장자를 제외한 파일이름만 추출
            done(null, path.basename(file.originalname, ext) + Date.now() + ext)    // 저장할 파일명(파일명+현재시각+확장자)
            // 왜 현재시각을 파일명에 넣을까? 중복되지 않게 하려고
        }
    }),
    limits: {fileSize : 5 * 1024 * 1024}    // 업로드 크기 제한
})


app.get('/', (req, res) => {
    res.render('index', { title: '파일 업로드를 배워보자' })
})

// multer객체.single() - 하나의 파일 업로드
// - single 미들웨어는 라우터 미들웨어 앞에 넣으면 됨
// - multer 객체 생성시 작성한 옵션에 따라 파일 업로드 후 req.file 객체 생성
//  여기서의 'userfile'은 폼에서 파일 input의 name 속성
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {    
    console.log(req.body);    // { title: 'dd' } -> title 데이터 정보 확인 가능
    console.log(req.file);    // 업로드된 파일 정보 -> 위에서 설정한 'destination' 속성의 값 'uploads/' 경로에 파일이 들어감
    // {
    //     fieldname: 'userfile',
    //     originalname: 'CSS (1).png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: 'uploads/',
    //     filename: 'CSS (1)1718772488236.png',
    //     path: 'uploads\\CSS (1)1718772488236.png',
    //     size: 10114
    //   }

    // res.send('success upload!')
    res.render('uploaded', {title : req.body.title, src : req.file.path})
    
    // 파일 탐색기 > uploads 폴더가 생성!
    // 확장자 없이 파일명이 자동으로 저장됨 (multer 객체를 생성할 때 dest 옵션 외에 설정을 한 게 없어서)
    // 파일 탐색기에서 png, jpg 등의 확장자를 붙여보면 우리가 업로드한 파일임이 확인 됨!
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

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})