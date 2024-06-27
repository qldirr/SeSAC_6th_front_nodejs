const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 환영메세지와 회원가입/로그인 링크 보여주기
router.get('/', controller.main)

// 회원가입 페이지
router.get('/signup', controller.signupPage)

// 회원 생성
router.post('/signup', controller.insertUser)

// 로그인 페이지
router.get('/signin', controller.signinPage)

// 로그인 회원 조회
router.post('/signin', controller.getUser)

// 로그인 성공시 회원 정보 수정 페이지
router.post('/profile', controller.profilePage)

// 회원 정보 수정
router.patch('/profile/edit', controller.updateUser)

// 회원 삭제
router.delete('/profile/delete', controller.deleteUser)

module.exports = router