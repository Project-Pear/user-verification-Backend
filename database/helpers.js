const db = require('./index.js');
const password = require('./password.js');
//.verify and .hash

const helpers = {
  //signup helpers
  async signUp(req){
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    newdate = month + "/" + day + "/" + year;
    let hashed = await password.hash(req.pass);

    let query = `INSERT INTO users(email,pass,firstName,lastName,joined,bDay,lives,verified,score) VALUES('${req.email}','${hashed}','${req.firstName}','${req.lastName}',${newdate},'${req.bDay}','${req.lives}',${false},${5})`;

    try{
      let INSERT = await db.query(query);
      return Promise.resolve("Added Successfully To DB..");
    } catch(err){
      return Promise.reject(err.stack);
    }
  },
  async login(email,attemptedPassword){
    //error handling...
    if(email === undefined && attemptedPassword === undefined){
      return Promise.reject("NO PASSWORD AND EMAIL")
    }else if(attemptedPassword === undefined){
      return Promise.reject("NO PASSWORD")
    }else if(email === undefined){
      return Promise.reject("NO USERNAME")
    }

    let query = `SELECT * FROM USERS WHERE email = '${email}';`;

    //login
    try{
      let login = await db.query(query);
      let userInfo = login.rows[0];
      let verify = await password.verify(attemptedPassword,userInfo.pass);

      if(!verify){
        return Promise.reject("WRONG PASSWORD");
      } else {
        //once password is verified, sends all user data back except password
        let data = {
          id:userInfo.id,
          email:userInfo.email,
          firstName:userInfo.firstName,
          lastName:userInfo.lastName,
          joined: userInfo.joined,
          bDay: userInfo.bDay,
          lives: userInfo.lives,
          verified: userInfo.verified,
          score: userInfo.score
        };

        return Promise.resolve(data);
      }
    }catch(err){
      //cant connect to DB, most likely not a registerd email or connection issue
      return Promise.reject("ERROR QUERYING OR CONNECTING")
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
  },
  async findById(id){
    let query = `SELECT * FROM USERS WHERE id = ${id}`;
    try{
      let user = await db.query(query);
      return Promise.resolve(user)
    }catch(err){
      return Promise.reject(err)
    }
  }

};

module.exports = helpers
