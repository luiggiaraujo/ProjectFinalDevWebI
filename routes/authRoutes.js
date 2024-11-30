// Importar módulos necessários
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Rota para login com Google
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Rota de callback do Google após o login
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Redirecionar para a página inicial após login bem-sucedido
    res.redirect('/home');
  }
);

// Rota para logout do usuário
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
