const { Visitor } = require('../models/index');

// 메인 페이지
exports.main = (req, res) => {
    res.render('index');
};

// 방명록 목록 조회
exports.getVisitors = async (req, res) => {
    try {
        const getVisitorList = await Visitor.findAll()
        // res.json(getVisitorList)
        console.log(getVisitorList);
        res.render('visitor', { data: getVisitorList });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
};

// 방명록 조회
exports.getVisitor = async (req, res) => {
    try {
        const { id } = req.params
        const getVisitor = await Visitor.findOne({
            where: {
                id
            }
        })
        // res.json(getVisitor)
        res.send(getVisitor)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 방명록 추가
exports.postVisitor = async (req, res) => {
    try {
        console.log(req.body);
        const { name, comment } = req.body
        const newVisitor = await Visitor.create({    // 테이블에 명시된 컬럼 순서 그대로
            name, comment
        })

        res.send(newVisitor )
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

// 방명록 삭제
exports.deleteVisitor = async (req, res) => {
    try {
        const { id } = req.body
        const isDeleted = await Visitor.destroy({
            where: {
                id
            }
        })
        console.log('isdeleted', isDeleted);   // return 값이 true(1)/false(0)

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

// 방명록 수정
exports.patchVisitor = async (req, res) => {
    try {
        const { id, name, comment } = req.body
        const updateVisitor = await Visitor.update(
            { name, comment },   // 업데이트할 컬럼, team_id : team_id
            {
                where: {  // 조건
                    id 
                }
            }
        )
        console.log('updatevisitor', updateVisitor[0]);
        if (updateVisitor[0]) return res.send({ isUpdated: true, name, comment })
        else return res.send(false)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

