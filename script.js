const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(0px)';

// Botón siguiente
nextBtn.addEventListener('click', () => {
    counter++;
    if(counter >= carouselImages.length) counter = 0;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

// Botón anterior
prevBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0) counter = carouselImages.length - 1;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

// Cambio automático cada 2 segundos
setInterval(() => {
    counter++;
    if(counter >= carouselImages.length) counter = 0;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}, 2000);

// Ajuste tamaño al redimensionar ventana
window.addEventListener('resize', () => {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    setTimeout(() => { carouselSlide.style.transition = 'transform 0.5s ease-in-out'; }, 50);
});
