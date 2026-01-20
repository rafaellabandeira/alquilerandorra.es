const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
const totalSlides = slides.length;
let slideInterval = setInterval(nextSlide, 2000);

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 2000);
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 2000);
});

// Inicializa
showSlide(currentIndex);
