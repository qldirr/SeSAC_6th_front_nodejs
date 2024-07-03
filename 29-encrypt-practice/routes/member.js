// player 와 관련된 라우터
const express = require('express');
const controller = require('../controller/Cmember');
const router = express.Router();

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
router.get('/userList', controller.getUserList)

// 로그인 메서드
router.post('/', controller.login)

// 회원 가입 메서드
router.patch('/:player_id/team', controller.register)

// 회원 수정
router.patch('/:player_id', controller.updateUser)

// 회원 삭제
router.delete('/:pageSize/:page', controller.deleteUser)

module.exports = router