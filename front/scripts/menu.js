// Recebe os dados do cardápio do localStorage
function getMenu() {
    const menu = JSON.parse(localStorage.getItem('menu'));
    if (menu) {
        return menu;
    } else {
        return {
            main: { title: 'Prato Principal', description: 'Descrição do prato principal.' },
            side: { title: 'Acompanhamento', description: 'Descrição do acompanhamento.' },
            dessert: { title: 'Sobremesa', description: 'Descrição da sobremesa.' }
        };
    }
}

// Atualiza a exibição do cardápio
function displayMenu(menu) {
    const menuContainer = document.querySelector('.menu-container');

    // Cria os itens do cardápio
    const menuItems = ['main', 'side', 'dessert'];
    menuContainer.innerHTML = ''; // Limpa o conteúdo atual

    menuItems.forEach(category => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h3>${menu[category].title}</h3>
            <p>${menu[category].description}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Feedback do usuário
document.addEventListener('DOMContentLoaded', () => {
    const menu = getMenu();
    displayMenu(menu);

    // Captura a classificação por estrelas
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            ratingInput.value = value;

            // Atualiza a aparência das estrelas
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('selected');
            }
        });
    });

    // Enviar feedback
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const feedback = document.getElementById('general-feedback').value;
        const rating = ratingInput.value;

        if (rating > 0 || feedback.trim()) {
            const feedbackData = {
                rating: rating,
                feedback: feedback
            };

            // Aqui você pode enviar os dados para um servidor ou armazenar localmente
            console.log('Feedback enviado:', feedbackData);

            // Exemplo de como armazenar o feedback localmente
            let allFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
            allFeedbacks.push(feedbackData);
            localStorage.setItem('feedbacks', JSON.stringify(allFeedbacks));

            alert('Obrigado pelo seu feedback!');
            feedbackForm.reset();
            stars.forEach(star => star.classList.remove('selected'));
        } else {
            alert('Por favor, forneça uma avaliação ou um comentário.');
        }
    });
});
