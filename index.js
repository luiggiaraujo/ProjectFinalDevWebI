// Importar o Express
const express = require('express');
//const routes = require('./routes/routes'); // Arquivo de rotas do projeto

const firebaseConfig = require('./firebase/firebaseConfig'); // Importa a configuração do Firebase 

// Inicializar o Express
const server = express();
const port = 5000;

console.log("Firebase foi configurado com sucesso!");

// Rota principal
server.get("/", function(req, res) {
    res.send("Seja bem-vindo ao meu app!");
});

// Rota 'sobre'
server.get("/sobre", function(req, res) {
    res.send("Minha página sobre");
});

// Rota 'blog'
server.get("/blog", function(req, res) {
    res.send("Bem-vindo ao meu blog!");
});

// Rota para exibir o nome do usuário
server.get("/usuario/:nome", function(req, res) {
    const nomeUsuario = req.params.nome;
    res.send(`Bem-vindo, ${nomeUsuario}!`);
});

// Iniciar o servidor
server.listen(port, function() {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

