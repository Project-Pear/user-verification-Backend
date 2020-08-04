const secret = require('./config.js');
const { Pool } = require('pg');


const client = new Pool({
  user: secret.user,
  host: secret.host,
  database: secret.database,
  password: secret.password,
  port:secret.port
});


client.connect()
  .then((err)=>{
    console.log('Connected To Database Successfully 👽');
  })
  .catch((err)=>{
    console.log(err.stack) ;
  });

  module.exports = client;