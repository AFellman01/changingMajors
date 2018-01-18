const passport = require('passport');
const express = require('express');
const app = express();

module.exports = app => {
	app.get('/auth/github',
		passport.authenticate('github'));
	app.get('/auth/github/callback',
		passport.authenticate('github', {failureRedirect: '/login'}),
		function(req, res){
			//successful authentication, redirect home.
			res.redirect('/');
		});
}



const PORT = process.env.PORT || 3001;
app.listen(PORT);