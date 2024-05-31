//조건문
//if
if (5 > 3) {
    console.log('집가고싶다');
}  // 집가고싶다

// let number = Number(prompt('숫자 입력해주세요'))
//1. prompt()로 사용자로부터 값을 입력받고(문자열)
//2. Number() 문자열 -> 숫자형 형변환

//아래와 동일한 코드
// let number2 = prompt('숫자 입력해주세요')
// number2 = Number(number)

// if (number > 10) {
//     console.log('입력한 수는 10보다 큼');
// } else {
//     console.log('입력한 수는 10보다 작거나 같음');
// }

// if (number > 10) {
//     console.log('입력한 수는 10보다 큼');

// }
// else if (number === 10) {
//     console.log('입력한 수는 10');

// }
// else {
//     console.log('입력한 수는 10보다 작음');
// }

// if (number > 100 || number < 0) {
//     console.log('입력값이 잘못됨, 숫자의 범위는 0~100');
// }
// else if (number >= 90) {
//     console.log('A');
// }
// else if (number >= 80) {
//     console.log('B');
// }
// else if (number >= 70) {
//     console.log('C');
// }
// else if (number >= 60) {
//     console.log('D');
// }
// else {
//     console.log('F');
// }

//중첩 if문
let userId = 'user01'
let userPwd = '1234'

//id와 pwd를 검사하는 함수
// function loginUser() {
//     let inputId = prompt('아이디 입력')
//     let inputPwd = prompt('비밀번호 입력')

//     //userId = inputId -> userPwd&inputPwd 비교
//     //inputId에 빈값 입력 -> '아이디 입력 안함' 문구 반환
//     //inputId가 틀렸다면 -> '아이디 틀림' 문구 반환
//     if (userId === inputId) {
//         if (userPwd === inputPwd) {
//             return '로그인 성공'
//         }
//         else {
//             return '비번 오류, 로그인 실패'
//         }
//     }
//     else if (inputId === '') {
//         return '아이디 입력 안함'
//     }
//     else {
//         return '아이디 틀림, 로그인 실패'
//     }
// }
// const result = loginUser();   //loginUser함수의 리턴값을 result 변수에 저장
// console.log(result);


//----------------------------------------------------------------------
//switch문
//- 하나 이상의 case문으로 구성
//- default가 필수는 아니지만 사용하기를 권장 = if문의 else 같은 존재
//  -> switch문 내의 모든 case가 매칭되지 않을때 실행
//- 여러개 case문을 묶을 수 있음
//- break : 조건을 빠져 나갈때 사용하는 키워드
let a = 6;
switch (a) {
    case 1:
    case 2:
    case 3:
        console.log('a가 1~3 이다');
        break;
    case(4):
        console.log('a가 4이다');
        break
    case(5):
        console.log('a가 5이다');
        break
    default:
        console.log('a가 무슨 값인지 모름');
        break;
}

//실습
//학점 계산기
//0~100 외의 숫자는 들어오지 않음
//number / parseInt() , 10
// let score = Number(prompt('점수를 입력해주세요'));
// parseInt(score/10)으로 조건 나눠도 됨
// switch (true) {
//     case (score >= 90 && score <= 100):
//         console.log('A학점');
//         break;
//     case (score >= 80 && score < 90):
//         console.log('B학점');
//         break;
//     case (score >= 70 && score < 80):
//         console.log('C학점');
//         break;
//     case (score >= 60 && score < 70):
//         console.log('D학점');
//         break;
//     case (score < 60):
//         console.log('F학점');
//         break;

//     default:
//         console.log('0~100사이의 값을 입력해주세요');
//         break;
// } 

//삼항 연산자 - if 문 간단하게
//조건식 ? 참일때 실행 : 거짓일때 실행
let num = 5;

//if문
if (num % 2 === 1) {
    console.log('홀수');
}
else {
    console.log('짝수');
}

//삼항 연산자
num % 2 === 1 ? console.log('홀수') : console.log('짝수');

//실습 - new date
// 내장 함수 - 현재 날짜와 시간을 나타내는 js date 객체를 반환
// 내장함수는 js 엔진이 기본적으로 제공하는 함수, 개발자가 정의하지 않아도 사용 가능, 전역 객체에 속해 있어 어디서든 접근과 사용이 가능
let now = new Date().getHours();
console.log(now);

now >= 12 ? console.log('오후') : console.log('오전');

