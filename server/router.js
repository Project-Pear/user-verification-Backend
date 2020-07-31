const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.route('/test')
.get(controller.test)







module.exports = router