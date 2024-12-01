// Importar o Express
const express = require('express');
const session = require('express-session');
const path = require('path');
const authRoutes = require('./routes/authRoutes'); // Importar as rotas de autenticação
require('dotenv').config();


// Importar config firebase
const db = require('./config/firebaseConfig');

// Inicializar o Express
const server = express();
const port = 5000;

// Configuração da sessão (necessária para Passport)
server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }));
  
  // Adicionar as rotas de autenticação
  server.use(authRoutes);

  server.set('views', path.join(__dirname, 'views')); // Define o diretório das views
  server.set('view engine', 'ejs'); // Define EJS como motor de template

// Configurar o diretório de arquivos estáticos
server.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos como CSS, imagens e JavaScript

// Rota de login
server.get('/', (req, res) => {
    res.render('login'); // Renderiza a página 'login.ejs' dentro da pasta 'auth'
  });


  

// Rotas do servidor
/*server.get("/", function(req, res) {
    res.send("Seja bem-vindo ao meu app!");
});

server.get("/sobre", function(req, res) {
    res.send("Minha página sobre");
});

server.get("/blog", function(req, res) {
    res.send("Bem-vindo ao meu blog!");
});

server.get("/usuario/:nome", function(req, res) {
    const nomeUsuario = req.params.nome;
    res.send(`Bem-vindo, ${nomeUsuario}!`);
});*/

// Iniciar o servidor
server.listen(port, function() {
    console.log(`Servidor rodando em http://localhost:${port}`);
});