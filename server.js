//Loading environmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require ('dotenv').config()

// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('db') 
const passport = require('./passport')
const apiroutes = require("./routes/apiroutes.js");
const socketIO = require('socket.io');
const path = require('path');

//Create the express app, the http server, and socket.io server
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Middleware
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore ({ mongooseConnection: dbConnection}),
		resave: false,
		saveUninitialized: false

	})

)

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

//Passport
app.use(passport.initialize())
app.use(passport.session())

//Build
if(process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req,res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
	

}

//Express App Routing
app.use('/auth,', require('./auth'))

app.use(function(err, req, res, next){
	console.log('==== ERROR ====')
	console.error(err.stack)
	res.status(500)
})

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on " + PORT + "!");
});

