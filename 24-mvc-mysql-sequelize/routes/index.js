const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 작업 순서 : read all -> create -> delete -> update

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET /visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors); // 리스트 조회

// GET /visitor/:id
router.get('/visitor/:id', controller.getVisitor)   // 조회, req.params 사용
// router.get('/visitor', controller.getVisitor)   // 조회, req.query

// POST /visitor => localhost:PORT/visitor
router.post('/visitor', controller.postVisitor); // 추가

// DELETE /visitor 
router.delete('/visitor', controller.deleteVisitor)  // 삭제

// PARCH /visitor
router.patch("/visitor", controller.patchVisitor)   // 수정

module.exports = router;
