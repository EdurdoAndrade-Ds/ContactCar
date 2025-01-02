const toggleSwitch = document.querySelector('.toggle-switch');
        const body = document.body;

        // Função para alternar os temas
        toggleSwitch.addEventListener('click', () => {
            toggleSwitch.classList.toggle('active');
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');
        });