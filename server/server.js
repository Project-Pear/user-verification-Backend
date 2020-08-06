const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const db = require('../database/index.js');

const router = require('./router.js')
const app = express();
const port = 80 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/',router);

//require('./passport.js');
//app.use(passport.initialize());
//app.use(passport.session());

app.listen(port,() => console.log(`Listening On http://localhost:${port}`));