// player 와 관련된 라우터
const express = require('express');
const controller = require('../controller/Cplayer');
const router = express.Router();

// 기본 요청 경로 - localhost:PORT/players

// 선수 목록 조회
router.get('/', controller.getPlayerList)

// 선수 조회
router.get('/:player_id', controller.getPlayer)

// 선수 생성
router.post('/', controller.createPlayer)

// 특정 선수의 소속 팀 변경
router.patch('/:player_id/team', controller.updatePlayerTeam)

// 선수 삭제
router.delete('/:player_id', controller.deletePlayer)

module.exports = router