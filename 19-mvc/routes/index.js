const express = require('express')
const router = express.Router();
const { getComment, getComments, getMain } = require('../controller/Cmain')
// const controller = require('../controller/Cmain')   // controller.getMain 이렇게 꺼내도 됨

// console.log(controller);
// {
//     getMain: [Function (anonymous)],
//     getComments: [Function (anonymous)],
//     getComment: [Function (anonymous)]
//   }

// 함수 뒤에 '()'를 붙이지 않음 -> 함수 자체 전달
// 메인 화면
router.get('/', getMain)    // localhost:PORT/

// 댓글 리스트 조회
router.get('/comments', getComments)   // localhost:PORT/comments

// 댓글 조회
// 콜론(:) - 요청의 주소에서 변수를 사용하는 방법
router.get('/comment/:id', getComment)   // // localhost:PORT/comment/:id



module.exports = router;   // router 객체 내보내기