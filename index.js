// Importar o Express e configurações básicas
const express = require('express');
const path = require('path');

// Inicializar o Express
const server = express();
const port = 5000;

// Configurar o diretório de arquivos estáticos
server.use(express.static(path.join(__dirname, 'front'))); // Servir arquivos estáticos, incluindo o HTML, CSS e JS

// Rota principal redireciona para a página de login
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front/index/login.html')); // Serve a página de login
});

server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'front/index/home.html'));
});

// Iniciar o servidor
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
