const express = require('express')
const app = express()

app.get('/', (req, res) => {
     res.send(`
        <form action"/" type="POST">
        Name: <input type="text name="nome">
        <button> Enviar </button>
        <form/>
    `)
})

app.get('/contact', (req, res) => {
    res.send('Você entrou em contato conosco')
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})