// 비동기처리 3번째 방법 : async/await
// async : 함수 앞에 작성, 붙이는 순간 Promise가 아닌 값을 반환하더라도 Promise로 감싸서 반환
// async function f1(){
//     return 1;
// }

// async function f2(){
//     return Promise.resolve(1);
// }

// // 화살표 함수에도 async 키워드를 붙일 수 있음
// const f3 = async () => {
//     return 3;
// }

// console.log('f1 >> ',f1());     // Promise { 1 } - Promise 객체 반환
// console.log('f2 >> ',f2());     // Promise { <pending> } - Promise 객체 반환

// f1().then(function (result){
//     console.log(result);    // 1
// })

// f2().then(function (result){
//     console.log(result);    // 1
// })


//-------------------------------------------------------------------------------
// await : 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// - await 뒤에는 프로미스가 오게됨
// - **async 키워드를 사용한 함수 안에서만 await를 사용 가능

// async/await는 세트

// function fetchFruits() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             const fruits = ['🍌', '🍇', '🍓']
//             resolve(fruits)
//             // reject(new Error('알 수 없는 에러 발생!'))
//         }, 100)
//     })
// }

// i) promise then()
// fetchFruits()
//     .then(function (f) {
//         console.log(f);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

// ii) async/await
// async/await 에서는 예외 처리를 try-catch 구문으로 함
// async function printItems() {

//     try {
//         const fruits = await fetchFruits();    // [ '🍌', '🍇', '🍓' ]
//         // const fruits = fetchFruits();      // Promise { <pending> }
//         console.log(fruits);

//     } catch (error) {
//         console.log(error);
//     }
// }
// printItems();


// -----------------------------------------------------------------------------
let product, price;

function goMart(){
    console.log('마트에 가서 어떤 음료를 살지 고민');
}

function pickDrink(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('고민 끝');
            product = '제로 콜라'
            price = 6000
            // resolve();

            if (price <= 3000){
                resolve()
            } else {
                reject()
            }
        }, 3000)
    })
}

function pay() {
    console.log(`상품명:${product}, 가격:${price}`);
}

function noPay(){
    console.log('금액 부족');
}

async function exec(){
    try{
        // 함수의 실행 순서가 명확이 보임
        goMart();
        await pickDrink()   // 시간이 걸리는 pickDrink() 함수의 작업을 await키워드로 인해 기다려줌
        pay()
    } catch (err){
        noPay()
    }
}

exec();
