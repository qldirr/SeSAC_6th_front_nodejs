const mysql = require('mysql')

// DB 연결 객체
const conn = mysql.createConnection({
    host: 'localhost',   // DB가 설치된 호스트 IP 주소
    user: 'user',    // DB 접속 유저 이름
    password: '1234',    // DB 접속 비번
    database: 'codingon'    // DB 이름
})

// 방명록 목록 조회
exports.getVisitors = (callback) => {
    conn.query('select * from visitor', (err, rows) => {
        if (err) {
            throw err;
        }

        console.log('visitor.js:', rows);
        // [
        //     RowDataPacket { id: 1, name: '홍길동', comment: '내가 왔다' },
        //     RowDataPacket { id: 2, name: '이찬혁', comment: '으라차차' }
        //   ]
        callback(rows)
    })
}

// 방명록 추가
exports.postVisitor = (data, callback) => {
    conn.query(`insert into visitor(name, comment) values('${data.name}','${data.comment}')`, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('visitor.js:', rows);
        // OkPacket {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 4,
        //     serverStatus: 2,
        //     warningCount: 0,
        //     message: '',
        //     protocol41: true,
        //     changedRows: 0
        //   }
        callback(rows.insertId)    // 새로 입력한 row의 pk값
    })
}
