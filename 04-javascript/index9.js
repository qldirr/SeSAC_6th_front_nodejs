// 내장 메서드 - 프로그래밍 언어나 프레임워크에서 기본적으로 제공되는 메서드, 따로 설치하거나 추가 설정 필요 없음

// 문자열 - 문자열을 다루는데 유용한 기능 제공
let str = 'Happy Birthday';
let str2 = '    Happy Birthday   '

//문자열 인덱싱
console.log(str[0]);   //H
console.log(str[0] + str[12]);   //Ha

// 'Hard' 를 만드려면
console.log(str[0] + str[1] + str[8] + str[11]);   

// 문자열 길이(length는 메서드가 아닌 속성), 길이는 1부터 셈
console.log(str.length);   //14
console.log(str2.length);   //21


//대소문자 변환
console.log(str.toUpperCase());    //HAPPY BIRTHDAY
console.log(str2.toUpperCase());   //    HAPPY BIRTHDAY   
console.log(str.toLowerCase());   //happy birthday   
console.log(str2.toLowerCase());   //    happy birthday   


//양끝 공백 제거
console.log(str2.trim());   //Happy Birthday
console.log(str2.trim().length);   //14

//글자 위치 찾기 - indexOf() -> 인덱스는 0부터 시작, 같은 문자열이 있으면 처음에 나오는 위치
console.log(str.indexOf('y'));   //4
console.log(str.indexOf('i'));   //7
console.log(str.indexOf(' '));   //5
console.log(str.indexOf('v'));   //-1 : 존재하지 않는 문자열
console.log(str.indexOf());   //-1 : 파라미터에 아무것도 안 넣어도 -1 반환

//문자열 자르기 - slice() -> 음수값이 들어간다면 뒤에서부터 순서를 셈
console.log(str.slice(10));   //hday - 10번 위치 문자 ~ 끝
console.log(str.slice(1,5));   //appy - start(1) ~ end-1(4) 출력
console.log(str.slice(-4));   //hday - 뒤에서 4번째 위치 ~ 끝

//문자열 바꾸기 - replace()
console.log(str.replace('p', 'w'));   //Hawpy Birthday
console.log(str.replace('B', 'w'));   //Happy wirthday
console.log(str.replaceAll('p', 'w'));   //Hawwy Birthday

//문자열 쪼개서 배열로 변환 - split() -> 기준이 되는 문자가 없어짐, 기준이 되는 문자가 여러개일 경우 기준이 되는 첫번째 문자만 빠지고 나머지는 빈공간이 됨
let str3 = 'dinner';
console.log(str3.split('e'));   // ['dinn', 'r']
console.log(str3.split('n'));   // ['di', '', 'er']

//repeat()
console.log(str3.repeat(3));   // dinnerdinnerdinner


//------------------------------------------------------------------------------------

//배열 관련
let arr = [1,2,3,4,5];
let arr2 = ['monkey','dog','cat','panda'];

console.log(arr);
//배열에 값 추가 
// arr[5] = 6;   //5번 인덱스에 값 6 추가
// console.log(arr);
// arr[8] = 100;  //인덱스를 건너뛰면 빈값(empty)이 들어감
// console.log(arr);

//push() - 맨끝에 요소 추가
arr.push(6);
arr.push(10);
console.log(arr);

//pop() - 맨끝에 요소 제거
arr.pop();
console.log(arr);   //10이 없어짐

//unshift() : 맨앞에 요소 추가
arr2.unshift('snake')
console.log(arr2);

//shift() : 맨앞의 요소 제거
arr2.shift();
console.log(arr2);   //snake 사라짐

//length : 배열 길이
console.log(arr.length);   //6

//includes(요소) : 요소가 있는지 없는지 검사(true, false)
console.log(arr2.includes('cat'));   //true
console.log(arr2.includes('apple'));  //false

//reverse() : 순서 반대로
// console.log(arr.reverse());   
console.log(arr);   //6,5,4,3,2,1 - 원본 배열 변경

//join() : join 안의 문자열 기준으로 병합 -> 문자열이 됨
console.log(arr2);
console.log(arr2.join(''));    //monkeydogcatpanda
console.log(arr2.join('-'));    //monkey-dog-cat-panda


//--------------------------------------------------------------------------------------------
//메서드 체이닝(method chaining) - 여러 메서드 연결 사용 가능
console.log('hello'.split(''));    //['h', 'e', 'l', 'l', 'o']
console.log('hello'.split('').reverse());    //['o', 'l', 'l', 'e', 'h']
console.log('hello'.split('').reverse().join(''));    //olleh

///--------------------------------------------------------------------------------------------