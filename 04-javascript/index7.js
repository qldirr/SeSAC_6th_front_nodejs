//조건문
//if
if (5 > 3) {
    console.log('집가고싶다');
}  // 집가고싶다

let number = Number(prompt('숫자 입력해주세요'))
//1. prompt()로 사용자로부터 값을 입력받고(문자열)
//2. Number() 문자열 -> 숫자형 형변환

//아래와 동일한 코드
// let number2 = prompt('숫자 입력해주세요')
// number2 = Number(number)

if (number > 10) {
    console.log('입력한 수는 10보다 큼');
} else {
    console.log('입력한 수는 10보다 작거나 같음');
}

if (number > 10) {
    console.log('입력한 수는 10보다 큼');

}
else if (number === 10) {
    console.log('입력한 수는 10');

}
else {
    console.log('입력한 수는 10보다 작음');
}

if (number > 100 || number < 0) {
    console.log('입력값이 잘못됨, 숫자의 범위는 0~100');
}
else if (number >= 90) {
    console.log('A');
}
else if (number >= 80) {
    console.log('B');
}
else if (number >= 70) {
    console.log('C');
}
else if (number >= 60) {
    console.log('D');
}
else {
    console.log('F');
}

//중첩 if문
let userId = 'user01'
let userPwd = '1234'

//id와 pwd를 검사하는 함수
function loginUser() {
    let inputId = prompt('아이디 입력')
    let inputPwd = prompt('비밀번호 입력')

    //userId = inputId -> userPwd&inputPwd 비교
    //inputId에 빈값 입력 -> '아이디 입력 안함' 문구 반환
    //inputId가 틀렸다면 -> '아이디 틀림' 문구 반환
    if (userId === inputId) {
        if (userPwd === inputPwd) {
            return '로그인 성공'
        }
        else {
            return '비번 오류, 로그인 실패'
        }
    }
    else if (inputId === '') {
        return '아이디 입력 안함'
    }
    else {
        return '아이디 틀림, 로그인 실패'
    }
}
const result = loginUser();   //loginUser함수의 리턴값을 result 변수에 저장
console.log(result);