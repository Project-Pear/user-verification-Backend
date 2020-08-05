const helpers = require('../database/helpers.js');

const controller = {
  signUp(req,res){
    helpers.signUp(req.body)
    .then((result)=>{
      console.log('Successfully Added A new User to DB');
      res.status(201).send(result)
    })
    .catch((err)=>{
      console.log(err)
      res.status(401).send(err);
    })
  },
  login(req,res){
    let {email,password} = req.body;

    helpers.login(email,password)
    .then((data)=>{
      console.log('Successful Login!');
      res.status(202).send(data);
    })
    .catch((err)=>{
      console.log("Error Logging In:",err);
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