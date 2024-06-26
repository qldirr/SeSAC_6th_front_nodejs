const mysql = require('mysql')

// DB 연결 객체
const conn = mysql.createConnection({
    host: 'localhost',   // DB가 설치된 호스트 IP 주소
    user: 'user',    // DB 접속 유저 이름
    password: '1234',    // DB 접속 비번
    database: 'codingonexample'    // DB 이름
})

