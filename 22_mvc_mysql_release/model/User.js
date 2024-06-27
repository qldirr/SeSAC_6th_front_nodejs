const mysql = require('mysql')

// DB 연결 객체
const conn = mysql.createConnection({
    host: 'localhost',   // DB가 설치된 호스트 IP 주소
    user: 'user',    // DB 접속 유저 이름
    password: '1234',    // DB 접속 비번
    database: 'codingonexample'    // DB 이름
})

// 회원 등록
exports.insertUser = (data, callback) => {
    conn.query(`insert into user(userid, name, pw) values('${data.userid}', '${data.name}', '${data.pw}')`, (err, rows) => {
        if(err) throw err;
        
        console.log('Model/insertuser', rows);
        callback(rows.insertId)
    })
}

// 로그인 회원 조회
exports.getUser = (data, callback) => {
    let query;
    if ('pw' in data) query = `select * from user where userid = '${data.userid}' and pw = '${data.pw}'`
    else query = `select * from user where userid = '${data.userid}'`

    conn.query(query , (err, rows) => {
        if(err) throw err;
        console.log('Model/getuser', rows);
        callback(rows[0])
    })
}


// 회원 정보 수정
exports.updateUser = (data, callback) => {
    const {pw, name, id} = data
    conn.query(`update user set pw='${pw}', name='${name}' where id = ${id} `, (err, rows) => {
        if(err) throw err;
        console.log('Model/updateuser', rows);
        callback(true)
    })
}

// 회원 삭제
exports.deleteUser = (data, callback) => {
    conn.query(`delete from user where id = ${data.id}`, (err, rows) => {
        if(err) throw err;
        console.log('Model/deleteuser', rows);
        callback(true)
    })
}