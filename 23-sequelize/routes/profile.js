const express = require('express');
const controller = require('../controller/Cprofile');
const router = express.Router();

// 포지션별 연봉 합 구하기
router.get('/salarysum', controller.getPositionSalarySum)

module.exports = router