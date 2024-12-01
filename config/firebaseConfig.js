// Importações necessárias do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

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

// Instâncias reutilizáveis
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// Exporta as instâncias
export { firebaseConfig, db, auth, provider };
