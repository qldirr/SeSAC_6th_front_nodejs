const express = require('express')
const path = require('path')

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))   
app.use('/static', express.static(__dirname + '/public'))   


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




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})