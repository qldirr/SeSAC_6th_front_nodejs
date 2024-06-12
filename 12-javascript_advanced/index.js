// 배열 구조분해 할당
const arr1 = [1,2,3,4,5]
const arr2 = ['a','b','c']

const [one, two, three, four, five] = arr1
console.log(one, two, three, four, five);   // 1 2 3 4 5

const [x, y, z, alpha] = arr2
console.log(x, y, z, alpha);   // a b c undefined


let num1 = 1;
let num2 = 2;
// 변수값의 교환, 2개의 변수값을 교환할 때 제3의 변수사용 했지만 지금은 아님
console.log('before - ', num1, num2);
[num2, num1] = [num1, num2]
console.log('after - ', num1, num2);


const lists = ['apple', 'grape']
const [f1, f2, f3='orange'] = lists
console.log(f1, f2, f3);




// 객체(Object) : key와 value, {}
const obj = {
    title: '엘리먼트',
    content: 'fun',
    num: 5
}

// .표기법
// console.log(obj.num);
// console.log(obj.title);
// console.log(obj.content);
// console.log(obj['title']);
// console.log(obj['content']);
// console.log(obj['num']);

// 객체 구조분해, defalut값 주기 가능
const {num, title, content, star=1000} = obj;
console.log(num, title, content, star);

const {a1, b1, c1} = obj   // key와 같은 이름 사용하자
console.log(a1, b1, c1);    // undefined undefined undefined - 없는 키값을 입력해서 undefined 출력

// undefined : 변수는 할당되었지만(초기화) 값이 할당되지 않은 상태
// let a = 10



const lectureInfo = {
    name: 'Coding on',
    part: 'web',
    leader:'kim',
}

// console.log(lectureInfo);

function getInfo(lecture){
    const {name, part, leader} = lecture
    const output = `${name} 강의는 ${part} 개발을 공부함. 수업의 리더는 ${leader}`
    return output;
}

console.log(getInfo(lectureInfo));  // getInfo라는 함수의 파라미터로 lectureInfo객체를 대입