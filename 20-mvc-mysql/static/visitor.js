const tbody = document.querySelector('tbody')

// 폼의 등록버튼 클릭 시 POST /visitor 요청
async function createVisitor() {
    console.log('click');

    const form = document.forms['visitor-form']
    console.log('form', form);
    console.log('form.name', form.name);

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
        console.log('res', res);

        const { data } = res;   // res 에서 data를 꺼냄

        const html = `
            <tr id="tr_${data.id}">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.comment}</td>
                <td><button type="button">수정</button></td>
                <td><button type="button">삭제</button></td>
            </tr>
        `
        // insertAdjacentHTML : 특정 요소에 html 추가
        tbody.insertAdjacentHTML('beforeend', html)

    } catch (error) {
        console.error(error)
    }

    // .then((res) => {
    //     console.log(res);

    //     const {data} = res;   // res 에서 data를 꺼냄

    //     const html = `
    //         <tr id="tr_${data.id}">
    //             <td>${data.id}</td>
    //             <td>${data.name}</td>
    //             <td>${data.comment}</td>
    //             <td><button type="button">수정</button></td>
    //             <td><button type="button">삭제</button></td>
    //         </tr>
    //     `
    //     // insertAdjacentHTML : 특정 요소에 html 추가
    //     tbody.insertAdjacentHTML('beforeend', html)
    // })
}
