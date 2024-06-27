// TODO: 컨트롤러 코드
const User = require('../model/User');

// 환영메세지와 회원가입/로그인 링크 보여주기
exports.main = (req, res) => {
    res.render('index');
};

// 회원가입 페이지
exports.signupPage = (req, res) => {
    res.render('signup');
};

// 회원 생성
exports.insertUser = (req, res) => {
    console.log('req.body', req.body);
    User.insertUser(req.body, (result) => {
        console.log('controller/insertUser', result);
        res.send({ id: result })
    })

}

// 로그인 회원 조회
exports.getUser = (req, res) => {
    console.log('req.body', req.body);
    User.getUser(req.body, (result) => {
        console.log('controller/getUser', result);
        res.send({ data: result })
    })
}

// 로그인 페이지
exports.signinPage = (req, res) => {
    res.render('signin');
};


// 로그인 성공시 회원 정보 수정 페이지
exports.profilePage = (req, res) => {
    console.log('req.body', req.body);
    User.getUser(req.body, (result) => {
        console.log('controller/getUser', result);
        res.render('profile', { user: result })
    })
}

// 회원 정보 수정
exports.updateUser = (req, res) => {
    console.log('req.body', req.body);
    User.updateUser(req.body, (result) => {
        console.log('controller/updateuser', result);
        res.send({ result })
    })
}

// 회원 삭제
exports.deleteUser = (req, res) => {
    console.log('req.body', req.body);
    User.deleteUser(req.body, (result) => {
        console.log('controller/deleteuser', result);
        res.send({result})
    })
}