// Dependencies
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

// /e/ Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose connection successful");
});
// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
