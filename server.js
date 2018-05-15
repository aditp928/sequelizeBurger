var express = require("express");
var bodyParser = require("body-parser");
var expressHandleBars = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 8080;


var app = express();

var db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use("/", routes);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});