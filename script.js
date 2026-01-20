// Selección de slides y botones
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let current = 0;
const total = slides.length;

// Mostrar slide actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
        if(i === index) {
            slide.style.display = 'block';
            slide.classList.add('active');
        }
    });
}

// Siguiente slide
function nextSlide() {
    current++;
    if(current >= total) current = 0;
    showSlide(current);
}

// Slide anterior
function prevSlide() {
    current--;
    if(current < 0) current = total -1;
    showSlide(current);
}

// Inicializar carrusel mostrando la primera
showSlide(current);

// Eventos de botones
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

// Autoplay cada 2 segundos
let slideInterval = setInterval(nextSlide, 2000);

// Reiniciar intervalo al usar botones
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 2000);
}
