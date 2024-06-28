const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// 기본 요청 경로 : localhost:PORT

router.get('/', controller.index)

module.exports = router