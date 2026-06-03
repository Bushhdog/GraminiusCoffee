document.querySelector('.btn-primary').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.menu-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    
    // Atualiza botão ativo
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // Pega o filtro clicado
    const filter = this.dataset.filter;

    // Mostra/esconde cards
    cards.forEach(card => {
      if (card.dataset.category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

  });
});

function filterMenu(category) {
  cards.forEach(card => {
    card.style.display = card.dataset.category === category ? 'flex' : 'none';
  });
}

filterMenu('quentes');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    filterMenu(this.dataset.filter);
  });
});

