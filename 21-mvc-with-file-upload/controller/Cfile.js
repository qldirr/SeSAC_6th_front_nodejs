exports.getMain = (req, res) => {
    res.render('index', { title: '파일 업로드를 배워보자' })
}

exports.singleUpload = (req, res) => {
    res.render('uploaded', { title: req.body.title, src: req.file.path })
}

exports.arrayUpload = (req, res) => {
    res.send('success upload! (multiple)')
}

exports.fieldsUpload = (req, res) => {
    res.send('success upload! (multiple2)')
}

exports.dynamicUpload = (req, res) => {
    const title = req.body.title
    const file = req.file
    res.send({ file, title })
}