const CLIENT_ID =
  "542877942694-1dte4mfocoua5vqt70t3rqdc9d483cmt.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SocialModal=require("./Model/Social.model")
const passport = require("passport");
passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const user=new SocialModal({username:profile.displayName,token:accessToken})
      await user.save()
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
