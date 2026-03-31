const translations = {
    pt: {
        title: "DevFullStack",
        home: "Home",
        about: "Sobre",
        skills: "Skills",
        projects: "Projetos",
        contact: "Contato",
        subtitle: "Criando Experiências Digitais",
        greeting: "Olá sou Alexandre Xavier",
        description: "Desenvolvedor Full Stack focado em criar experiências digitais modernas e escaláveis.",
        contact_btn: "Entrar em Contato",
        technologies: "Tecnologias",
        footer_text: "© 2026 Alexandre Xavier - Desenvolvedor Full Stack",
        theme_aria: "Alternar Tema",
        lang_aria: "Mudar Idioma",
        menu_aria: "Abrir Menu"
    },
    en: {
        title: "FullStackDev",
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        subtitle: "Crafting Digital Experiences",
        greeting: "Hello, I am Alexandre Xavier",
        description: "Full Stack Developer focused on creating modern and scalable digital experiences.",
        contact_btn: "Get in Touch",
        technologies: "Technologies",
        footer_text: "© 2026 Alexandre Xavier - Full Stack Developer",
        theme_aria: "Toggle Theme",
        lang_aria: "Change Language",
        menu_aria: "Open Menu"
    },
    es: {
        title: "FullStackDes",
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        subtitle: "Creando Experiencias Digitales",
        greeting: "Hola, soy Alexandre Xavier",
        description: "Desarrollador Full Stack enfocado en crear experiencias digitales modernas y escalables.",
        contact_btn: "Ponerse en Contacto",
        technologies: "Tecnologías",
        footer_text: "© 2026 Alexandre Xavier - Desarrollador Full Stack",
        theme_aria: "Cambiar Tema",
        lang_aria: "Cambiar Idioma",
        menu_aria: "Abrir Menú"
    },
    fr: {
        title: "DévFullStack",
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
        subtitle: "Création d'Expériences Numériques",
        greeting: "Bonjour, je suis Alexandre Xavier",
        description: "Développeur Full Stack axé sur la création d'expériences numériques modernes et évolutives.",
        contact_btn: "Entrer en Contact",
        technologies: "Technologies",
        footer_text: "© 2026 Alexandre Xavier - Développeur Full Stack",
        theme_aria: "Changer de Thème",
        lang_aria: "Changer de Langue",
        menu_aria: "Ouvrir le Menu"
    }
};

const langMenuBtn = document.getElementById('lang-menu-btn');
const langOptions = document.getElementById('lang-options');
const currentLangFlag = document.getElementById('current-lang-flag');
const langItems = document.querySelectorAll('.lang-options li');

// Dicionário de bandeiras para trocar no botão principal com os nomes reais dos arquivos e caminho corrigido
const flags = { 
    pt: 'assents/tradutor/bandeira-do-brasil.png',
    en: 'assents/tradutor/estados-unidos.png',
    es: 'assents/tradutor/espanha.png',
    fr: 'assents/tradutor/franca.png'
};
// Abre/Fecha o menu ao clicar no botão
langMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    langOptions.classList.toggle('show');
});

// Fecha o menu se o usuário clicar em qualquer outro lugar da tela
document.addEventListener('click', () => {
    langOptions.classList.remove('show');
});

// Lógica de clicar em um idioma específico
langItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedLang = item.getAttribute('data-lang');
        
        // Remove a cor de 'ativo' de todos e coloca só no que foi clicado
        langItems.forEach(li => li.classList.remove('active'));
        item.classList.add('active');

        // Atualiza a bandeira do botão principal
        currentLangFlag.src = flags[selectedLang];

        // Fecha o menu dropdown
        langOptions.classList.remove('show');

        // Traduz os textos normais da página
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[selectedLang] && translations[selectedLang][key]) {
                element.textContent = translations[selectedLang][key];
            }
        });

        // Traduz as etiquetas invisíveis de acessibilidade
        const ariaElements = document.querySelectorAll('[data-i18n-aria]');
        ariaElements.forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            if (translations[selectedLang] && translations[selectedLang][key]) {
                element.setAttribute('aria-label', translations[selectedLang][key]);
            }
        });
    });
});