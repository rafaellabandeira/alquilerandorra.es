// Selección de elementos
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
const totalSlides = slides.length;
const intervalTime = 2000; // 2 segundos
let slideInterval;

// Función para mostrar la diapositiva actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Función para ir a la siguiente diapositiva
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Función para ir a la diapositiva anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Función para iniciar el carrusel automático
function startCarousel() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Función para detener el carrusel automático
function stopCarousel() {
  clearInterval(slideInterval);
}

// Eventos de los botones
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopCarousel();
  startCarousel(); // reinicia intervalo
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopCarousel();
  startCarousel(); // reinicia intervalo
});

// Inicialización
showSlide(currentIndex);
startCarousel();
