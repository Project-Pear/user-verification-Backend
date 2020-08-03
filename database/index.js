const secret = require('./config.js');
const { Pool } = require('pg');

const client = new Pool({
  user: secret.user,
  host: secret.host,
  database: secret.database,
  port:secret.port,
  password: secret.password
});


client.connect()
.then(()=>{
  console.log('Successfully Connected to Linux Postgres Database 🎅')
})
.catch((err)=>{
  console.log(err)
})

module.exports = client