const express = require('express')
const { getUser } = require('../controller/Cuser')
const router = express.Router()

// 유저 정보 조회
router.get('/', getUser)    // localhost:PORT/user

module.exports = router;