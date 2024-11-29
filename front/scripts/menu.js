// Função para exibir o cardápio na página
function displayMenu() {
    // Recuperar os dados do cardápio do localStorage
    const menu = JSON.parse(localStorage.getItem("menu"));

    if (menu) {
        const menuContainer = document.querySelector(".menu-container");

        // Limpar o conteúdo atual do cardápio
        menuContainer.innerHTML = "";

        // Criar o HTML para cada categoria do cardápio
        const categories = ["main", "side", "dessert"];
        categories.forEach(category => {
            const categoryTitle = category === "main" ? "Prato Principal" :
                                  category === "side" ? "Acompanhamento" : "Sobremesa";
            
            const title = menu[category].title;
            const description = menu[category].description;

            // Criar um elemento para exibir o título e descrição
            const categoryElement = document.createElement("div");
            categoryElement.classList.add("menu-item");
            categoryElement.innerHTML = `
                <h2>${categoryTitle}</h2>
                <h3>${title}</h3>
                <p>${description}</p>
            `;

            // Adicionar o item ao contêiner do cardápio
            menuContainer.appendChild(categoryElement);
        });
    } else {
        const menuContainer = document.querySelector(".menu-container");
        menuContainer.innerHTML = "<p>O cardápio ainda não foi configurado.</p>";
    }
}

// Chamar a função para exibir o cardápio quando a página carregar
window.onload = displayMenu;
