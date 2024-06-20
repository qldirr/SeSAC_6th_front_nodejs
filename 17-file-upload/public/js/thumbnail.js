console.log('!');

async function uploadThumbnail() {
    // FormData 객체 - 폼 전송시 멀티미디어 파일을 비동기로 제출하고 싶으면 FormData 객체 이용
    const formData = new FormData()

    // 폼 요소 선택
    const fileInput = document.querySelector('#thumbnail')
    const inputTitle = document.querySelector('#thumbtit').value

    console.dir(inputTitle)
    console.dir(fileInput)
    console.dir(fileInput.files)     // 업로드한 파일 정보

    // FormData에 업로드한 파일 정보 추가
    formData.append('title', inputTitle)
    formData.append('thumbnail', fileInput.files[0])
    // console.log(formData);     // FormData는 특수한 형태의 객체이기 때문에 쉽게 출력되지 않음

    try {
        const result = await axios({
            method: 'post',
            url: '/dynamicFile',
            data: formData,
            // key
            headers: {
                'Content-Type': 'multipart/form-data'    // form 태그 내 enctype="multipart/form-data" 와 비슷
            }
        })
        console.log('res', result);
        document.querySelector('img').src = `/${result.data.file.path}`     // 이미지 경로를 img태그에 넣기
        // thumbnail.css 에서 작성한 코드 적용
        document.querySelector('img').classList.add('thumbnail')   // img태그에 thumbnail 클래스명 부여
        document.querySelector('#thumbnailTitle').textContent = `${result.data.title}`
    } catch (error) {
        console.error(error)
    }

    // 서버로 요청 보내기
    // axios({
    //     method: 'post',
    //     url: '/dynamicFile',
    //     data: formData,
    //     // key
    //     headers: {
    //         'Content-Type': 'multipart/form-data'    // form 태그 내 enctype="multipart/form-data" 와 비슷
    //     }
    // }).then((res) => {
    //     console.log('res',res)    // 서버의 req.file을 클라이언트의 res 변수가 받음
    //     console.log('res.data',res.data)   
    //     console.log('res.data.path',res.data.file.path)    // 이미지 경로

    //     document.querySelector('img').src = `/${res.data.file.path}`     // 이미지 경로를 img태그에 넣기
    //     // thumbnail.css 에서 작성한 코드 적용
    //     document.querySelector('img').classList.add('thumbnail')   // img태그에 thumbnail 클래스명 부여
    //     document.querySelector('#thumbnailTitle').textContent = `${res.data.title}`
    // })

}