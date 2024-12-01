import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios'; // Requer o axios para enviar solicitação ao servidor

// Configuração do Firebase (deve ser a mesma configuração do firebaseConfig.js)
const firebaseConfig = {
  apiKey: "AIzaSyAb2wU3VKcDJ5G7XtIrjJjNbZjOkj2oGJE",
  authDomain: "refeitorio-devweb.firebaseapp.com",
  projectId: "refeitorio-devweb",
  storageBucket: "refeitorio-devweb.firebasestorage.app",
  messagingSenderId: "340306115667",
  appId: "1:340306115667:web:0ed867c679a17f2198daa6"
};

// Inicializa o Firebase e a autenticação
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

document.addEventListener('DOMContentLoaded', () => {
  const googleLoginButton = document.querySelector('.btn-login-google');

  if (googleLoginButton) {
    googleLoginButton.addEventListener('click', () => {
      const provider = new GoogleAuthProvider();
      
      // Usar o signInWithPopup para autenticar com Google
      signInWithPopup(auth, provider)
        .then(async (result) => {
          const user = result.user;
          console.log('Usuário logado com sucesso:', user.displayName);

          // Enviar solicitação ao servidor para armazenar na sessão
          try {
            await axios.post('/set-session', {
              uid: user.uid,
              displayName: user.displayName,
              email: user.email
            });
            window.location.href = '/home'; // Redirecionar para a página inicial
          } catch (error) {
            console.error('Erro ao definir a sessão no servidor:', error);
          }
        })
        .catch((error) => {
          console.error('Erro ao fazer login com Google:', error);
        });
    });
  }
});
