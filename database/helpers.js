const db = require('./index.js');
// let query = 'SELECT * FROM TEST;';
const helpers = {
  async signUp(req){
    let date = new Date();
    let year = date.getFullYear();
    let query = `INSERT INTO users(email,pass,firstName,lastName,joined,bDay,lives,score) VALUES('${req.email}','${req.pass}','${req.firstName}','${req.lastName}',${year},'${req.bDay}','${req.lives}',${5})`
    try{
      let INSERT = await db.query(query);
      return Promise.resolve("Added Successfully To DB..")

    } catch(err){
      return Promise.reject(err.stack);
    }
  }

};

module.exports = helpers
