// Seleciona os elementos gerais
const header = document.getElementById('header');
const btnMobile = document.getElementById('btn-mobile');
const themeToggle = document.getElementById('theme-toggle');

// ==========================================
// 1. Efeito de diminuir o Header ao rolar
// ==========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==========================================
// 2. Lógica do Tema Claro e Escuro
// ==========================================
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
});


// ==========================================
// 4. Menu Mobile
// ==========================================
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

if(btnMobile) {
    btnMobile.addEventListener('click', toggleMenu);
}

console.log("Script carregado! Dropdown de idiomas e tema ativos.");