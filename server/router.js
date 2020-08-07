const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.route('/signup')
.post(controller.signUp)

router.route('/login')
.get(controller.login)

router.route('/change')
.post(controller.changePassword)










module.exports = router