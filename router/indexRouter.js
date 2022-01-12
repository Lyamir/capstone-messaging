const express = require('express')
const app = express()
const router = express.Router()
const user = require('../controller/userController')
const email = require('../controller/emailController')


router.get('/', email.index)
router.get('/inbox', email.index)
router.get('/sentbox', email.sentbox)
router.get('/create', email.getSend)
router.post('/create', email.postSend)
router.post('/register', user.register)
router.get('/login', user.getLogin)
router.post('/login', user.postLogin)
router.get('/logout', user.logout)

module.exports = router