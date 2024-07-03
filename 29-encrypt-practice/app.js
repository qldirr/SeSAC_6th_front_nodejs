const express = require('express');
const app = express();

// 내보냈던 db 중 sequelize 객체를 구조분해 할당해서 꺼냄
const { sequelize } = require('./models')    // 파일명 없으면 index 파일 찾아감
const memberRouter = require('./routes/member')

const path = require('path')
const dotenv = require('dotenv')

// dotenv 모듈을 이용해 .env 파일의 환경 변수를 불러옴
dotenv.config({
    // 기본 .env 파일 로드
    path: path.resolve(__dirname, '.env')    
})

// process.env 객체를 통해 환경 변수에 접근, .env 파일에서 작성한 포트번호가 대입
const port = process.env.PORT || 5000

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/member', memberRouter)

// 404 처리 - 맨 마지막 라우트(주소)로 선언, 안그러면 나머지 라우팅(주소를 설계한 행위)이 전부 무시됨, 404는 무조건 맨밑에 선언
app.get('*', (req, res) => {
    res.render('404')
})

// 테이블을 생성하고 처음에만 force : true 로 실행하고 그 뒤로는 false로 변경하고 실행
sequelize
    .sync({ force: false

     })    // force : true -> 서버 실행때마다 테이블 재생성(데이터 다 날아감), false -> 서버 실행 시 테이블 없으면 생성
    .then(() => {
        app.listen(port, () => {
            console.log('database connection succeed');
            console.log(`http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error(err)
    })