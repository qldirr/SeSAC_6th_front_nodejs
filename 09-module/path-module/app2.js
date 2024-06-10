//path 모듈

const path = require("path");

console.log(path.join('a', 'b', 'index.html') );   // a\b\index.html
console.log(path.join('/a', 'b', 'index.html'));   // \a\b\index.html
console.log(path.join('/a', 'b', '../index.html'));   // \a\index.html  - '..'은 부모 디렉토리를 나타내므로 'b'를 제거하고 'index.html'을 /a에 결합
console.log(path.join(__dirname, 'data.json'));   // C:\Users\sba\Documents\github\sesac_ydp_6\09-module\path-module\data.json

//join(상대 경로) VS resolve(절대 경로)
console.log(path.join('a', 'b', 'index.html') );   // a\b\index.html
console.log(path.resolve('a', 'b', 'index.html') );    // C:\Users\sba\Documents\github\sesac_ydp_6\09-module\path-module\a\b\index.html