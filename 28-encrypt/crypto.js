// crypto - node.js 에 있는 내장 모듈, 암호화 기능 제공
//         bcrypt 모듈보다 범용성이 큼

// crypto 내장 모듈 불러오기
const crypto = require('crypto')

// createHash() - 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 함수
// 파라미터로 받은 pw를 암호화하는 함수
const createHashedPw = (pw) => {
    // crypto.createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
    return crypto.createHash('sha512').update(pw).digest('base64')

}

// 해시 함수 한계 - 동일한 데이터에 대해서 항상 동일한 해시값 리턴
// -> 평문(input)으로 되돌아 갈 수는 없지만 output이 동일하다면 input이 동일하다는 것을 유추 가능
// (레인보우 테이블에서도 암호화된 output을 역추적해서 찾을 수 있음)
console.log(createHashedPw('1234'));
console.log(createHashedPw('1234'));
console.log(createHashedPw('1233'));    // 미세한 변화에도 해시값은 완전히 다름


// -------------------------------------------------------------------------
// pbkdf - 비밀번호 기반 키 도출 함수로 주로 비번 저장시 사용
// base64 -  64개의 가능한 문자로 데이터를 인코딩하는 방식, 64개의 문자 중 62개는 영문 대소문자와 10진수 숫자로 구성, 
//          나머지 두 개의 문자는 인코딩과 디코딩 과정에서 추가적인 문자로 사용

// 단방향 암호화 생성 함수
// 임의의 salt값을 생성 후 pbkdf2Sync함수를 사용해 해당 솔트와 비번을 기반으로 해시 생성
const saltAndHashPw = (pw) => {
    const salt = crypto.randomBytes(16).toString('base64')    // salt 생성, 16byte 의 랜덤한 값을 base64 방식으로 인코딩해줌
    const iterations = 100000    // 반복 횟수
    const keylen = 64    // 생성할 키의 길이
    const digest = 'sha512'     // 해시 알고리즘

    // pbkdf2Sync(비번 원문, 솔트, 반복횟수, 키 길이, 알고리즘)
    const hash = crypto
        .pbkdf2Sync(pw, salt, iterations, keylen, digest)    // pw값 암호화
        .toString('base64')   // 암호화된 Buffer 형식의 데이터를 base64 문자열로 변환해 저장하거나 전송하기 쉽도록 만듦

    return { salt, hash }
}

// -------------------------------------------------------------------
// 비번 비교 함수 - 암호화된 변수끼리 비교
const comparePw = (inputPw, savedSalt, savedHash) => {
    // saltAndHashPw 함수에서 정의한 값들이랑 일치
    const iterations = 100000    // 반복 횟수
    const keylen = 64    // 생성할 키의 길이
    const digest = 'sha512'     // 해시 알고리즘

    const hash = crypto
        .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, digest)    // pw값 암호화
        .toString('base64')   // 암호화된 Buffer 형식의 데이터를 base64 문자열로 변환해 저장하거나 전송하기 쉽도록 만듦

    // hash 변수 - 사용자가 주장하는 비번을 savedSalt 와 조합해 암호화한 해시값
    // savedHash 변수 - 정답 비번에 대한 해시값

    return hash === savedHash    // if hash === savedHash return true / else return false 랑 똑같은 결과(의미)
}

// ----------------------------------------------------------------------
// 암호 비교 예제
console.log('');
const password = '1234!'   // 정답 비번

// 비번 암호화
const {salt, hash} = saltAndHashPw(password)
console.log(`salt:${salt}, hash:${hash}`);  
//salt:fF8mYRjyMy5t08PYxQ50YA==, hash:kL/8mNzFahrJjm79Lkf3Si68BagDk8bylg5Gvz4ZwGUL9q7O+4DJ69jo89GeFgd2iNwjAvThw89wxR5P1KWJfQ==

const inputPassword = '1234!1'
const isMatch = comparePw(inputPassword, salt, hash)
console.log(`비번이 ${isMatch ? '일치' : '불일치'}`);     // 위에서 설정한 정답 비번과 다르면 불일치, 같으면 일치
