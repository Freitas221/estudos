require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal, middleware} = require('./src/middlewares/middleware')

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Conectado')
    app.emit('ServerOn')
}).catch((e) => {
    throw new Error(`Erro ao se conectar ${e.message}`)
})

app.use(express.urlencoded({
    extended:true
}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(middleware)

app.use(routes)

app.on('ServerOn', ()=> {
    app.listen(3000, ()=> {
        console.log('Servidor conectado')
    })  
})