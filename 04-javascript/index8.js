//반복문

//for문
for (let i = 0; i < 10; i++) {
    //i가 0~9 총 10번 반복
    console.log('안녕' + i);
}

//증가
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//감소
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

//1부터 n까지 합 구하기
let n = 10;  //어떤 숫자까지 합을 구할지에 대한 n
let sum = 0;  //합을 저장할 변수
for (let i = 1; i <= n; i++) {
    //sum 변수에 값을 재할당(이전 sum 변수의 값 + 현재 반복 변수 i 변수의 값)
    sum += i;
    console.log(i, sum);
}

//2단 ~ 9단 구구단 만들기
for (let i = 2; i < 10; i++){
    console.log(`-----${i}단-----`);
    for (let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);

    }
}

// 1~20까지 숫자 반복
//1~20 중에 짝수일때합
let sum2 = 0;
for (let i = 1; i <= 20; i++) {    //let i = 0; i <= 20; i+=2;  로도 가능(if문 안쓰려면)
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(`1~20까지의 짝수의 합 : ${sum2}`);

//-----------------------------------------------------------
//while문
let index = 0;
while (index < 10) {
    console.log('안녕', index);
    index++;
}

let index2 = 0;
while (true) {
    //의도적인 무한 루프
    console.log('안녕', index2);
    index2++;

    //무한루프 빠져나오는 조건
    if (index2 === 10) {
        break;
    }
}

//구구단 while 버전
let i = 2, j = 1;
while (i < 10) {
    while (j < 10) {
        console.log(`${i} * ${j} = ${i*j}`);
        j++;
    }
    i++;
    j=1;    //j를 초기화
}

//do ~ while문
/*
    - js에서 사용되는 반복문 중 하나
    - 조건이 참인지 여부에 상관없이 코드 블록을 최소 한번 실행 후 조건 검사
    - 항상 코드 블록을 한번 실행한 다음 조건이 참인 동안 반복 계속
*/
//구문
do {
    //실행할 코드 내용
} while (condition);

// ex1)
let g = 1;
do {
    console.log(g);
    g++;
} while (g <= 5);

// ex2)
let number;
do {
    number = parseInt(prompt('숫자를 입력하세요(10보다 큰 숫자):'), 10) 
} while (number <= 10);
console.log('입력한 숫자', number);

//------------------------------------------------------------------
//break, continue - 반복문에서 사용되는 제어문
//break - 반복문을 중단하고 빠져나옴
//continue - 현재 반복을 중지(스킵)하고 다음 반복으로 넘어감

//ex)
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;   //i=5일때 for 문을 나감
//     }
//     console.log(i);
// }   // 출력결과 : 1,2,3,4

// //ex)
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;   //i=3만 스킵
//     }
//     console.log(i);
// }   // 출력결과 : 1,2,4,5


