const { Game } = require('../models/index')

// 제일 최근에 열리는 게임 조회
exports.getLatestGame = async (req, res) => {
    // SELECT `game_id`, `date`, `location`, `createdAt`, `updatedAt` 
    // FROM `Game` AS `Game` ORDER BY `Game`.`date` DESC LIMIT 1;
    try {
        const latestGame = await Game.findOne({
            order : [['date', 'DESC']]
        })
        res.json(latestGame)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}