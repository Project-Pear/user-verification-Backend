const helpers = require('../database/helpers.js');

var timeStamp = ()=> {
  let currentdate = new Date();
  let timeStamp = (currentdate.getMonth()+1)  +  "/"
          + currentdate.getDate() + "/"
          + currentdate.getFullYear() + " @ "
          + currentdate.getHours() + ":"
          + currentdate.getMinutes() + ":"
  return timeStamp
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
        console.log("Duplicate Email Attempt: " + req.body.email + ` -- ${timeStamp()}`)
        res.status(420).send("Duplicate Email");
        return;
      }
      res.status(401).send(err);
    })
  },
  login(req,res){
    let {email,pass} = req.body;
    helpers.login(email,pass)
    .then((data)=>{
      console.log('Successful Login! -- ' + req.body.email);
      res.status(202).send(data);
    })
    .catch((err)=>{
      console.log("Error Logging In: " + err + ` -- ${timeStamp()}`);
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