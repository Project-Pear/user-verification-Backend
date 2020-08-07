const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.route('/signup')
.post(controller.signUp)


router.route('/login')
.get(controller.login)

router.route('/profile')
.get(require('connect-ensure-login').ensureLoggedIn(),()=>{
  //controller.getProfileData
})








module.exports = router