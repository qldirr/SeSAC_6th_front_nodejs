// JSON
const car = `{
"model" : "IONIQ 5",
"company" : "HYUNDAI",
"price" : 5000000,
"year" : 2023,
"isElectricCar" : true,
"options" : ["side mirror", "smart sensor", "built-in cam"]
}`;

console.log(car);   // JSON 객체
// {
//     "model" : "IONIQ 5",
//     "company" : "HYUNDAI",
//     "price" : 5000000,
//     "year" : 2023,
//     "isElectricCar" : true,
//     "options" : ["side mirror", "smart sensor", "built-in cam"]
//     }

// 역직렬화 : JSON.parse() -> 통신하여 받은 데이터를 객체로 변환
// json to js obj
const obj = JSON.parse(car)
console.log(obj);   // js 객체
// {
//     model: 'IONIQ 5',
//     company: 'HYUNDAI',
//     price: 5000000,
//     year: 2023,
//     isElectricCar: true,
//     options: [ 'side mirror', 'smart sensor', 'built-in cam' ]
//   }

// obj 변수는 js object 이므로 . / [] 연산자를 이용해 키 값에 접근 가능
console.log(obj.model);    // IONIQ 5
console.log(obj.price);   // 5000000
console.log(obj.hello);   // undefined - 'hello'라는 키 없음

// -------------------------------------------------------------------------------------
// 직렬화 : JSON.stringify() -> 통신하기 쉬운 포맷(JSON)으로 변환
// js obj to json
const json = JSON.stringify(obj)   // {"model":"IONIQ 5","company":"HYUNDAI","price":5000000,"year":2023,"isElectricCar":true,"options":["side mirror","smart sensor","built-in cam"]}
console.log(json, typeof json);    // string
// json 변수는 JSON 형태의 문자열이므로 . / [] 연산자를 이용해 키 값에 접근 불가
console.log(json.model);    // undefined
console.log(json.price);   // undefined
console.log(obj.hello);   // undefined - 'hello'라는 키 없음

// json 변수는 string 타입이므로 string 타입에 쓸 수 있는 내장 메서드 사용 가능
console.log(json.split(''));
console.log(json.toUpperCase());    // {"MODEL":"IONIQ 5","COMPANY":"HYUNDAI","PRICE":5000000,"YEAR":2023,"ISELECTRICCAR":TRUE,"OPTIONS":["SIDE MIRROR","SMART SENSOR","BUILT-IN CAM"]}

