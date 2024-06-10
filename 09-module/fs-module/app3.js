const fs = require('fs')

// 파일 생성
// fs.readFile('./input.txt', 'utf-8', function(err, data){
//     console.log(data);
// })

const data = fs.readFileSync('./input.txt', 'utf-8')   // 동기화, 콘솔창에 data 먼저 출력 후 '파일 읽기 완료' 출력
console.log(data);

// fs.readFile('./input.txt', function(err, data){
//     console.log(data);   // <Buffer 31 31 31 0d 0a 32 32 32 0d 0a 33 33 33> 이런 형식으로 출력(아스키 코드)
// })

console.log('파일 읽기 완료');

