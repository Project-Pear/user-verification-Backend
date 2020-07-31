const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const router = require('./router.js')
const app = express();
const port = 80 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/',router);


app.listen(port, () => console.log(`app listening at http://localhost:${port}`));