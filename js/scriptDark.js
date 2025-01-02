const toggleSwitch = document.querySelector('.toggle-switch');
const body = document.body;

// Aplica o tema salvo no localStorage ao carregar a página
const currentTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(currentTheme);
if (currentTheme === 'dark-mode') {
    toggleSwitch.classList.add('active');
}

// Alterna o tema e salva no localStorage
toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    toggleSwitch.classList.toggle('active');

    const newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', newTheme);
});