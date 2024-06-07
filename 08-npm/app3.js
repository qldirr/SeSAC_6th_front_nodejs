const http = require('http')
http.createServer((req, res) =>{
    var _url = req.url;   //요청할 때 쓴 url
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h2>Hello</h2>');
    res.end(`<p> ${_url} </p>`)
}).listen(8000, () => {
    console.log('서버 실행');
})
// 화면에 http://127.0.0.1:8000/about 이라고 치면
// p 태그 사이에 /about 이라고 뜸 -> 포트 뒤에 내가 친 url