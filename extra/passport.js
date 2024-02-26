const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '698476493230-rgspr38bhj20ietjuegjv3q7hbsk7oqc.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/auth/google/callback',
      passReqToCallback : true
    },
    (request, accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user);
    // Code to serialize user data
});

passport.deserializeUser((user, done) => {
    done(null, user);
    // Code to deserialize user data
});