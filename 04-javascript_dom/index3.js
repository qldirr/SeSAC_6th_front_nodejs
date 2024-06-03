// console.log(document);    
// console.log(document.childNodes[1].childNodes[0]);    //자식 노드
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);   //취소선이 그어지는 이유 : 해당속성의 사용을 권장하지 않거나 더이상 지원되지 않을 가능성을 나타냄, 최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양

//-------------------------------------------------------------------------
//document 객체를 이용해 html 요소 선택
// 1. getElementById
// console.log(document.getElementById('green'));
// console.log(document.getElementById('red'));

// 2. getElementsByClassName (HTMLCollection)
// console.log(document.getElementsByClassName('pink'));
// console.log(document.getElementsByClassName('pink')[1]);  //배열 형태이기 때문에 인덱스로 추출 가능

// 3. getElementsByTagName (HTMLCollection)
// console.log(document.getElementsByTagName('div'));

// 4. getElementsByName (NodeList)
// console.log(document.getElementsByName('id'));

// 5. querySelector(css selector) : 처음 발견한 하나만 가지고옴
// console.log(document.querySelector('.pink'));
// console.log(document.querySelector('.others'));
// console.log(document.querySelector('#green'));
// console.log(document.querySelector('div'));    //태그 이름
// console.log(document.querySelector('[name="id"]'));   //속성

// 6. querySelectorAll(css selector) (NodeList) : 선택자에 해당되는 모든 요소들 선택
// console.log(document.querySelector('.pink'));
// console.log(document.querySelector('.others'));
// console.log(document.querySelector('#green'));
// console.log(document.querySelector('div'));    //태그 이름
// console.log(document.querySelector('[name="id"]'));   //속성

console.log(document.querySelector('.pink')[0]);
console.log(document.querySelector('.pink')[1]);
console.log(document.querySelector('.pink')[2]);
console.log(document.querySelector('.pink')[3]);
console.log(document.querySelectorAll('.pink'));


// 유사 배열(HTMLCollection, NodeList)
//[] 식으로 생긴 배열, 배열은 아님
// index, length는 가짐
// 배열과 달리 사용 가능한 메서드 제한

// NodeList -> forEach() 반복문 사용 가능
// document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

//HTMLCollection -> forEach() 반복문 사용 불가
// 반복을 해야된다면 Array 로 변경(Array.from())
// Array.from(document.getElementsByClassName('pink')).forEach((elem) => console.log(elem));

//for of 반복문 사용 가능
// const pinks = document.querySelectorAll('.pink');
// for (let pink of pinks){
//     console.log(pink);
// }