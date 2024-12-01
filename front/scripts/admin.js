
document.getElementById('edit-menu-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores dos campos do formulário
    const mainTitle = document.getElementById('main-title').value;
    const mainDescription = document.getElementById('main-description').value;

    const sideTitle = document.getElementById('side-title').value;
    const sideDescription = document.getElementById('side-description').value;

    const dessertTitle = document.getElementById('dessert-title').value;
    const dessertDescription = document.getElementById('dessert-description').value;

    // Cria o objeto com os dados do cardápio
    const menu = {
        main: { title: mainTitle, description: mainDescription },
        side: { title: sideTitle, description: sideDescription },
        dessert: { title: dessertTitle, description: dessertDescription }
    };

    // Salva o cardápio no localStorage
    localStorage.setItem('menu', JSON.stringify(menu));

    // Exibe uma mensagem de sucesso
    alert('Cardápio salvo com sucesso!');
});
