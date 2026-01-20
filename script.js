// Selección de slides y botones
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let current = 0;
const total = slides.length;

// Función para mostrar slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}

// Función siguiente
function nextSlide() {
    current++;
    if(current >= total) current = 0;
    showSlide(current);
}

// Función anterior
function prevSlide() {
    current--;
    if(current < 0) current = total -1;
    showSlide(current);
}

// Eventos botones
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Autoplay cada 2 segundos
let slideInterval = setInterval(nextSlide, 2000);

// Opcional: reiniciar intervalo al usar botones
[nextBtn, prevBtn].forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 2000);
    });
});
