const fs = require('fs')
// console.log(fs);

// 디렉토리 생성
// fs.mkdir(path, mode, callback)
const path = require('path')
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err){
//         return console.error(err);
//     } 

//     console.log('디렉토리 생성 완료');
// })


// 디렉토리 삭제
// fs.rmdir(path, mode, callback)
fs.rmdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('디렉토리 삭제 완료');
})