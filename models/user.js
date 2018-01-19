const passport = require('passport');
const GitHubStrategy = require('passport-github').GitHubStrategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String
});
mongoose.model('users', userSchema);


passport.use(
  new GitHubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ githubId: profile.id }).save();
    }
  )
);