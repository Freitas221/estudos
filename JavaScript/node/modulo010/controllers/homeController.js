exports.homeControll = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome:<input type="text" name="nome">
        <button>Enviar</button>    
        </form>
    `)
}

exports.formControll = (req, res) => {
    res.send(`Dados do formulário: ${req.body.nome}`)
}

exports.ExtraControll = (req, res) => {
    res.send(req.params)
}