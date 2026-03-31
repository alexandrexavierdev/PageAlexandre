// Seleciona os elementos
const btnMobile = document.getElementById('btn-mobile');
const header = document.getElementById('header');
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

// Efeito de mudar fundo do Header ao rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#000000';
        header.style.padding = '1rem 10%';
    } else {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        header.style.padding = '1.5rem 10%';
    }
});

console.log("Script carregado! A paleta de cores está ativa.");
