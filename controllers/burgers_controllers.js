//requiring files
const burger = require("../models/burger.js");
const express = require("express");
const app = express();

module.exports = function(app){
  app.get("/", function(req, res) {
    burger("all", res);
  });

  app.post("/", function(req, res) {
    burger("insert", res, req.body.burger_name);
  });

  app.put("/", function(req, res) {
    burger("update", res, req.body.id);
  });
}
