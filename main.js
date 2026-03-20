// ===============================
// MAIN.JS – PORTFÓLIO ULTIMATE
// ===============================

// ======== Tradução PT/EN ========
function setLanguage(lang) {
  document.querySelectorAll('[data-pt]').forEach(el => {
    if(lang === 'pt') {
      el.innerHTML = el.getAttribute('data-pt'); // usa innerHTML para interpretar tags
    } else {
      el.innerHTML = el.getAttribute('data-en');
    }
  });
}

// ======== Dark Mode ========
function toggleDark() {
  document.body.classList.toggle('dark-mode');
  // opcional: salvar preferência no localStorage
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Restaurar dark mode ao carregar
window.addEventListener('load', () => {
  if(localStorage.getItem('darkMode') === 'enabled'){
    document.body.classList.add('dark-mode');
  }
});

// ======== Relógio em tempo real ========
function updateClock() {
  const clock = document.getElementById('clock');
  if(!clock) return;

  const now = new Date();
  const hours = now.getHours().toString().padStart(2,'0');
  const minutes = now.getMinutes().toString().padStart(2,'0');
  const seconds = now.getSeconds().toString().padStart(2,'0');

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000); // atualiza a cada segundo
updateClock(); // inicializa ao carregar

// ======== Animações de Entrada (Fade-In / Fade-Up) ========
function animateCards() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  const fadeUpElements = document.querySelectorAll('.fade-up');

  const observerOptions = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'all 0.8s ease-out';
      }
    });
  }, observerOptions);

  fadeInElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    observer.observe(el);
  });

  fadeUpElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    observer.observe(el);
  });
}

// Iniciar animações ao carregar
window.addEventListener('load', animateCards);

// ======== Scroll Suave para Links Internos ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ======== Menu Responsivo (opcional) ========
const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if(menuBtn && menu){
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// ======== Inicializa Tradução Padrão ========
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('pt'); // inicia em português
});


// Seleciona todos os elementos com a classe .fade-up
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show'); // Adiciona classe que faz a animação
    }
  });
}, { threshold: 0.2 }); // 20% do elemento visível

fadeElements.forEach(el => observer.observe(el));

/* Dark mode */
function toggleDark() {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}
if(localStorage.getItem('darkMode') === 'enabled'){
  document.body.classList.add('dark');
}

/* Fade-up animation for mini cards */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) { entry.target.classList.add("show"); }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
