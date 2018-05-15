var burger = require("../models/burger.js");

var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function(request, response) {

  db.Burger.findAll({}).then(function(result) {
    response.render("index", {burgers: result});
  });
});

router.post("/api/burger", function(request, response){
  db.Burger.create({
      burger_name: request.body.burgerName
    }).then(function(result) {
    response.json(result);
  });
});

router.put("/api/burger/:id", function(request, response) {
  db.Burger.update(
    {
      devoured: request.body.devoured
    },{
      where: {
        id: request.params.id
      }
    }).then(function(result) {
      response.json(result);
    });
});

router.delete("/api/burger/:id", function(request, response){
  db.Burger.destroy({
    where: {
      id: request.params.id
    }
    }).then(function(result) {
      response.json(result);
  });
});

module.exports = router;