const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <form action"/" type="POST">
        Name: <input type="text name="nome">
        <button> Enviar </button>
        </form>
    `)
})

app.get('/teste/:idUsuario/:parametro', (req, res) => {
    res.send(req.params)
})

app.post('/', (req, res) => {
    res.send("Formulário recebido")
})

app.listen(3000, () => {
    console.log("Porta 3000 em execução")
})