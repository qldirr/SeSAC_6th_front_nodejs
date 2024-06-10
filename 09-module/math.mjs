// es6 module 형식으로 확장자가 mjs, import 사용
// 실행시 확장자 적기
// 프로젝트로 es6 작성시 package.json에 "type":"module" 적어야함
const add = (a, b) => {
    return a+b
}

export default add;