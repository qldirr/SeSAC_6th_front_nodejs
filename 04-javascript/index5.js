//연산자

//대입 연산자(=) -  변수에 값을 할당할때 사용하는 연산자
//산술 연산자
// - 사칙 연산:+ - * /
//- 나머지 연선:%
//- 거듭 제곱 연산:**

let a = 5;
let b = 2;

console.log(a+b);  //7
console.log(a-b);  //3
console.log(a*b);  //10
console.log(a/b);  //2.5
console.log(a%b);  //1
console.log(a**b);  //25

//비교 연산자
//1. 동등 비교
//- 같다: ==, ===
//- 같지 않다: !=, !==
// ==, != : 값만 비교 -> type은 비교하지 않는 관대한 연산자
// ===, !== : 값과 type 모두 비교 -> 엄격한 연산자
console.log(1==1);   //true
console.log(1==2);   //false
console.log(1!=2);   //true
console.log(1!=1);   //false
console.log('1'==1);   //true
console.log('1'!=1);   //false
console.log('-----------------');
console.log(1===1);  //true
console.log(1===2);  //false
console.log(1!==2);  //true
console.log(1!==1);  //false
console.log('1'===1);  //false
console.log('1'!==1);  //true
console.log('-----------------');

//2. 크기 비교
// <, >, <=, >=
console.log(2>1);  //true
console.log(2>=2);  //true
console.log(2<1);  //false
console.log(2>=2);  //true
console.log('-----------------');

//동등 연산자 2개(==)는 예기치 못한 결과를 발생할수도 있으므로 자제 권장(다 true 결과)
console.log(1=='1');  //true
console.log('0'==false);  //true
console.log(''==0);  //true
console.log(null==undefined);  //true

//논리 연산자
//!: not (true->false, false->true)
// && : and (여러 값 중 모두가 참 -> 참)
// || : or (여러 값 중 하나라도 참 -> 참)
console.log(!true);   //false
console.log(!false);   //true
console.log(!!true);   //true
console.log(!!false);   //false

console.log(true && true);   //true
console.log(true && false);   //false
console.log(false && false);   //false

console.log(true || true);   //true
console.log(true || false);   //true
console.log(false || false);   //false

console.log(!(2>1));   //false
console.log(2>1 && -2<1);   //true
console.log((2>1 && -2<1) || 5>2);   //true
console.log('--------------------------------');   

//문자열에서 + 연산 : 문자열 더하기
console.log('안녕'+'하세요');

//더하기 이외의 연산은 숫자로 자동 형변환되어 계산
console.log('5'-'2');   //3
console.log('5'*'2');   //10
console.log('5'/'2');   //2.5
console.log(5/'2');   //2.5

//증감연산자
// ++ : 변수 값 1 증가
// -- : 변수 값 1 감소
// 증감 연산자는 붙이는 위치에 따라 결과가 다름
let result1, result2;
let num = 10 , num2 = 10;
console.log(num);  //10

//후위 연산자(postfix operator) - 변수에 먼저 대입한 후 연산 수행
result1 = num++;
console.log(result1);   //10, result1에 먼저 num이 들어가고 +연산이 실행되었으므로 계속 출력해도 10이 나옴
console.log(num);   //11

//전위 연산자(postfix operator) - 연산 수행을 하고 변수에 대입
result2 = ++num2;
console.log(result2);   //11, result1에 먼저 +연산이 실행되고 num2가 들어갔으므로 11이 출력 
console.log(num2);   //11

//연산자 줄여쓰기 +=, -=
console.log(num+=1);  //12
console.log(num-=1);  //11
console.log(num*=num2);  //11*11=121
console.log(num);  //121
console.log(num/=num2);  //121/11=11
