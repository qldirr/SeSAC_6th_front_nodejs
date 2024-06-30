const { Op } = require('sequelize')
const { Team, Player, TeamGame, Game, sequelize } = require('../models/index')

//팀 목록 조회
exports.getTeamList = async (req, res) => {
    // SELECT `team_id`, `name` FROM `Team` AS `Team`;
    try {
        const { sort, search } = req.query
        let teamList

        if (sort === 'name_asc') {
            // 이름 기준 오름차순
            // SELECT `team_id`, `name` FROM `Team` AS `Team` ORDER BY `Team`.`name` ASC;
            teamList = await Team.findAll({
                attributes: ['team_id', 'name'],    // 출력할 컬럼 명시
                order: [['name', 'ASC']]   // 정렬은 [[], [], []] 이렇게 여러개 설정 가능
            })
        } else if (search) {
            // 이름 검색(like)
            // SELECT `team_id`, `name` FROM `Team` AS `Team` WHERE `Team`.`name` LIKE '%KT%';
            teamList = await Team.findAll({
                attributes: ['team_id', 'name'],    // 출력할 컬럼 명시
                where: {
                    name: { [Op.like]: `%${search}%` }     // 조건 like 사용 ex) 'KT'라는 글자가 들어가기만 하면됨
                }
            })
        } else {
            // 전체 조회
            teamList = await Team.findAll({
                attributes: ['team_id', 'name']    // 출력할 컬럼 명시
            })
        }
        res.json(teamList)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 팀 조회
exports.getTeam = async (req, res) => {
    try {
        const { team_id } = req.params
        const team = await Team.findOne({
            where: {
                team_id
            }
        })
        res.json(team)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 팀의 모든 선수 조회
exports.getTeamPlayerList = async (req, res) => {
    try {
        const { team_id } = req.params
        const team = await Team.findOne({
            where: {
                team_id   // where 조건을 걸 컬럼명, team_id : team_id
            },
            // join
            include: [
                {
                    model: Player,    // join 할 모델
                    // attributes: ['player_id','name', 'age']    // 조회할 컬럼명
                }
            ]
        })
        res.json(team)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 팀의 게임 정보 조회
exports.getTeamGameList = async (req, res) => {
    try {
        const { team_id } = req.params
        const teamGame = await TeamGame.findAll({
            where: {
                team_id   // where 조건을 걸 컬럼명, player_id : player_id
            },
            // join
            include: [
                {
                    model: Game,    // join 할 모델
                    // as: 'game',
                    attributes: ['location', 'date']    // 조회할 컬럼명
                },
                {
                    model: Team,
                    // as: 'team',
                    attributes: ['name']
                }
            ]
        })
        res.json(teamGame)

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')

    }
}

// 팀별로 게임 개수 구하기
exports.getTeamGameCount = async (req, res) => {
    try {
        const gameCount = await TeamGame.findAll({
            attributes: [
                'team_id',
                [sequelize.fn('COUNT', sequelize.col('game_id')), 'game_count']
            ],
            group: 'team_id'
        })
        res.json(gameCount)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')

    }
}