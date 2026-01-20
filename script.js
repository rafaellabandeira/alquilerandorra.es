/* CARRUSEL PREMIUM */
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

function showSlide(i){
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
}

function nextSlide(){ index = (index + 1) % slides.length; showSlide(index); }
function prevSlide(){ index = (index - 1 + slides.length) % slides.length; showSlide(index); }
function goToSlide(i){ index = i; showSlide(index); resetAutoplay(); }

nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

function autoplay(){ interval = setInterval(nextSlide,2000); }
function resetAutoplay(){ clearInterval(interval); autoplay(); }

showSlide(index);
autoplay();

/* MODALES PREMIUM */
const legalBtns = document.querySelectorAll('.legal-btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

legalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-target');
        const modal = document.getElementById(target);
        modal.style.display = 'block';
        modal.classList.add('show');
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.classList.remove('show');
        setTimeout(()=>{ modal.style.display='none'; },400);
    });
});

window.addEventListener('click', e => {
    modals.forEach(modal => {
        if(e.target === modal){
            modal.classList.remove('show');
            setTimeout(()=>{ modal.style.display='none'; },400);
        }
    });
});
