// 빈 객체 생성
const nickObj = {}
console.log('nickObj >> ', nickObj);

// id 속성을 가진 객체로 생성
const socket = { id: 'asdf1234' }
console.log('socket >>', socket);

// js에서 obj에 key, value 추가 방법
// 1. '.' 연산자 사용
nickObj.hello = '안녕'
nickObj.hi = '안녕2'

// 2. 배열 사용
nickObj['apple'] = '사과'

// 3. 변수 이용
nickObj[socket.id] = 'hong'
console.log('nickObj >> ', nickObj);

// js에서 객체의 특정 키가 존재하는지 검사
const nickObj2 = { hello: '안녕', apple: '사과' }
const nick1 = '안녕'
const nick2 = '사과'
const nick3 = '오렌지'
console.log('nickObj2 >> ', nickObj2);

// Object.values() : object에서 값만 뽑아서 배열로 리턴, 내장 함수
console.log(Object.values(nickObj2));     // [ '안녕', '사과' ]
console.log(Object.values(nickObj2).indexOf(nick1));     // 0, nick1 이 0번째 인덱스
console.log(Object.values(nickObj2).indexOf(nick2));     // 1
console.log(Object.values(nickObj2).indexOf(nick3));     // -1, nick3 은 존재하지 않음

console.log('--------------------------------------');

// for in 반복문
for (let key in nickObj2) {
    console.log(key, nickObj2[key]);   // key, value 출력
    // hello 안녕
    // apple 사과
}

// object 요소 삭제
console.log('삭제 전 >> ', nickObj2);
delete nickObj2['hello']
console.log('삭제 후 >> ', nickObj2);
