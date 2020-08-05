const helpers = require('../database/helpers.js');

const controller = {
  signUp(req,res){
    helpers.signUp(req.body)
    .then((result)=>{
      res.status(201).send(result)
    })
    .catch((err)=>{
      console.log(err)
      res.status(401).send(err);
    })
  }
};

module.exports = controller;