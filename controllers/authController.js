// Importar o Firebase Authentication
const { auth } = require('../config/firebaseConfig');
const { GoogleAuthProvider, signInWithPopup } = require('firebase/auth');

// Função para lidar com o login usando o Google
function loginWithGoogle(req, res) {
    try {
      const provider = new GoogleAuthProvider();
      
      // Em um ambiente de servidor (Node.js), não é possível usar signInWithPopup diretamente.
      // Essa abordagem funcionará no cliente (lado do navegador).
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(`Usuário logado com sucesso: ${user.displayName}`);
          res.redirect('/home'); // Redireciona para a página principal após o login
        })
        .catch((error) => {
          console.error('Erro ao fazer login com Google:', error);
          res.status(500).send('Erro ao fazer login com Google');
        });
    } catch (error) {
      console.error('Erro ao iniciar o login com Google:', error);
      res.status(500).send('Erro ao iniciar o login com Google');
    }
  }
  
  module.exports = { loginWithGoogle };