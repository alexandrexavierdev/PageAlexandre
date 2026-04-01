// ==========================================
// 5. Lógica das Tags de Assunto (Contato)
// ==========================================
const tags = document.querySelectorAll('.assunto-tags .tag');

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Remove a classe 'active' de todas as tags
        tags.forEach(t => t.classList.remove('active'));
        // Adiciona a classe 'active' apenas na tag que foi clicada
        tag.classList.add('active');
    });
});