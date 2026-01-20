/* CARRUSEL */
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');
let index = 0;
let interval;

/* Crear dots */
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.carousel-dots span');

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
}
function nextSlide() { index = (index + 1) % slides.length; showSlide(index); }
function prevSlide() { index = (index - 1 + slides.length) % slides.length; showSlide(index); }
function goToSlide(i) { index = i; showSlide(index); resetAutoplay(); }
function autoplay() { interval = setInterval(nextSlide, 2000); }
function resetAutoplay() { clearInterval(interval); autoplay(); }

nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

showSlide(index);
autoplay();

/* MODALES */
const legalBtns = document.querySelectorAll('.legal-btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

legalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-target');
        document.getElementById(target).style.display = 'block';
    });
});
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) modal.style.display = 'none';
    });
});
