import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
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
//auth.languageCode = 'en';
const db = getFirestore(app);
//const provider = new GoogleAuthProvider();

// Função para carregar os pratos do Firestore
async function fetchDishes() {
    const dishesCollection = collection(db, "refeicoes"); // Coleção "refeicao"
    const dishesSnapshot = await getDocs(dishesCollection);
    const dishes = dishesSnapshot.docs.map(doc => doc.data());
    
    displayDishes(dishes);
}

// Função para exibir os pratos no corpo da página
function displayDishes(dishes) {
    const main = document.querySelector("main");

    dishes.forEach(dish => {
        const dishBox = document.createElement("div");
        dishBox.classList.add("dish-box");

        dishBox.innerHTML = `
            <h3>${dish.nome}</h3>
            <p>${dish.descricao}</p>
            <p class="stars">${generateStars(dish.avaliacao)}</p>
        `;

        main.appendChild(dishBox);
    });
}

// Função para gerar as estrelas de avaliação
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? "⭐" : "☆";
    }
    return stars;
}


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
        fetchDishes();
        updateUserProfile(user);
        console.log("Usuário autenticado:", user);
    } else {
        // Usuário não está logado, redireciona para página de registro/login
        alert("Por favor, crie uma conta e faça login.");
        window.location.href = "/register.html";
    }
});