const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended:true
})) // Faz com que meu método APP.POST capture o que vem do fomulário.

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome:<input type="text" name="nome">
        <button>Enviar</button>    
        </form>
    `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params) // /profile/1
    console.log(req.query) // /profile/1/?nome=Marcos&sobrenome=Freitas
    res.send(req.params)
})

app.get('/contact', (req, res) => {
    res.send('Olá, no que posso ajudar')
}) 

app.post('/', (req, res) => {
    console.log(req.body) // Captura o que é mandado no formulário.
    res.send(`Dados de envio: ${req.body.nome}`) // Aqui se utiliza o "name" do fomulário.
})

app.listen(3000, () => {
    console.log("Servidor executando na porta 3000")
})
