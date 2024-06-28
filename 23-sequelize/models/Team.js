const TeamModel = (sequelize, DataTypes) => {
    // sequelize 모델 정의 : sequelize.define(모델명(테이블명), 컬럼 정의, 모델 옵션 정의)
    const Team = sequelize.define('Team', {
        team_id: {
            type: DataTypes.INTEGER,   // 데이터 타입(STRING, INTEGER, TEXT, DATE)
            primaryKey: true,    // 기본키 설정
            allowNull: false,   // NOT NULL 허용 여부(디폴트 true)
            autoIncrement: true    // 숫자 자동 증가
        },
        name: {
            type: DataTypes.STRING(63),     // mysql 에서 varchar랑 같음
            allowNull: false,
        },
    },
        {
            freezeTableName: true,   // 테이블명을 복수로 설정하지 않음(고정한다) -> players 가 아닌 player 라고 테이블명 설정
        }
    )

    return Team
}

module.exports = TeamModel