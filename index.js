// Importar o Express
const express = require('express');
// Importar config firebase
const db = require('./firebaseConfig');

// Inicializar o Express
const server = express();
const port = 5000;


// Rotas do servidor
server.get("/", function(req, res) {
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
});

// Iniciar o servidor
server.listen(port, function() {
    console.log(`Servidor rodando em http://localhost:${port}`);
});