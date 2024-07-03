const { Member } = require('../models/index')

// 메인 페이지 이동 
exports.main = (req, res) => {
    res.render('index')
}
// router.get('/', controller.main)

// 회원가입 페이지 이동
exports.getRegisterPage = (req, res) => {
    res.render('register')
}
// router.get('/register', controller.getRegisterPage)

// 로그인 페이지 이동
exports.getLoginPage = (req, res) => {
    res.render('login')
}
// router.get('/login', controller.getLoginPage)


// 프로필 페이지 이동
exports.getProfilePage = (req, res) => {
    res.render('profile')
}
// router.get('/profile', controller.getProfilePage)

// 유저 리스트 페이지 이동
exports.getUserListPage = (req, res) => {
    res.render('userList')

}
// router.get('/userListPage', controller.getUserListPage)

// 유저 리스트 조회
// exports.getUserList = async (req, res) => {

// }
// // router.get('/userList', controller.getUserList)

// // 로그인 메서드
// exports.login = async (req, res) => {

// }
// // router.post('/login', controller.login)

// // 회원 가입 메서드
exports.register = async (req, res) => {
    try {
        // const { name, comment } = req.body
        // const newVisitor = await Visitor.create({    // 테이블에 명시된 컬럼 순서 그대로
        //     name, comment
        // })
        const { userid, pw, name } = req.body
        const insertMember = await Member.create({
            name, pw, userid
        })
        console.log('insertUser >>>>>> ', insertMember);
        
        res.json({ result: true })
        // res.redirect('/member')
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}
// // router.post('/register', controller.register)

// // 회원 수정
// exports.updateUser = async (req, res) => {

// }
// // router.patch('/:userid', controller.updateUser)

// // 회원 삭제
// exports.deleteUser = async (req, res) => {

// }
// router.delete('/:userid', controller.deleteUser)