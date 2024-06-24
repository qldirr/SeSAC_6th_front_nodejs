const { getDbComments } = require('../model/Comment')

// exports 로 함수를 내보내기
// 메인 화면
exports.getMain = (req, res) => {
    res.render('index')
}

// 댓글 리스트 조회
exports.getComments = (req, res) => {
    res.render('comments', { comments: getDbComments() })   // getDbComments 는 controller에서 함수로 선언했으므로 ()를 붙이자
}

// 댓글 조회
exports.getComment = (req, res) => {
    console.log(req.params);     // { id: '1' }
    console.log(req.params.id);    // '1'

    const commentId = req.params.id;   // 댓글 아이디 : 요청 주소로 들어온 파라미터(:id)
    const dbComments = getDbComments()    // model에서 함수 리턴값 대입(함수 호출)
    console.log(dbComments[commentId - 1]);  // { id: 1, userid: 'helloworld', date: '2022-10-31', comment: '안녕하세요^~^' }

    if (!dbComments[commentId - 1]) {    // !undefined => true
        return res.render('404')   // 존재하지 않는 아이디에 대해 요청시 404 처리
    }

    res.render('comment', { comment: dbComments[commentId - 1] })
}