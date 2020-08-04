const helpers = require('../database/helpers.js');

const controller = {
  test: (req,res)=>{
    helpers.test()
    .then((result)=>{
      res.status(200).send(result)
    })
    .catch((err)=>{
      console.log(err)
      res.status(404).send(err)
    })
  }
};

module.exports = controller;