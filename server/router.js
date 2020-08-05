const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.route('/signup')
.post(controller.signUp)







module.exports = router