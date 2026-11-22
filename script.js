const intro = document.getElementById('intro');
const letters = document.getElementById('letters');
const openButton = document.getElementById('openButton');
const againButton = document.getElementById('againButton');
const heartsLayer = document.getElementById('heartsLayer');

function makeHearts(amount = 12) {
  const symbols = ['♡', '♥', '✧'];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-float';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 1.2}s`;
    heart.style.fontSize = `${13 + Math.random() * 17}px`;
    heartsLayer.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
}

openButton.addEventListener('click', () => {
  if (intro.classList.contains('opening')) return;
  intro.classList.add('opening');
  makeHearts(16);

  window.setTimeout(() => {
    intro.classList.add('fade-away');
    window.setTimeout(() => {
      intro.classList.add('hidden');
      letters.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 550);
  }, 850);
});

againButton.addEventListener('click', () => {
  letters.classList.add('hidden');
  intro.classList.remove('hidden', 'opening', 'fade-away');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
