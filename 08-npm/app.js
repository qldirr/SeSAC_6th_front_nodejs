const http = require('http')
http.createServer(function(req, res){
    // send http
    // http status 200은 정상적 응답
    // Content-Type : text/plain
    // res.writeHead(200, {'Content-Type':'text/plain'})  //브라우저에서 '127.0.0.1:8080' 로 연결하면 화면에 '<h2>Hello World</h2>'로 표시됨
    res.writeHead(200, {'Content-Type':'text/html'})   // 화면에 h2태그가 먹혀서 출력
    res.end(`<h2>Hello World</h2>`)
}).listen(8080, () =>{
    console.log('8080포트에서 실행 중');
})

