const express = require('express');
const controller = require('../controller/Cgame');
const router = express.Router();

// 제일 최근에 열리는 게임 조회
router.get('/latest', controller.getLatestGame)

module.exports = router