import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

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
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

// Lida com o clique no botão Google Login

const googleLogin = document.getElementById("btn-google-login");

googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            // Obtém a credencial do Google a partir do resultado
            const credential = GoogleAuthProvider.credentialFromResult(result);

            // Informações do usuário autenticado
            const user = result.user;
            console.log(user);

            // Redireciona o usuário para a página desejada
            window.location.href = "home.html";
        })
        .catch((error) => {
            // Manipula erros no login
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error("Erro no login:", errorCode, errorMessage);
        });
});

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    // Atualiza os elementos da seção de perfil com os dados do usuário
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
}

updateUserProfile();