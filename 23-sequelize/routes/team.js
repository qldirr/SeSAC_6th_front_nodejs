// player 와 관련된 라우터
const express = require('express');
const controller = require('../controller/Cteam');
const router = express.Router();

// 기본 요청 경로 - localhost:PORT/teams

// 팀 목록 조회
router.get('/', controller.getTeamList)

// 특정 팀 조회
router.get('/:team_id', controller.getTeam)

// 특정 팀의 모든 선수 조회
router.get('/:team_id/players', controller.getTeamPlayerList)

// // 특정 선수의 소속 팀 변경
// router.patch('/:player_id/team', controller.updatePlayerTeam)

// // 선수 삭제
// router.delete('/:player_id', controller.deletePlayer)

module.exports = router