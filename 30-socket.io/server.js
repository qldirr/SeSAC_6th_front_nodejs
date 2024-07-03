const express = require('express');
// node.js 기본 내장 모듈인 'http' 불러오기
const http = require('http');
// 'http' 모듈은 HTTP 서버와 클라이언트 기능을 제공

// 'socket.io' 모듈 불러오기
// WebSocket 기반, 실시간 양방향 데이터 전송 지원 라이브러리
const socketIO = require('socket.io');

const app = express();

// Express 애플리케이션 기반으로 HTTP 서버 생성
const server = http.createServer(app);

// HTTP 서버 'server'를 'socket.io'에 바인딩하여 WebSocket 기능을 추가한 서버를 생성 -> 클라이언트-서버 간에 실시간 양방향 통신 가능
const io = socketIO(server)

const PORT = 8080;
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('client')
})

// 실습 3-2-1) 사용자 닉네임 모음 객체
const nickObj = {
    
}

// io.on() : socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
    // connection 이벤트는 클라이언트가 접속 했을 때 발생
    console.log('서버 연결 완료 :: ', socket.id);
    // socket.id : 소켓 고유 아이디 (브라우저 탭 단위)


    // 실습 1)
    // socket.on('hello', (data) => {
    //     console.log('data', data);     // { who: 'client', msg: 'hello' }
    //     console.log(`${data.who} : ${data.msg}`);  
    //     socket.emit('hellokr', {who: 'hello', msg: '안녕!!'})    // socket.emit(이벤트명, 보낼 데이터)
    // })

    // socket.on('study', (data) => {
    //     console.log('data', data);   
    //     console.log(`${data.who} : ${data.msg}`);  
    //     socket.emit('studykr', {who: 'study', msg: '공부!!'})
    // })

    // socket.on('bye', (data) => {
    //     console.log('data', data);    
    //     console.log(`${data.who} : ${data.msg}`);  
    //     socket.emit('byekr', {who: 'bye', msg: '잘가!!'})
    // })


    // 실습 3) 채팅창 입장 안내 문구
    io.emit('notice', `${socket.id}님이 입장하셨습니다`)

    // 실습 3-2) 채팅창 입장 문구 socket.id -> nickname
    // emit() from server - socket.emit(이벤트명, 데이터) : 해당 클라이언트에게만 이벤트 데이터 전송
    //                      io.emit(이벤트명, 데이터) : 서버에 접속된 모든(all) 클라이언트에게 전송
    //                      io.to(소켓아이디).emit(이벤트명, 데이터) : 소켓아이디에 해당하는 클라이언트에게 전송
    socket.on('setNick', (nick) => {
        console.log(`닉네임 설정 완료 : ${nick}님 입장`);

        // 실습 3-2-1) 프론트에서 입력한 nick이 nickObj 객체에 존재하는지 검사
    })

})




server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})