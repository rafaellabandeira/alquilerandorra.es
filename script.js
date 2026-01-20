const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-btn.prev').addEventListener('click', prevSlide);

// autoplay cada 2 segundos
setInterval(nextSlide, 2000);
