
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "527485642548-5ek779ko58lr2iui03usruhpllahd6s8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";



passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      //callbackURL: "/auth/google/callback",
      callbackURL: "/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile)
      console.log(profile); 
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


