// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const logger = require("morgan");
require('./models/User.js');
const passport = require('passport');
const GitHubStrategy = require('passport-github').GitHubStrategy;
const keys = require('./config/keys.js');
const apiroutes = require("./routes/apiroutes.js");
require('./services/passport');
const app = express();
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 3001;

//Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/authRoutes.js'));
app.use(require)

passport.use(new GitHubStrategy({
	clientID: keys.githubClientID,
	clientSecret: keys.githubClientSecret,
	callbackURL: "http://127.0.01:3001/auth/github/callback"
},
function(accessToken, refreshToken, profile, cb){
	User.findOrCreate({ githubId: profile.id}, function(err, user){
		return cb(err,user);
	});
}
));
app.get('/auth/github',
	passport.authenticate('github'));

app.get('/auth/github/callback',
	passport.authenticate('github', {failureRedirect: '/login'}),
	function(req,res){
		//Successful authentication, redirect home.
		res.redirect('/');
	});


app.use(require('./routes/authRoutes.js'));

// /e/ Set the app up with morgan, body-parser, and a static folder
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/changingMajors",
	{
		useMongoClient: true
	}

	);


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


//Build for Heroku
if(process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req,res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
	

}


// Listen on port 3001
app.listen(3001, function() {
  console.log("App running on port 3001!");
});
