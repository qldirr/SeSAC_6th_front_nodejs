
const tbody = document.querySelector('tbody')

// 폼안에 있는 등록 버튼이 있는 div 태그 선택
const buttonGroup = document.querySelector('#button-group')

// 폼의 등록버튼 클릭 시 POST /visitor 요청
async function createVisitor() {
    const form = document.forms['visitor-form']

    // 방명록 추가
    try {
        const res = await axios({
            method: 'post',
            url: '/visitor',
            // 추가하려는 정보는 req.body에 실어서 요청을 보냄
            data: {
                name: form.name.value,
                comment: form.comment.value
            }
        })
        console.log('insertres', res);

        const { data } = res;   // res 에서 data를 꺼냄

        const html = `
            <tr id="tr_${data.id}">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.comment}</td>
                <td><button type="button" onclick="editVisitor(${data.id})">수정</button></td>
                <td><button type="button" onclick="deleteVisitor(this, ${data.id})">삭제</button></td>
            </tr>
        `
        // insertAdjacentHTML : 특정 요소에 html 추가
        tbody.insertAdjacentHTML('beforeend', html)
        form.name.value = ''
        form.comment.value = ''

    } catch (error) {
        console.error(error)
    }
}


// 삭제 버튼 클릭시 테이블에서 해당 행 삭제
async function deleteVisitor(obj, id) {
    console.log(obj);    // 버튼 자기 자신(this)
    console.log(id);   // 누른 행의 id

    // console.log(confirm('진짜 삭제?')); 

    if (!confirm('진짜 삭제?')) {    // false : 취소버튼 클릭
        return;    // deleteVisitor 함수 종료 -> 백으로 요청 X
    }

    // 방명록 삭제
    try {
        const res = await axios({
            method: 'delete',
            url: '/visitor',
            // 추가하려는 정보는 req.body에 실어서 요청을 보냄
            data: {
                id,
            }
        })
        console.log('res', res.data);

        if (res.data) {    // 서버에서 result 값이 true라면
            // alert('삭제 성공')
            // obj.parentElement.parentElement.remove();   // obj는 삭제버튼, parentElement.parentElement는 버튼의 조상인 <tr>가 선택됨 -> <tr>태그 삭제
            obj.closest(`#tr_${id}`).remove();     // 버튼의 부모 중 'tr_id' id를 가진 거를 삭제해줘, 위랑 똑같은 의미
        }
    } catch (error) {
        console.error(error)
    }
}

// 수정 버튼 클릭시 form input에 value 넣고 변경/취소 버튼 보여주기
async function editVisitor(id) {
    // 방명록 조회
    try {
        const res = await axios({
            method: 'get',
            url: `/visitor/${id}`,    // 서버에서 req.params.id 사용
            // url: `/visitor?id=${id}`,    // 서버에서 req.query.id 사용
        })
        console.log('res', res.data);
        const { name, comment } = res.data
        const form = document.forms['visitor-form']
        form.name.value = name
        form.comment.value = comment

        const html = `
            <button type="button" onclick="editDo(${id})">변경</button>
            <button type="button" onclick="editCancel()">취소</button>
        `
        buttonGroup.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

// 수정 버튼 누르고 데이터 변경 하고 변경 버튼 클릭시 데이터 수정 요청 보내기
async function editDo(id) {
    const form = document.forms['visitor-form']

    // 방명록 수정
    try {
        const res = await axios({
            method: 'patch',
            url: `/visitor`,
            data: {
                id,
                name: form.name.value,
                comment: form.comment.value
            }
        })
        console.log('res', res.data);
        if (res.data.isUpdated) {
            alert('수정 성공')
            // 한행 선택(tr 태그 하나)
            const children = document.querySelector(`#tr_${id}`).children
            // children 이 tr태그 안에 총 5개가 있음 -> 해당 children에 입력받은 값을 대입
            children[1].textContent = form.name.value    // 두번째 열(이름)
            children[2].textContent = form.comment.value   // 세번째 열(방명록)

            // input 초기화
            editCancel()
        }
    } catch (error) {
        console.error(error)
    }
}

// 수정 버튼 누르고 취소 버튼 클릭시 input 초기화하고 등록버튼 보여주기
function editCancel() {
    // input 초기화
    const form = document.forms['visitor-form']
    form.name.value = ''
    form.comment.value = ''

    // 등록버튼 보여주기
    const html = `<button type="button" onclick="createVisitor()">등록</button>`
    buttonGroup.innerHTML = html

}