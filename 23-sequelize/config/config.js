// DB 연결 정보를 환경변수를 사용해 선언
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
    // 기본 .env 파일 로드
    path: path.resolve(__dirname, '.env')    
})

dotenv.config({
    path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),      // .env.development 파일 or .env.production 파일
    override: true     // 오버라이드 설정(덮어쓰기)
})

const config = {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,    
    "dialect": process.env.DIALECT
}

module.exports = config