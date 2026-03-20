// Função para trocar o idioma
function setLanguage(lang) {
  // Seleciona todos os elementos que possuem data-pt e data-en
  const elements = document.querySelectorAll('[data-pt][data-en]');

  elements.forEach(el => {
    if (lang === 'pt') {
      el.textContent = el.getAttribute('data-pt');
    } else if (lang === 'en') {
      el.textContent = el.getAttribute('data-en');
    }
  });

  // Para os títulos e skills dentro dos cards que ainda não possuem data attributes,
  // podemos criar dinamicamente:
  const cards = document.querySelectorAll('.experience-card');

  cards.forEach(card => {
    // Header título e empresa
    const h3 = card.querySelector('.experience-header h3');
    const span = card.querySelector('.experience-header span');
    const period = card.querySelector('.experience-period');
    const p = card.querySelector('p');
    const skills = card.querySelectorAll('.experience-skills span');

    // Traduzir manualmente o conteúdo com base na língua
    if (lang === 'pt') {
      if (h3.textContent === "President") h3.textContent = "Presidente";
      if (span.textContent === "Pemba Children's Parliament") span.textContent = "Parlamento Infantil de Pemba";
      if (period.textContent === "2021 – 2025") period.textContent = "2021 – 2025";
      if (p.textContent === "Leadership in youth projects...") p.textContent = "Liderança em projetos juvenis, organização de sessões parlamentares, participação em debates e definição de políticas educativas para crianças e adolescentes.";
      
      // Skills
      skills.forEach(skill => {
        if (skill.textContent === "Leadership") skill.textContent = "Liderança";
        if (skill.textContent === "Communication") skill.textContent = "Comunicação";
        if (skill.textContent === "Organization") skill.textContent = "Organização";
        if (skill.textContent === "Planning") skill.textContent = "Planejamento";
      });
    } else if (lang === 'en') {
      if (h3.textContent === "Presidente") h3.textContent = "President";
      if (span.textContent === "Parlamento Infantil de Pemba") span.textContent = "Pemba Children's Parliament";
      if (period.textContent === "2021 – 2025") period.textContent = "2021 – 2025";
      if (p.textContent === "Liderança em projetos juvenis, organização de sessões parlamentares, participação em debates e definição de políticas educativas para crianças e adolescentes.") {
        p.textContent = "Leadership in youth projects, organizing parliamentary sessions, participating in debates, and defining educational policies for children and teenagers.";
      }
      
      // Skills
      skills.forEach(skill => {
        if (skill.textContent === "Liderança") skill.textContent = "Leadership";
        if (skill.textContent === "Comunicação") skill.textContent = "Communication";
        if (skill.textContent === "Organização") skill.textContent = "Organization";
        if (skill.textContent === "Planejamento") skill.textContent = "Planning";
      });
    }
  });
}