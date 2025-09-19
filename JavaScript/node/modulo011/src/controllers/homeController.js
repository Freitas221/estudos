exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.extraData = (req, res) => {
    res.send(req.params)
}

exports.submitForm = (req, res) => {
    res.send(req.body.nome)
}