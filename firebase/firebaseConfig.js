// Importar a configuração do Firebase Firestore
const { initializeApp } = require('firebase/app');
const { getFirestore} = require('firebase/firestore');
const { getAuth } = require('firebase/auth');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb2wU3VKcDJ5G7XtIrjJjNbZjOkj2oGJE",
    authDomain: "refeitorio-devweb.firebaseapp.com",
    projectId: "refeitorio-devweb",
    storageBucket: "refeitorio-devweb.firebasestorage.app",
    messagingSenderId: "340306115667",
    appId: "1:340306115667:web:0ed867c679a17f2198daa6"
  };

// Inicializa o Firebase e obtém a instância do Firestore
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


// Função para procurar um usuário com o nome 'Luiggi'
async function findUserByName() {
    try {
      // Referenciar a coleção 'usuarios'
      const usuariosCollection = collection(db, 'usuarios');
      // Criar uma consulta para procurar por documentos onde o campo 'nome' seja 'Luiggi'
      const q = query(usuariosCollection, where('Nome', '==', 'Luiggi'));
      // Executar a consulta
      const querySnapshot = await getDocs(q);
  
      // Verificar se há resultados e imprimir o nome dos documentos encontrados
      if (querySnapshot.empty) {
        console.log('Nenhum usuário com o nome Luiggi foi encontrado.');
      } else {
        querySnapshot.forEach(doc => {
          const data = doc.data();
          console.log(`Usuário encontrado: ${doc.id} - Nome: ${data.Nome}`);
        });
      }
    } catch (error) {
      console.error('Erro ao procurar o usuário:', error);
    }
  }
  
// Exportar os objetos necessários
module.exports = { firebaseConfig, db, auth, findUserByName };