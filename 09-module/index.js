// - js 엔진, 구글 : v8 + c++ = node.js, 브라우저 밖에서 js 사용
// - 모듈 - 사용자가 만든 모듈, 시스템모듈, 빌드인모듈

// const add = (a,b) => {
//     return a+b
// }
//export 해서 다른 파일이 불러와서 사용할 수 있게끔
//모듈단위, 불러올때 require() -> commonJS, es6(import)

// console.log(__dirname);   //C:\Users\sba\Documents\github\sesac_ydp_6\07-node.js
// console.log(__filename);   //C:\Users\sba\Documents\github\sesac_ydp_6\07-node.js\review.js

// const add = require('./add')
// console.log(add(2, 3)); 
// console.log('from review.js');

// scope(범위) 모듈은 각각의 범위를 가짐
// require('./batman')
// require('./superman')

//모듈의 기초형태
//()() 함수의 자동실행
(function(){
    const superHero = 'Superman'
    console.log(superHero);
})()

//모듈의 형태
// (function(exports, require, module, __filename, __dirname){
//     //코드
// })()
