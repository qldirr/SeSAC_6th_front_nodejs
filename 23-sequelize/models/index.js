const Sequelize = require('sequelize');     // sequelize 패키지 불러오기

// config.json 파일의 development 키를 가진 객체를 찾아서 대입, db 연결 정보
const config = require(__dirname + '/../config/config.json')["development"];    
const db = {};   // 빈 객체

// config 안에 있는 데이터를 가지고 새로은 Sequelize 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);


// 모델 불러오기
const PlayerModel = require('./Player')(sequelize, Sequelize)   // player 모델의 파라미터로 전달
const TeamModel = require('./Team')(sequelize, Sequelize)   // team 모델의 파라미터로 전달
const ProfileModel = require('./Profile')(sequelize, Sequelize)   // profile 모델의 파라미터로 전달


// 관계 연결
// player : profile = 1:1
PlayerModel.hasOne(ProfileModel, {
  // CASCADE 옵션으로 player가 삭제/수정되면 profile도 함께 삭제/수정
  onDelete : 'CASCADE',   
  onUpdate : 'CASCADE',

  // ProfileModel에 'player_id' 이름의 fk 생성
  foreignKey : 'player_id',
  // PlayerModel 의 'player_id' 컬럼 참조
  sourceKey : 'player_id',
})
ProfileModel.belongsTo(PlayerModel, {    // profile(자식 테이블), player(부모 테이블)
  // ProfileModel 의 'player_id' 라는 fk 생성
  foreignKey : 'player_id',
  // 참조할 PlayerModel 의 키는 'player_id'
  targetKey : 'player_id',
})

// team : player = 1:N
TeamModel.hasMany(PlayerModel, {
  // PlayerModel 에 'team_id' fk 생성
  foreignKey : 'team_id',
  // TeamModel 의 'team_id' 컬럼 참조
  sourceKey : 'team_id',
})
PlayerModel.belongsTo(TeamModel, {
  // PlayerModel 에 'team_id' fk 생성
  foreignKey : 'team_id',
  // 참조할 TeamModel 의 키는 'team_id'
  targetKey : 'team_id',
})




db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize : sequelize, Sequelize : Sequelize }


// db 에 만든 모델 집어넣기
db.Player = PlayerModel
// db = { sequelize : sequelize, Sequelize : Sequelize, Player : PlayerModel }
db.Team = TeamModel
// db = { sequelize : sequelize, Sequelize : Sequelize, Player : PlayerModel, Team : TeamModel }
db.Profile = ProfileModel
// db = { sequelize : sequelize, Sequelize : Sequelize, Player : PlayerModel, Team : TeamModel, Profile : ProfileModel }

// db 객체를 내보내기 -> 다른 파일에서 db모듈 사용 예정
module.exports = db;
