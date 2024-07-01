// const ps = process.env;
// console.log(ps);   //객체

const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')

// dotenv 모듈을 이용해 .env 파일의 환경 변수를 불러옴
dotenv.config({
    // 기본 .env 파일 로드
    path: path.resolve(__dirname, '.env')    
})

dotenv.config({
    // NODE_ENV(package.json 파일의 script에서 NODE_ENV 변수를 선언)에 따라서 적절한 .env 파일 로드
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),      // .env.development 파일 or .env.production 파일
    override: true     // 오버라이드 설정(덮어쓰기)
})

// process.env 객체를 통해 환경 변수에 접근, .env 파일에서 작성한 포트번호가 대입
const port = process.env.PORT || 5000
const dbname = process.env.DATABASE_NAME
const dbpw = process.env.DATABASE_PW

app.listen(port, () => {
    console.log(`portnumber is ${port}`);
    console.log(`database ${dbname} is connected. pw is ${dbpw}`);
})