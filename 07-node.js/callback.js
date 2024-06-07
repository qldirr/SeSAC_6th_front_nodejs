function first(){
    second();    // second 함수 호출
    console.log('1');
    return 
}

function second(){
    console.log('2');
    return
}

first();     // 2 1

// 콜백함수 : 어떤 지정된 기능이 종료된 후에 실행되는 함수, 거의 모든 함수가 콜백함수의 형태로 만들어져 있음



