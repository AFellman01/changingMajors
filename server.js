// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const logger = require("morgan");
// const apiroutes = require("./routes/apiroutes.js");



// /e/ Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.json({limit: '1gb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1gb' }));
app.use(bodyParser.text());
app.use(express.static('/src/components'));



app.use(require('./routes/scholarship-routes.js'));
app.use(require)

mongoose.connect('mongodb://localhost/changingMajors', { useMongoClient: true });
mongoose.Promise = global.Promise;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose connection successful");
});


// //Build
// if(process.env.NODE_ENV === 'production') {
// 	const path = require('path')
// 	console.log('YOU ARE IN THE PRODUCTION ENV')
// 	app.use('/static', express.static(path.join(__dirname, '../build/static')))
// 	app.get('/', (req,res) => {
// 		res.sendFile(path.join(__dirname, '../build/'))
// 	})
	

// }


// Listen on port 3000
app.listen(3001, function() {
  console.log("App running on port 3001!");
});
