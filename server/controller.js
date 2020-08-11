const helpers = require('../database/helpers.js');

var timeStamp = ()=> {
  return Date();
}

const controller = {
  signUp(req,res){
    helpers.signUp(req.body)
    .then((result)=>{
      console.log('Successfully Added A new User to DB');
      res.status(201).send(result)
    })
    .catch((err)=>{
      if(err.includes("duplicate")){
        console.log("Duplicate Email Attempt: " + req.body.email + ` -- ${timeStamp()} -- from iP:${req.connection.remoteAddress}`);
        res.status(420).send("Duplicate Email");
        return;
      }
      console.log(`Error Signing Up: ${err}`)
      res.status(401).send(err);
    })
  },
  login(req,res){
    let {email,pass} = req.body;
    helpers.login(email,pass)
    .then((data)=>{
      console.log('Successful Login! -- ' + req.body.email + ' -- ' + timeStamp());
      res.status(202).send(data);
    })
    .catch((err)=>{
      console.log("Invalid Log In: " + err + ` -- ${timeStamp()} -- For Account: ${req.body.email} -- From iP:${req.connection.remoteAddress}`);
      res.status(402).send(err)
    })
  },
  changePassword(req,res){
    helpers.changePassword(req.body.email,req.body.oldPassword,req.body.newPassword)
    .then((data)=>{
      console.log("Successfully Updated Users Password");
      res.status(203).send(data);
    })
    .catch((err)=>{
      console.log("Error Logging In:",err);
      res.status(403).send(err)
    })
  }

};

module.exports = controller;