//js 표준 내장 객체
// - 기본적으로 미리 정의된 객체
//- 모든 js 환경에서 사용 가능한 내장 객체
// - 자주 사용되는 기능을 미리 구현해 놓은 것

// 1. Date 객체 : 시간, 날짜
// 날짜 생성 후 저장
let now = new Date();
console.log(now);    //Mon Jun 03 2024 13:26:02 GMT+0900

// 참고) 타임스탬프(timestamp) : 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 함수, '에포크' 이후의 시간을 나타냄
// 에포크 : 특정 시간의 기준점
// 왜 이시간 이후?? : 역사적 이유(유닉스 os에서 타임스탬프를 측정하는데 사용된 날짜 초기 컴퓨터 시간 나타냄), 기술적 편의성(시간을 숫자로 표현하는 방법, 수학적으로 편리한 계산 가능)

// new Date(timestamp)
let jan_01_1970 = new Date(0)
console.log(jan_01_1970);   //Thu Jan 01 1970 09:00:00 GMT+0900

let jan_02_1970 = new Date(24*3600*1000);  // 24시간
console.log(jan_02_1970);   //Fri Jan 02 1970 09:00:00 GMT+0900 

// new Date(date_string)
let date = new Date('2024-06-03')
console.log('date>', date);   //Mon Jun 03 2024 09:00:00 GMT+0900

let date2 = new Date('2024', '06', '03')   // MM(0(1월) ~ 11(12월))
console.log('date>', date2);   //Wed Jul 03 2024 00:00:00 GMT+0900

//관련 메서드
//객체 점 접근법
//getDate() : 월의 몇번째 날인지 반환
//getDay() : 주의 몇번째 날인지 반환(0부터 시작)
//getMonth() : 몇번째 달인지 반환(0부터 시작)
//getHours() : 시간 반환(0부터 23까지)
//getMinutes() : 분 반환(0부터 59까지)
//getSeconds() : 초 반환(0부터 59까지)
//getMilliseconds() : 밀리초 반환(0부터 999까지)
//getTime() : 1970년 1월 1일부터 현재까지의 밀리초 단위의 시간 반환

console.log(now.getFullYear());   //2024
console.log(now.getMonth() + 1);   //0~11 주의
console.log(now.getDate());   //3
console.log(now.getHours());   //13
console.log(now.getMinutes());   //38
console.log(now.getSeconds());   //39
console.log(now.getMilliseconds());   //0~999
console.log(now.getDay());   //0(일) ~ 6(토)


//------------------------------------------------------------------------------
// Math 객체 :  수학적 상수와 함수
//속성
console.log(Math.E);   //2.718281828459045
console.log(Math.PI);   //3.141592653589793
console.log(Math.SQRT2);   //1.4142135623730951 : 2의 제곱근

//메서드
console.log(Math.min(100, -2, 0, 5));  //-2
console.log(Math.max(100, -2, 0, 5));  //100
console.log(Math.round(5.3124));   //5-> 반올림
console.log(Math.ceil(5.3124));   //6-> 강제올림
console.log(Math.floor(5.7124));   //5-> 강제내림
console.log(Math.random);   //0 <= x < 1 의 난수

//Math.random() 응용 예시
//0 ~ 9
console.log(Math.floor(Math.random() * 10));   //0 <= x < 10 만들고 내림

//0~10
console.log(Math.floor(Math.random() * 11));   //0 <= x < 11 만들고 내림

//quiz)
//1~100
console.log(Math.floor(Math.random() * 100 + 1));    //0 <= x < 100 에서 1을 더하고 내림
//20~22
console.log(Math.floor(Math.random() * 3) + 20 );   //0 <= x < 3 에서 내림 하고 20 더하기
