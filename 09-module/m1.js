const add = (a,b) => {
    return a+b
}

module.exports = add;

// 변수에 넣어서 exports를 하나 함수 자체를 exports하나 똑같은 결과
module.exports = (a,b) => {
    return a+b
}

