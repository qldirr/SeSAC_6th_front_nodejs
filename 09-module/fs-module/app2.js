const fs = require('fs')

// 디렉토리 읽기
// fs.readdir('./', function(err, files){    // ./는 현재 디렉토리를 의미
//     if(err) console.log('에러', err);
//     else console.log('결과는', files);   // [ 'app.js', 'app2.js', 'demo', 'index.js' ] - 배열로 출력, 파일과 디렉토리 다 출력
// })

// 파일 생성
// fs.writeFile('mynewfile1.txt', 'hello world', function(err){
//     if (err) throw err;
//     console.log('파일 생성');
// })   // writeFile(파일명, 파일 내용, 콜백함수)


// open(), w(쓰기 모드, 빈 내용)를 이용해 파일 생성
// fs.open('mynewfile2.txt', 'w', function(err, file){
//     if(err) throw err;
//     console.log('파일 생성');
// })

// 파일 생성 appendFile() - 추가, 기존 파일 있다고 전제
// fs.appendFile('mynewfile1.txt', 'KIM', function(err){
//     if(err) throw err;
//     console.log('파일 생성');
// })    // appendFile(파일명, 추가할 내용, 콜백함수)


// 파일 삭제
fs.unlink('mynewfile2.txt', function(err){
    console.log('파일 삭제');
})    // unlink(파일명, 콜백함수)


// 파일이름 변경
fs.rename('mynewfile1.txt', 'renamefile1.txt', function(err){
    if(err) throw err;
    console.log('파일 이름 변경 완료');
})    // rename(이름 바꿀 파일명, 변경할 이름, 콜백함수)