// Importar o Firebase Authentication
const { auth } = require('../firebase/firebaseConfig');
const { GoogleAuthProvider, signInWithPopup } = require('firebase/auth');

// Função para lidar com login usando Google
async function loginWithGoogle(req, res) {
  try {
    // Criar uma nova instância do provedor Google
    const provider = new GoogleAuthProvider();

    // Realizar o login com Google via popup (apenas como exemplo, pois em Node.js geralmente se usa OAuth2)
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Após login bem-sucedido
    res.send(`Usuário logado com sucesso: ${user.displayName}`);
  } catch (error) {
    console.error('Erro ao fazer login com Google:', error);
    res.status(500).send('Erro ao fazer login com Google');
  }
}

// Exportar a função para ser utilizada nas rotas
module.exports = { loginWithGoogle };
