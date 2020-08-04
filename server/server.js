const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../database/index.js');


const router = require('./router.js')
const app = express();
const port = 80 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/',router);


app.listen(port, "0.0.0.0",() => console.log(`Listening On http://localhost:${port}`));