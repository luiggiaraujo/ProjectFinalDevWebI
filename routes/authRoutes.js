// authRoutes.js
const express = require('express');
const router = express.Router();

// Rota para a página de login
router.get('/login', (req, res) => {
  res.render('auth/login'); // Renderiza a página de login (login.ejs)
});

module.exports = router;