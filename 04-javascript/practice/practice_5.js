let arr=[];
for (let i = 1; i <= 100; i++) {
    arr.push(i);
    
}
console.log(arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
}
console.log('1부터 100까지의 합 :', sum);

let sum2 = 0;
for (val of arr) {
    sum2 += val;
}
console.log('1부터 100까지의 합 :', sum2);

let sum3 = 0;
arr.forEach(value => sum3 += value)
console.log('1부터 100까지의 합 :', sum3);



let fruits1 = ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고']
let fruits2 = ['사과','파인애플','수박','참외','오렌지','망고']

let same = [];
let diff = [];

// fruits1의 각 요소를 반복하며 fruits2에도 존재하는지 확인
for (let i = 0; i < fruits1.length; i++) {
    if (fruits2.includes(fruits1[i])) {
        same.push(fruits1[i])
    } else {
        diff.push(fruits1[i])
    }
}

// fruits2의 각 요소를 반복하며 fruits1에는 없는 요소를 diff 배열에 추가
for (let i = 0; i < fruits2.length; i++) {
    if (!fruits1.includes(fruits2[i])){
        diff.push(fruits2[i])
    }
}
console.log('동일한 요소만을 가지는 배열:', same);   //['사과', '파인애플', '수박', '참외', '오렌지', '망고']
console.log('서로 다른 요소만을 가지는 배열:', diff);    //['딸기', '자두']



let day = new Date().getDay();

let isWeekend = day === 0 || day === 6 ? console.log('오늘은 주말~'):console.log('오늘은 평일~');




let random = Math.floor((Math.random()) * 11) ;
console.log(random);