// Player 모델 정의
// (sequelize, DataTypes) 이 파라미터는 models/index 에서 파라미터(sequelize, Sequelize)를 전달 받음
const playerModel = (sequelize, DataTypes) => {
    // sequelize 모델 정의 : sequelize.define(모델명(테이블명), 컬럼 정의, 모델 옵션 정의)
    const Player = sequelize.define('Player', {
        player_id: {
            type: DataTypes.INTEGER,   // 데이터 타입(STRING, INTEGER, TEXT, DATE)
            primaryKey: true,    // 기본키 설정
            allowNull: false,   // NOT NULL 허용 여부(디폴트 true)
            autoIncrement: true    // 숫자 자동 증가
            // comment - 컬럼에 대한 설명
            // validate - 데이터 유효성 검사를 하는 속성
        },
        name: {
            type: DataTypes.STRING(63),     // mysql 에서 varchar랑 같음
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
        {
            freezeTableName: true,   // 테이블명을 복수로 설정하지 않음(고정한다) -> players 가 아닌 player 라고 테이블명 설정
            // timestamps : false    // 데이터 추가 및 수정 시간을 자동으로 컬럼 생성해 기록(createdAt, updatedAt)
        }
    )

    return Player
}

module.exports = playerModel