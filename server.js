// Dependencies
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var logger = require("morgan");
const apiroutes = require("./routes/apiroutes.js");

const PORT = process.env.PORT || 3001;

var app = express();

// /e/ Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));
app.use(apiroutes);


mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose connection successful");
});
// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on " + PORT + "!");
});

