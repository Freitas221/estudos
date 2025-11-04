exports.paginaInicial = (req, res) => {
    res.render('index')
    return;
}

exports.extraData = (req, res, next) => {
    res.send(req.params)
    return;
}

exports.submitForm = (req, res, next) => {
    res.send(req.body)
    return;
}