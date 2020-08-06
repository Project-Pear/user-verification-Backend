const db = require('./index.js');
const password = require('./password.js');
//.verify and .hash

const helpers = {
  //signup helpers
  async signUp(req){
    let date = new Date();
    let year = date.getFullYear();
    let hashed = password.hash(req.pass);

    let query = `INSERT INTO users(email,pass,firstName,lastName,joined,bDay,lives,score) VALUES('${req.email}','${hashed}','${req.firstName}','${req.lastName}',${year},'${req.bDay}','${req.lives}',${5})`;

    try{
      let INSERT = await db.query(query);
      return Promise.resolve("Added Successfully To DB..");
    } catch(err){
      return Promise.reject(err.stack);
    }
  },
  async login(email,attemptedPassword){
    let query = `SELECT * FROM USERS WHERE email = '${email}';`;

    //login
    try{
      let login = await db.query(query);
      let userInfo = login.rows[0]

      if(!password.verify(attemptedPassword,userInfo.pass)){
        return Promise.reject("WRONG PASSWORD");
      } else {
        //once password is verified, sends all user data back except
        let data = {
          id:userInfo.id,
          email:userInfo.email,
          firstName:userInfo.firstName,
          lastName:userInfo.lastName,
          joined: userInfo.joined,
          bDay: userInfo.bDay,
          lives: userInfo.lives,
          score: userInfo.score
        };

        return Promise.resolve(data);
      }
    }catch(err){
      //cant connect to DB, most likely not a registerd email or connection issue
      console.log(err.stack)
      return Promise.reject(err.stack)
    }
  },
  async changePassword(email,oldPassword,newPassword){
    let query = `SELECT * FROM USERS WHERE email = '${email}';`;

    try{
      let login = await db.query(query);
      let userInfo = login.rows[0]
      let verify = password.verify(attemptedPassword,userInfo.pass);

      if(!verify){
        return Promise.reject("WRONG PASSWORD");
      } else {
        let hashed = password.hash(newPassword)
        let change = await db.query(`UPDATE users SET pass = '${hashed}' WHERE email = ${email};`);
        return Promise.resolve("CHANGED PASSWORD")
      }
    }catch(err){
      console.log(err.stack)
      return Promise.reject(err.stack)
    }
  }

};

module.exports = helpers
