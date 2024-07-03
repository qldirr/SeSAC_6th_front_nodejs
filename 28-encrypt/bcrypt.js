// bcrypt - 비번 암호화시 자주 사용하는 모듈, 외부 라이브러리이므로 설치 필요, 양방향 암호화는 지원하지 않으며 비번 암호화에 특화된 모듈
//          비번같은 민감한 정보는 복호화 필요가 없고 오히려 복호화가 가능해진다는 것은 보안상 위험

// bcrypt 모듈 불러오기
const bcrypt = require('bcrypt')

// 정답 비번 정의
const originalPw = '1234'

// 솔트 생성 라운드 수 -> 2의 거듭제곱 형태
// rounds - 해시 함수를 반복하는 횟수
const saltRounds = 10   // 2^10 = 1024회 반복(10~12 사이 값을 보통 사용)
// 솔트 라운드 숫자 커짐 -> 해시 생성 시간이 느려짐, 보안성 향상

// 비번 해싱 함수 정의
const hashPw = (pw) => {
    return bcrypt.hashSync(pw, saltRounds)
}

// 비번 정답 검증 함수 정의
const comparePw = (inputPw, originalPw) => {
    return bcrypt.compareSync(inputPw, originalPw)
    // compareSync(평문 비번, 암호화된 비번) - 사용자가 입력한 평문과 해시값을 비교해 boolean 형태로 반환
}

// ------------------------------------------------------------------------
const hashedPw = hashPw(originalPw)   // 정답 비번을 암호화하는 함수
console.log(`hashedPw : ${hashedPw}`);    // 암호화된 해시값이 문자열로 출력

const isMatch = comparePw(originalPw, hashedPw)
console.log(isMatch ? '비번 일치' : '비번 불일치');    // 일치

const isMatch2 = comparePw('12344', hashedPw)
console.log(isMatch2 ? '비번 일치' : '비번 불일치');     // 불일치