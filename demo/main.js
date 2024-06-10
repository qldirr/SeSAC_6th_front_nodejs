const http = require('http')
const url = require('url')   //  url 정보를 객체로 가져와서 분석(parse)하거나, url 객체를 문자열로 바꿔주는 기능(format, resolve)을 수행
const fs = require('fs')

// url 모듈은 웹주소를 읽어옴
// 읽어온 내용을 구문분석해 주소의 각 부분으로 나누고 객체로 변환
// url.parse(urlStr, [parseQueryString], [slashesDenoteHost]) - url 문자열을 url 객체로 변환하여 리턴
// url.parse()의 매개변수 중 [parseQueryString] 가
//      - true : url 객체의 query 속성을 객체 형식으로 가져옴
//      - false : url 객체의 query 속성을 문자열 형식으로 가져옴

var addr = 'http://localhost:8000/example.html?year=2024&month=feb'
// var addr = 'http://localhost:8000/demo.html?id=2024&pw=feb'
var q = url.parse(addr, true)
// console.log(q);
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:8000',
//     port: '8000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?year=2024&month=feb',
//     query: [Object: null prototype] { year: '2024', month: 'feb' },
//     pathname: '/example.html',
//     path: '/example.html?year=2024&month=feb',
//     href: 'http://localhost:8000/example.html?year=2024&month=feb' 
//   }
// console.log(q.pathname);    // /example.html - 경로와 파일이름
// console.log(q.search);   // ?year=2024&month=feb

// var qdata = q.query
// console.log(qdata);    //  { year: '2024', month: 'feb' }
// console.log(qdata.month);   // feb - 기존 쿼리에서 month에 해당하는 것만 출력



http.createServer((req, res) => { 
    // console.log(req);
    // console.log('req.url-', req.url);    // 브라우저 주소창에 '/winter.html'이라고 입력하면 req.url은 '/winter.html'
    var q = url.parse(req.url, true)   // true 옵션을 사용하면 쿼리 문자열을 객체로 변환
    var filename = '.' + q.pathname
    // console.log(filename);    // 브라우저 주소창에 '/winter.html'이라고 입력하면 filename 은 './winter.html' 이 됨
    fs.readFile(filename, function(err,data){
        if (err){    // 입력한 url이 없으면 404 
            res.writeHead(404, {'Content-Type':'text/html'})
            return res.end('404 Not Found')
        }

        res.writeHead(200, {'Content-Type':'text/html'})   // 입력한 url이 있으면 200
        res.write(data)
        return res.end();
    })
}).listen(8000, () => {
    console.log('8000 서버 실행');
})