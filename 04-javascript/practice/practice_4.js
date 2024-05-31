let number = parseInt(prompt('1~10000사이의 숫자를 입력'), 10)

for (let i = 1; i <= number; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log('1~100 숫자 중 2 또는 5의 배수 총합 : ', sum);