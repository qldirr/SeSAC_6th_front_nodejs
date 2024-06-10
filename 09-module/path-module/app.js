// path.join() - 여러 인자를 넣으면 하나의 경로로 합쳐줌
// path.resolve() - path.join()과 비슷하지만 약간의 차이
// path.parse() - 파일 경로를 root, dir, base, ext, name 구분
// path.format() - path.parse()한 객체를 파일 경로로 합침

const path = require('path')    // 파일/폴더/디렉터리 등의 경로를 편리하게 설정할 수 있는 기능을 제공
// console.log(path);
console.log(__dirname);   //C:\Users\sba\Documents\github\sesac_ydp_6\09-module\path-module
console.log(__filename);   //C:\Users\sba\Documents\github\sesac_ydp_6\09-module\path-module\app.js
console.log(path.basename(__dirname));   // 현재 파일이 위치해 있는 디렉토리, path-module
console.log(path.basename(__filename));   // 현재 파일 이름, app.js
console.log(path.join('a', 'b', 'index.html'));    //  a\b\index.html

//-------------------------------------------------------------------
let pathname = path.parse('/home/user/dir/file.txt');    // parsing - 구문 해석
console.log(pathname);    // 객체로 결과가 나옴
//  {
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
//   }

console.log(path.extname('/home/user/dir/file.txt'));    // .txt (확장자명)
console.log(path.basename('/home/user/dir/file.txt'));   // file.txt (파일명)

