const http = require('http')
const server = http.createServer()    // 서버 만들기
server.listen(8000, () => {
    console.log('8000포트에서 서버 실행 중');
})  //listen(port, callback 함수) - 서버를 첫번째 매개변수의 포트로 실행

