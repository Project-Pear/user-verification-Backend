const db = require('./index.js');
// let query = 'SELECT * FROM TEST;';
const helpers = {
  async test(){
    let query = 'SELECT * FROM test';
    try{
      const result = await db.query(query);
      console.log(result.rows)
      return result.rows
    } catch(err){
      console.log(err.stack);
      return null;
    }



  }

};

module.exports = helpers


/*
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


*/