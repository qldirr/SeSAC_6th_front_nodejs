const { Profile, sequelize } = require('../models/index')

// 포지션별 연봉 합 구하기
exports.getPositionSalarySum = async (req, res) => {
    // SELECT `position`, SUM(`salary`) AS `total_salary` FROM `Profile` AS `Profile` 
    // GROUP BY `position` ORDER BY total_salary DESC;
    try {
        const profile = await Profile.findAll({
            attributes: [
                'position',
                // 연봉합을 total_salary 컬럼명으로 만들어주기
                [sequelize.fn('SUM', sequelize.col('salary')), 'total_salary']
            ],
            group:'position',   // group by
            order: [
                // 위에서 만든 total_salary를 사용해 정렬
                [sequelize.literal('total_salary'), 'DESC']  
            ]
        })
        res.json(profile)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}