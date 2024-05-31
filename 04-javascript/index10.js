//배열에서 반복문 사용하기
// - 기본 for문
//- for of문
//- forEach() 메서드

//배열에서 for문 사용 이유
const fruits = ['apple', 'grapes', 'mango','banana', 'orange']
console.log(fruits.length);   //5
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

for (let f = 0; f < fruits.length; f++) {
    console.log(fruits[f]);
}


// ex)
const arr = [1,2,5,6,7];
const alphabets = ['a','b','c','d'];


//1. 기본 for문
for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}

//2. for ..of 반복문 - 배열 요소를 직접 참조하므로 인덱스를 사용할 필요 없음, 순서 있는 구조 반복에 적합
for (let alpha of alphabets) { 
    console.log('alpha - ', alpha);   //배열 alphabets의 각 요소를 반복하면서 alpha 변수에 순서대로 할당, 각각 요소에 대해 반복문 블록 실행
}      // alpha -  a alpha -  b alpha -  c alpha -  d


//3. forEach() 메서드 - 배열의 각 요소에 대해 지정된 함수 실행, 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행할 때 사용
//      각요소에 대해 함수가 호출될때마다 해당 요소가 함수의 인자로 전달
alphabets.forEach(function(alpha){   
    console.log(alpha);    //a, b, c, d  -> 반복하고 있는 현재 요소
})
alphabets.forEach(function(alpha, index){   
    console.log(alpha, index);    //a 0, b 1, c 2, d 3  -> 반복하고 있는 현재 요소, 현재 요소의 인덱스
})
alphabets.forEach(function(alpha, index, array){   
    //alpha : 반복하고 있는 현재 요소
    //index : 현재 요소의 인덱스(생략 가능)
    //array : forEach를 호출한 배열(생략 가능)
    console.log(alpha, index, array);    
    //a 0 ['a', 'b', 'c', 'd'], b 1 ['a', 'b', 'c', 'd'], c 2 ['a', 'b', 'c', 'd'], d 3 ['a', 'b', 'c', 'd'] 
})


//----------------------------------------------------------------------------------------------------------------------
//map(), filter(), find()
//- 조건에 따라 요소를 변형하거나 선택

//map() - 배열의 각 요소에 대해 지정된 함수를 호출하고 그 결과로 새로운 배열 생성
const numbers = [1,2,3,4,5];
const doubleNumbers = numbers.map(function(num){
    return num * 2;
})
const doubleNumbers2 = numbers.map(num => num * 3)   //화살표 함수 사용 가능
console.log(doubleNumbers);   //[2, 4, 6, 8, 10]
console.log(doubleNumbers2);   //[3, 6, 9, 12, 15]

//filter() - 배열의 각 요소에 대해 지정된 함수를 호출하고 그 결과가 true인 요소들로 이뤄진 새로운 배열 생성
const practiceNums = numbers.filter(function(num){
    return num % 2 ===0;
})
const practiceNums2 = numbers.filter(num => num % 2 ===1)    //화살표 함수 사용 가능
console.log(practiceNums);    //[2, 4]
console.log(practiceNums2);    //[1, 3, 5]

//find() - 조건을 만족하는 첫번째 요소 찾기, 조건에 만족하면 해당 요소 반환/조건에 불만족하면 undefined 반환
const practiceNums3 = numbers.find(function(num){
    return num % 2 ===0;
})
const practiceNums4 = numbers.find(num => num % 2 === 1)   //화살표 함수 사용 가능
console.log(practiceNums3);   //2
console.log(practiceNums4);   //1

// ---> map()과 filter()은 새 배열을 생성하고 find()는 요소를 반환

//------------------------------------------------------------------------------------------------------------
//option) for in 반복문
//객체의 key를 반복할 수 있는 구문

const dog = {
    name:'태풍',
    gender:'M',
    info:'cute'
}
for (let key in dog) {
    console.log(key+':'+dog[key]);    //name:태풍, gender:M, info:cute
}
//변수 = key = 각 속성의 키를 저장하는 변수
//객체 = dog = 속성을 반복할 객체


