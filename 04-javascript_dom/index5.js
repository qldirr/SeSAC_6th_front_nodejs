//js Event(이벤트)
// 어떤 사건을 의미 ex) 버튼 클릭, 웹페이지 로드, 키보드 키 눌렸을 때....

//이벤트에 함수 등록 방법
//- HTML 상에서 onXXX 속성으로 등록
//- js 에서 listener을 사용해 등록

//1. onXXX 속성으로 등록
function clickH1(){
    alert('제목 클릭 함수 이용')
}

//2. addEventListener
const btn1 = document.querySelector('.btn-black')
const btn2 = document.querySelector('.btn-green')
const btn3 = document.querySelector('.btn-blue')
const btn4 = document.querySelector('.btn-red')
const container = document.getElementById('container');


//addEventListener(이벤트 종류, 이벤트 발생 시 일어날 일 함수 작성)
btn1.addEventListener('click', function (){
    alert('버튼 1 클릭')
})

btn1.addEventListener('mouseover', function (){
    btn1.style.backgroundColor = 'aqua'
})
// btn1.addEventListener('mouseout', function (){
//     btn1.style.backgroundColor = 'rgb(44,44,44)'
// })

btn1.addEventListener('mouseout',  () => {
    btn1.style.backgroundColor = 'rgb(44,44,44)'
})

btn2.addEventListener('click',  () => {
    const div = document.createElement('div');
    div.style.backgroundColor = 'pink'
    div.innerHTML = 'HI!!!!'
    container.append(div);
})

btn3.addEventListener('click', changeColor)

function changeColor(){
    const divs = document.querySelectorAll('#container div')
    console.log(divs);
    for (let div of divs) {
        div.style.backgroundColor = 'skyblue'
    }
}

btn4.addEventListener('click', changeBtnColor)

function changeBtnColor(){
    console.log(this);   //자기 자신 -> btn4
    // console.log(this.parentNode);   //자기 자신의 부모 -> body
    this.style.backgroundColor = 'yellow'
}


// key event
// 이벤트 객체 - 브라우저는 발생한 이벤트에 대한 정보를 담은 '이벤트 객체(event object)'를 이벤트 리스너에 전달
// ex) mousedown 이벤트 발생 -> 이벤트 객체는 (마우스 좌표, 버튼 번호) 정보를 가짐
// ex) keydown 이벤트 발생 -> 이벤트 객체는 (키 코드값, 어떤 키가 눌렸는지에 대한 정보) 정보를 가짐
const btn = document.querySelector('button')
const input = document.querySelector('input')

btn.addEventListener('click', function(event){
    //이벤트 객체 - 이벤트에 대한 다양한 정보 포함
    console.log(event);   //이벤트 객체에 대한 정보 출력
})

input.addEventListener('keydown', function(e){
    console.log(e);
    console.log(e.code);   //눌려진 키의 고유 코드
    console.log(e.key);   // input 에 입력된 값

    if (e.code === 'ArrowUp'){
        console.log('up');
    }
    else if (e.code === 'ArrowDown'){
        console.log('down');
    }
    else {
        console.log('others');
    }
})


// form 이벤트
const form = document.getElementById('todo-form')   //form 태그 선택
const todos = document.querySelector('.todos')    //ul 태그 선택

form.addEventListener('submit', (e) => {
    console.log('submit');
    e.preventDefault();   //form submit 이벤트가 새로고침 되는걸 막아줌, 폼 제출 막음

    const todoInput = document.querySelector('input[name = "todo"]')   //form 태그 내 input 태그
    // console.log(todoInput.value);    //input 태그에 입력된 값 반환

    const newTodo = todoInput.value.trim();   //앞뒤 공백 없애주기

    if(newTodo !== ''){
        const newTodoLi = document.createElement('li')    //li 요소 생성 , <li></li>
        newTodoLi.append(newTodo)  //<li>input 입력값</li>, li 태그 자식 요소로 넣어주기
        todos.append(newTodoLi)  //li 태그를 ul태그의 자식 요소로 넣어주기

    }

    //input 초기화
    todoInput.value = '';
})



//change : input 요소에 변경이 일어나고 다른 요소를 클릭해 input이 포커스아웃(blur) 처리 되었을때 일어나는 이벤트
const changeInput = document.querySelector('#change-input')
changeInput.addEventListener('change', function (e){
    console.log('change!');    // 입력하고 엔터를 누르거나 input창 바깥을 클릭했을때 실행
    console.log(e.target.value);    // input 요소 안에 친 값
})

//input에 값이 입력될때마다 이벤트 발생
changeInput.addEventListener('input', function (){
    console.log('입력 발생');
    const div = document.querySelector('.intro')
    div.textContent = this.value    // input태그 내 입력된 값이 div태그에 실시간으로 출력
})
