import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAb2wU3VKcDJ5G7XtIrjJjNbZjOkj2oGJE",
    authDomain: "refeitorio-devweb.firebaseapp.com",
    projectId: "refeitorio-devweb",
    storageBucket: "refeitorio-devweb.firebasestorage.app",
    messagingSenderId: "340306115667",
    appId: "1:340306115667:web:0ed867c679a17f2198daa6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

// Função para atualizar as informações do usuário
function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    // Atualiza os elementos da página com as informações do usuário
    document.getElementById("userName").textContent = userName || "Usuário Anônimo";
    document.getElementById("userEmail").textContent = userEmail || "Email não disponível";
    document.getElementById("userProfilePicture").src = userProfilePicture || "../images/default.jpg";

}

// Monitorar o estado de autenticação do usuário
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Usuário está logado
        updateUserProfile(user);
        console.log("Usuário autenticado:", user);
    } else {
        // Usuário não está logado, redireciona para página de registro/login
        alert("Por favor, crie uma conta e faça login.");
        window.location.href = "/register.html";
    }
});