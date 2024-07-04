const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmember');

// 기본 요청 경로 - localhost:PORT/member

// 메인 페이지 이동
router.get('/', controller.main)

// 회원가입 페이지 이동
router.get('/register', controller.getRegisterPage)

// 로그인 페이지 이동
router.get('/login', controller.getLoginPage)

// 프로필 페이지 이동
router.get('/profile', controller.getProfilePage)

// 유저 리스트 페이지 이동
router.get('/userListPage', controller.getUserListPage)

// 유저 리스트 조회
// router.get('/userList', controller.getUserList)

// // 로그인 메서드
router.post('/login', controller.login)

// // 회원 가입 메서드
router.post('/register', controller.register)

// // 회원 수정
// router.patch('/:userid', controller.updateUser)

// // 회원 삭제
// router.delete('/:userid', controller.deleteUser)

module.exports = router;