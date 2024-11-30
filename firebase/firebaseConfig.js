// Importar o Firebase
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Configuração do Firebase (com as suas credenciais)
const firebaseConfig = {
  apiKey: "AIzaSyAb2wU3VKcDJ5G7XtIrjJjNbZjOkj2oGJE",
  authDomain: "refeitorio-devweb.firebaseapp.com",
  projectId: "refeitorio-devweb",
  storageBucket: "refeitorio-devweb.firebasestorage.app",
  messagingSenderId: "340306115667",
  appId: "1:340306115667:web:0ed867c679a17f2198daa6"
};

// Inicializa o Firebase e exporta a instância do Firestore
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = db;