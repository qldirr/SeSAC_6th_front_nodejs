// &&(and), ||(or)
// true && true -> true
// true && false -> false

const x = 5;
const result = x || 100;   // 첫번째 값이 true이기 때문에 뒤에거는 볼 필요가 없다고 판단
// console.log(result);   // 5

const  y = 7
const result2 = x < y && 'y가 큼'    // x<y 결과가 true, 'y가 큼'도 true
// console.log(result2);    // y가 큼

// falsy - undefined, null, 0, flase, '', NaN


// let userColor = 'red'
let userColor = undefined    // 결과가 blue, undefined는 false이므로 값이 있는 defaultColor변수 값 출력
let defaultColor = 'blue'
let currentColor = userColor || defaultColor
console.log(currentColor);   