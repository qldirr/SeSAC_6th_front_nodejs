const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes');
// 내보냈던 db 중 sequelize 객체를 구조분해 할당해서 꺼냄
const { sequelize } = require('./models')    // 파일명 없으면 index 파일 찾아감

app.set('view engine', 'ejs');
// app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)

// 테이블을 생성하고 처음에만 force : true 로 실행하고 그 뒤로는 false로 변경하고 실행
sequelize
    .sync({ force: false })    // force : true -> 서버 실행때마다 테이블 재생성, false -> 서버 실행 시 테이블 없으면 생성
    .then(() => {
        app.listen(PORT, () => {
            console.log('database connection succeed');
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err)
    })
