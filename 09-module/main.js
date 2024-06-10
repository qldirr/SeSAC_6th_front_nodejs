// const add = require('./m1')
// console.log(add(1,2));

const math = require('./m2')
console.log(math.add(1,2));
console.log(math.subtract(10,2));


// 변수를 각각 분리해서 넣어도됨, 위랑 같은 의미
const math = require('./m2')
const {add, subtract} = math;
console.log(add(1,2));
console.log(subtract(10,2));

