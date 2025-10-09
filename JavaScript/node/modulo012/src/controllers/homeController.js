exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.extraData = (req, res, next) => {
    res.send(req.params)
}

exports.submitForm = (req, res, next) => {
    res.send(req.body)
}