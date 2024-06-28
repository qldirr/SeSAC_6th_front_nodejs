const { Player, Profile } = require('../models/index')    // db객체를 내보내므로 player 객체를 찾으려면 구조분해 할당으로 꺼내오자

// 선수 목록 조회
exports.getPlayerList = async (req, res) => {
    try {
        const playerList = await Player.findAll()    // select * from player
        res.json(playerList)
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

// 선수 조회
exports.getPlayer = async (req, res) => {
    try {
        console.log(req.params.player_id);
        const { player_id } = req.params
        const player = await Player.findOne({
            where: {
                player_id   // where 조건을 걸 컬럼명, player_id : player_id
            },
            // join
            include: [
                {
                    model: Profile,    // join 할 모델
                    attributes: ['position', 'salary']    // 조회할 컬럼명
                }
            ]
        })
        res.json(player)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 선수 생성
exports.createPlayer = async (req, res) => {

    try {
        console.log(req.body);
        const { name, age, team_id } = req.body
        const newPlayer = await Player.create({    // 테이블에 명시된 컬럼 순서 그대로
            name, age, team_id
        })

        res.json(newPlayer)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 선수의 소속 팀 변경
exports.updatePlayerTeam = async (req, res) => {
    try {
        const { player_id } = req.params
        const { team_id } = req.body
        const updatePlayerTeam = await Player.update(
            { team_id },   // 업데이트할 컬럼, team_id : team_id
            {
                where: {  // 조건
                    player_id   // player_id : player_id
                }   
            }
        )
        res.json(updatePlayerTeam)   // return 값이 true(1)/false(0)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 선수 삭제
exports.deletePlayer = async (req, res) => {
    try {
        const { player_id } = req.params
        // DELETE FROM `Player` WHERE `player_id` = '1'
        const isDeleted = await Player.destroy({
            where: {
                player_id
            }
        })
        console.log(isDeleted);   // return 값이 true(1)/false(0)

        if (isDeleted) {
            return res.send(true)   // delete cascade 설정으로 profile 에 데이터도 삭제
        } else {
            return res.send(false)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}