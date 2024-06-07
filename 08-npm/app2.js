const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.end(`<h2>김어진</h2>`)
}).listen(3000, ()=> {
    console.log('3000포트로 연결');
})