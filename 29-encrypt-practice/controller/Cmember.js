const { Member } = require('../models/index')
const bcrypt = require('../utils/encrypt')

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
exports.login = async (req, res) => {
    try {
        const { userid, pw } = req.body
        console.log('userid---', userid, ',,,pw---', pw);
        // 비번 암호화
        const hashedPw = bcrypt.hashPw(pw)
        console.log('hashedPw-', hashedPw);
        const loginUser = await Member.findOne({
            where: {
                userid
            }
        })
        // console.log('loginUser------',res.json(loginUser)); 
        // res.json(loginUser)
        if (!loginUser) return res.status(400).json({ result: false, message: 'User not found' });

        // 비번 비교
        const isMatched = await bcrypt.comparePw(pw, loginUser.pw)
        console.log('ismatched,,,,,,,', isMatched);

        if (isMatched) {
            console.log('true');
            res.send({ result: true, loginUser })
        } 
        else {
            console.log('false');
            res.status(400).json({ result: false, message: 'Incorrect password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}
// // router.post('/login', controller.login)

// // 회원 가입 메서드
exports.register = async (req, res) => {
    try {
        const { userid, pw, name } = req.body
        console.log('pw', pw);
        // 비번 암호화
        const hashedPw = bcrypt.hashPw(pw)
        console.log('hashedPw', hashedPw);
        const insertMember = await Member.create({
            name, pw: hashedPw, userid
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