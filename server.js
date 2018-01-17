// Dependencies
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

// /e/ Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.json({limit: '1gb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1gb' }));
app.use(bodyParser.text());
app.use(express.static("public"));

app.use(require('./routes/scholarship-routes.js'));

mongoose.connect('mongodb://localhost/changingMajors', { useMongoClient: true });
mongoose.Promise = global.Promise;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose connection successful");
});
// Listen on port 3000
app.listen(3001, function() {
  console.log("App running on port 3001!");
});
