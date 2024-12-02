import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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
const db = getFirestore(app);

// Dias da semana
const weekDays = ["segunda", "terca", "quarta", "quinta", "sexta"];

// Função para carregar o cardápio
async function loadMenu() {
    const weekMenuContainer = document.getElementById("week-menu");

    for (const day of weekDays) {
        const docRef = doc(db, "cardapio", day); // Referência ao documento
        const docSnap = await getDoc(docRef); // Busca o documento

        // Verifica se o documento existe
        const data = docSnap.exists() ? docSnap.data() : { nome: "Prato não disponível", descricao: "Descrição não disponível" };

        // Cria a estrutura HTML da caixa
        const dayBox = document.createElement("div");
        dayBox.classList.add("day-box");

        dayBox.innerHTML = `
            <h3>${day.charAt(0).toUpperCase() + day.slice(1)}</h3>
            <p><strong>Prato:</strong> ${data.nome}</p>
            <p><strong>Descrição:</strong> ${data.descricao}</p>
        `;

        weekMenuContainer.appendChild(dayBox); // Adiciona a caixa ao container
    }
}

// Carrega o cardápio ao carregar a página
document.addEventListener("DOMContentLoaded", loadMenu);
