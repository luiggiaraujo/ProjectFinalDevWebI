import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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

// Dias da semana e IDs dos documentos no Firestore
const weekDays = ["segunda", "terca", "quarta", "quinta", "sexta"];

// Função para carregar o cardápio da semana
async function loadMenu() {
    const weekMenuContainer = document.getElementById("week-menu");

    for (const day of weekDays) {
        const docRef = doc(db, "Cardapio", day);
        const docSnap = await getDoc(docRef);

        const data = docSnap.exists() ? docSnap.data() : { nome: "", descricao: "" };

        const dayBox = document.createElement("div");
        dayBox.classList.add("day-box");

        dayBox.innerHTML = `
            <h3>${day.charAt(0).toUpperCase() + day.slice(1)}</h3>
            <div class="form-group">
                <label for="${day}-nome">Prato do Dia</label>
                <input type="text" id="${day}-nome" value="${data.nome}" placeholder="Digite o nome do prato">
            </div>
            <div class="form-group">
                <label for="${day}-descricao">Descrição</label>
                <textarea id="${day}-descricao" placeholder="Digite a descrição">${data.descricao}</textarea>
            </div>
        `;

        weekMenuContainer.appendChild(dayBox);
    }
}

// Função para salvar o cardápio da semana
async function saveMenu() {
    for (const day of weekDays) {
        const nome = document.getElementById(`${day}-nome`).value;
        const descricao = document.getElementById(`${day}-descricao`).value;

        const docRef = doc(db, "Cardapio", day);

        await setDoc(docRef, { nome, descricao });
    }

    alert("Cardápio atualizado com sucesso!");
}

// Carregar o cardápio ao carregar a página
document.addEventListener("DOMContentLoaded", loadMenu);

// Salvar o cardápio ao clicar no botão
document.getElementById("save-button").addEventListener("click", saveMenu);
