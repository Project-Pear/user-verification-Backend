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
      return err.stack;
    }
  },
  async signUp(req){
    let date = new Date();
    let year = date.getFullYear();
    let query = `INSERT INTO users(email,pass,firstName,lastName,joined,bDay,score) VALUES('${req.email}','${req.pass}','${req.firstName}','${req.lastName}',${year},'${req.bDay}',${5})`
    try{
      let INSERT = await db.query(query);
      return "Added Successfully To DB.."

    } catch(err){
      console.error("Error Signing Up: ",err.stack);
      return err.stack;
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