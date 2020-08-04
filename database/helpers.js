const db = require('./index.js');
// let query = 'SELECT * FROM TEST;';
const helpers = {
  test(){
    return new Promise ((resolve,reject)=>{
      console.log('Querying...')
      let query = 'SELECT * FROM TEST;';
      db.query(query)
      .then((results)=>{
        resolve(results.rows);
      })
      .catch((err)=>{
        reject(err.stack);
        console.log('ERROR Getting Some Reviews...',err);
      })

    })


  }

};

module.exports = helpers