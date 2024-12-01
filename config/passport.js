const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID, // Coloque aqui o CLIENT_ID do Google
  clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Coloque aqui o CLIENT_SECRET do Google
  callbackURL: "/auth/google/callback" // URL de callback que definimos em authRoutes.js
},
(accessToken, refreshToken, profile, done) => {
  // Aqui, você pode salvar os dados do usuário no banco de dados ou lidar de outra forma com os dados
  return done(null, profile);
}));

// Serialização e desserialização do usuário para sessão
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
