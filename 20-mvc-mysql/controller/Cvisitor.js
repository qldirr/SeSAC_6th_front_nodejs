const Visitor = require('../model/Visitor');

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
    res.render('index');
};

// (2) GET /visitors => localhost:PORT/visitors
exports.getVisitors = (req, res) => {
    Visitor.getVisitors((result) => {
        // result 파라미터 : Visitor.js 의 getVisitors 함수의 callback(rows)의 'rows' 변수에 대응
        console.log('Cvisitor.js:', result);
        // [
        //     RowDataPacket { id: 1, name: '홍길동', comment: '내가 왔다' },
        //     RowDataPacket { id: 2, name: '이찬혁', comment: '으라차차' }
        //   ]

        res.render('visitor', { data: result });
    })
};

exports.postVisitor = (req,res) => {
    console.log('req.body',req.body);
    Visitor.postVisitor(req.body, (result) => {   // req.body는 입력받은 name과 comment를 가짐
        // result 파라미터는 Visitor.js 의 postVisitor 함수의 callback(rows.insertId)의 'rows.insertId' 변수에 대응
        console.log('Cvisitor.js:', result);    // result = rows.insertId 는 새로 입력받은 row의 pk
        res.send({
            id: result,
            name: req.body.name,
            comment: req.body.comment
        })

    })
}
