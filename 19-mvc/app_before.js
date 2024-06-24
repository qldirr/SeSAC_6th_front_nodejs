const express = require('express')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', './views')

// 임시로 DB에서 가지고온 데이터
const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
  ];



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/comments', (req, res) => {
    res.render('comments', { comments })
})

// 콜론(:) - 요청의 주소에서 변수를 사용하는 방법
app.get('/comment/:id', (req, res) => {
    console.log(req.params);    // { id: '1' }
    console.log(req.params.id);    // '1'

    const commentId = req.params.id;   // 댓글 아이디 : 요청 주소로 들어온 파라미터(:id)
    console.log(comments[commentId - 1]);  // { id: 1, userid: 'helloworld', date: '2022-10-31', comment: '안녕하세요^~^' }

    if (!comments[commentId - 1]){    // !undefined => true
        return res.render('404')   // 존재하지 않는 아이디에 대해 요청시 404 처리
    }

    res.render('comment', { comment : comments[commentId - 1] } )
})

// 요청의 주소에 변수 여러개 사용 예시
app.get('/test/:id/:name', (req, res) => {
    res.send(req.params)
})

// 404 처리 - 맨 마지막 라우트(주소)로 선언, 안그러면 나머지 라우팅(주소를 설계한 행위)이 전부 무시됨, 404는 무조건 맨밑에 선언
app.get('*', (req, res) => {
    res.render('404')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})