// Importar o Firebase
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, onSnapshot } = require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb2wU3VKcDJ5G7XtIrjJjNbZjOkj2oGJE",
    authDomain: "refeitorio-devweb.firebaseapp.com",
    projectId: "refeitorio-devweb",
    storageBucket: "refeitorio-devweb.firebasestorage.app",
    messagingSenderId: "340306115667",
    appId: "1:340306115667:web:0ed867c679a17f2198daa6"
  };

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firestore
const db = getFirestore(app);

// Importar o Express
const express = require('express');
// Inicializar o Express
const server = express();
const port = 5000;



console.log("Firebase foi configurado com sucesso!");

// Definindo a referência ao documento usando o ID '2' da coleção 'usuarios'
const userId = '2'; // ID do documento que queremos monitorar
const usuariosRef = doc(db, 'usuarios', userId);


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

