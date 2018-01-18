const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String
});
mongoose.model('users', userSchema);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save();
    }
  )
);