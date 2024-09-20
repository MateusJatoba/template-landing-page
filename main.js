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

// window.addEventListener('scroll', function() {
//   const mainElement = document.querySelector('main');
//   const scrollThreshold = 100; // Ponto de mudança, ajuste conforme necessário

//   // Verifica a posição de rolagem
//   if (window.scrollY > scrollThreshold) {
//     mainElement.style.backgroundColor = 'black';
//   } else {
//     mainElement.style.backgroundColor = 'antiquewhite';
//   }
// })


let plano_free = document.getElementById('bloco_planos')
let plano_standard = document.getElementById('bloco_standard')
let plano_plus = document.getElementById('bloco_plus')

// planos_free.addEventListener('click' , clicar)
plano_free.addEventListener('mouseenter', entrar)
plano_free.addEventListener('mouseout', volta)

plano_standard.addEventListener('mouseenter', entrar_s)
plano_standard.addEventListener('mouseout', volta_s)

plano_plus.addEventListener('mouseenter', entrar_p)
plano_plus.addEventListener('mouseout', volta_p)

function entrar() {

  plano_free.style.transform = 'scale(1.08,1.08)'
  plano_free.style.transition = 'all 1s'
}


function volta() {
  plano_free.style.transform = 'scale(1,1)'
  plano_free.style.transition = 'all 1s'
}

function entrar_s() {

  plano_standard.style.transform = 'scale(1.08,1.08)'
  plano_standard.style.transition = 'all 1s'
}


function volta_s() {
  plano_standard.style.transform = 'scale(1,1)'
  plano_standard.style.transition = 'all 1s'
}


function entrar_p() {

  plano_plus.style.transform = 'scale(1.08,1.08)'
  plano_plus.style.transition = 'all 1s'
}


function volta_p() {
  plano_plus.style.transform = 'scale(1,1)'
  plano_plus.style.transition = 'all 1s'
}