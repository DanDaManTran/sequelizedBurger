//requiring files
const express = require("express");
const app = express();
const db = require("../models");

//creating different routes for special events. along with that we are using the models directory (sequelize)
module.exports = function(app){

  // app.get("/", function(req, res) {
  //   db.burgers.findAll().then(function(result){
  //     res.render("index", { burgerList: result });
  //   });
  // });

  app.get("/favicon.ico", function(req, res){
    res.send(204);
  });
  //
  // app.post("/", function(req, res) {
  //   db.burgers.create({burger_name: req.body.burger_name}).then(function(){
  //     res.redirect("/");
  //   });
  // });
  //
  // app.put("/", function(req, res) {
  //   db.burgers.update({devoured: true}, {
  //     where:{
  //       id: req.body.id
  //     }
  //   }).then(function(){
  //     res.redirect("/");
  //   });
  // });


}
