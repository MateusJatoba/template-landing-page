let index = 0;

function showNextImage() {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  index = (index + 1) % images.length;
  const offset = -index * 100; // Ajusta o deslocamento para exibir uma imagem por vez
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Muda a imagem a cada 3 segundos
setInterval(showNextImage, 3000);

window.addEventListener('scroll', function() {
  const mainElement = document.querySelector('main');
  const scrollThreshold = 100; // Ponto de mudança, ajuste conforme necessário

  // Verifica a posição de rolagem
  if (window.scrollY > scrollThreshold) {
    mainElement.style.backgroundColor = 'black';
  } else {
    mainElement.style.backgroundColor = 'antiquewhite';
  }
})