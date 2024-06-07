const http = require('http')
const fs = require('fs')   //파일 모듈(내장) 불러오기

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type','text/html')
    fs.readFile('./views/index.html', (err, data) => {    //index.html 파일을 가져와라
        if(err){   //에러 났을때
            console.log(err);
            res.end()
        } else{   //정상 출력 됐을때
            res.end(data)
        }
    })    
})
server.listen(8000, () => {
    console.log('8000서버 실행');
})
