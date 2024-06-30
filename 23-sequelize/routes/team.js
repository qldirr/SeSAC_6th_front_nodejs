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

// 특정 팀의 게임 정보 조회
router.get('/:team_id/game', controller.getTeamGameList)

// 팀별로 게임 개수 구하기
router.get('/gamecount', controller.getTeamGameCount)

module.exports = router