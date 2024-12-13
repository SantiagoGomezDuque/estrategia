const modoOscuroBtn = document.getElementById('modoOscuroBtn');

modoOscuroBtn.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
  if (document.body.classList.contains('modo-oscuro')) {
    modoOscuroBtn.textContent = '🌞';
  } else {
    modoOscuroBtn.textContent = '🌙';
  }
});