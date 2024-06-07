const http = require('http')
const fs = require('fs')   //파일 모듈(내장) 불러오기

// 파일 about.html 과 index.html 사이 왔다갔다 할 수 있는 페이지 생성
const server = http.createServer((req, res) => {
    let path = './views/'
    switch (req.url) {    // req.url 은 http://127.0.0.1:8000 뒤에 붙는 거
        case '/':
            path += 'index.html'   //  ./views/index.html
            res.statusCode = 200
            break;
            case '/about':
            path += 'about.html'   //  ./views/about.html
            res.statusCode = 200   
            break;
        default : 
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){   //에러 났을때
            console.log(err);
            res.end()
        } else{   //정상 출력 됐을때
            res.end(data)
        }
    })
})

server.listen(8000, () => {
    console.log('8000 port');
})