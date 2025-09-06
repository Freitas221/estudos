const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController')

route.get('/', homeController.paginaInicial )

route.get('/contact', contactController.contactUs)

route.get('/usuario/:dadosUser?/:extraUser?', homeController.extraData)

route.post('/', homeController.submitForm)


module.exports = route

