const slides = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let current = 0;
let slideInterval = setInterval(nextSlide, 2000); // 2 segundos automático

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  current = index;
}

function nextSlide() {
  let nextIndex = (current + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  let prevIndex = (current - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

// Botones
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });
}

// Reiniciar autoplay al hacer clic
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 2000);
}
