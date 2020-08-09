const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mode = process.env.MODE || 'dev';

const router = require('./router.js')
const app = express();
const port = 4242 ;
const host = process.env.URL || `http://localhost:${port}` ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan(mode));

app.use('/',router);

app.listen(port,() => console.log(`Listening On ${host}`));