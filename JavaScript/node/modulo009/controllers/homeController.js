exports.paginaInicial = (req, res) => {
        res.send(`
        <form action="/" method="POST">
        Nome:<input type="text" name="nome">
        <button>Enviar</button>    
        </form>
    `)
}

exports.submitForm = (req, res) => {
    res.send(`Dados do envio: ${req.body.nome}`)
}

exports.extraData = (req, res) => {
    res.send(req.params)
}
