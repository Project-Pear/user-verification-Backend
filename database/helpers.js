const db = require('./index.js');
const password = require('./password.js');
//.verify and .hash

const helpers = {
  //signup helpers
  async signUp(req){
    let date = new Date();
    let year = date.getFullYear();
    let hashed = password.hash(req.pass);

    let query = `INSERT INTO users(email,pass,firstName,lastName,joined,bDay,lives,score) VALUES('${req.email}','${hashed}','${req.firstName}','${req.lastName}',${year},'${req.bDay}','${req.lives}',${5})`
    try{
      let INSERT = await db.query(query);
      return Promise.resolve("Added Successfully To DB..")

    } catch(err){
      return Promise.reject(err.stack);
    }
  },
  async login(email,attemptedPassword){
    let query = `SELECT * FROM users WHERE email = '${email}'`;

    //login
    try{
      let userInfo = await db.query(query);

      if(!password.verify(attemptedPassword,userInfo.pass)){
        return Promise.reject("WRONG PASSWORD");
      } else {
        return Promise.resolve(userInfo);
      }
    }catch(err){
      //cant login, most likely not a registerd email or connection issue
      console.log(err.stack);
      return Promise.reject("Error With Querying:",err.stack)
    }
  }

};

module.exports = helpers
