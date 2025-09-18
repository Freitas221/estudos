const express = require('express')
const router = express.Router()
const home = require('./controllers/homeController')
const contact = require('./controllers/contactController')

router.get('/', home.homeControll)
router.get('/nome/:dadosExtras?/:opcional?', home.ExtraControll)
router.get('/contact', contact.contactControll)

router.post('/', home.formControll)

module.exports = router
