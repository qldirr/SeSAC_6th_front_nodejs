const express = require('express')
const router = express.Router();
const controller = require('../controller/Cfile')
const { singleUpload, arrayUpload, fieldsUpload, dynamicUpload } = require('../middlewares/upload-middleware')

router.get('/', controller.getMain)

router.post('/upload', singleUpload, controller.singleUpload)

// multer객체.array() - 여러 파일을 하나의 인풋에 업로드
router.post('/upload/array', arrayUpload, controller.arrayUpload)


// multer객체.fields() - 여러 파일을 각각의 인풋에 업로드, 파라미터에 name 속성을 배열 안 객체로 넣어주기
router.post('/upload/fields', fieldsUpload, controller.fieldsUpload)

// 동적 폼 업로드
router.post('/dynamicFile', dynamicUpload, controller.dynamicUpload)

module.exports = router