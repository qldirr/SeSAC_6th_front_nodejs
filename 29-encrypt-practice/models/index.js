const Sequelize = require('sequelize');     // sequelize 패키지 불러오기

// db 연결 정보
const config = require(__dirname + '/../config/config.json')['development']; 

const db = {};   // 빈 객체

// config 안에 있는 데이터를 가지고 새로은 Sequelize 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 불러오기
const MemberModel = require('./Member')(sequelize, Sequelize)  

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize : sequelize, Sequelize : Sequelize }


// db 에 만든 모델 집어넣기
db.Member = MemberModel

// db 객체를 내보내기 -> 다른 파일에서 db모듈 사용 예정
module.exports = db;
