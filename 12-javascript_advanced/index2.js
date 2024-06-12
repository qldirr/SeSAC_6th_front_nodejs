// spread 연산자(전개구문) ...
const a = [1,2,3]
const b = [4,5]

const spread = [...a, ...b]
console.log(spread);     // [1,2,3,4,5]


const c = [...'HELLO']
console.log(c);    // [ 'H', 'E', 'L', 'L', 'O' ]

// 기존의 방식
const d = "HELLO".split('')    // 위와 동일
console.log(d);    // [ 'H', 'E', 'L', 'L', 'O' ]


// spread 연산자를 object에 사용
const chip = {
    base: 'chip',
    company: 'lotte'
}

const potatoChip = {
    ...chip,
    flavor: 'potato'
}
console.log(chip);
console.log(potatoChip);



// ---------------------------------------------------------
// rest 파라미터 - 이름을 굳이 rest라고 지을 필요는 없음
// 함수에서 사용시 
const values = [10,20,30,40,50,60]
function get(a, b, c, ...rest){     // 앞에서부터 순서대로 읽고 나머지는 rest에 넣어라
    console.log(a,b,c);    // 10 20 30
    console.log(rest);   // [ 40, 50, 60 ]
}
get(...values)    // 스프레드 연산자(...values)를 사용하여 values 배열의 요소들을 개별 인수로 분해하여 전달


// ------------------------------------------------------------
const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
  };
  const {flavor, ...abc} = icecream;
//   console.log(flavor);   // choco
//   console.log(abc);   // { company: 'lotte', price: 1000 }

  // 배열에서의 rest 파라미터
  const number = [1,2,3,4,5,6,7,8]
  const [one1, two1, ...rest2] = number
  console.log(one1, two1);    // 1 2
  console.log(rest2);    // [ 3, 4, 5, 6, 7, 8 ]