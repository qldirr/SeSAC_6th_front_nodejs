const multer = require('multer');    // multer 모듈 불러오기
const path = require('path')

const uploadDetail = multer({    // 세부 설정
    storage: multer.diskStorage({    // 저장할 공간에 대한 정보, diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능 제공
        destination(req, file, done) {
            done(null, 'uploads/')   // 파일을 저장할 경로
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname)   // path.extname() : 확장자 추출, path.basename() : 파일명에서 확장자를 제외한 파일이름만 추출
            done(null, path.basename(file.originalname, ext) + Date.now() + ext)    // 저장할 파일명(파일명+현재시각+확장자)
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }    // 업로드 크기 제한
})

exports.singleUpload = uploadDetail.single('userfile')
exports.arrayUpload = uploadDetail.array('userfiles')
exports.fieldsUpload = uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }])
exports.dynamicUpload = uploadDetail.single('thumbnail')