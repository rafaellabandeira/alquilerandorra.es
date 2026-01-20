const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(0px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) counter = -1;
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) counter = carouselImages.length;
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

setInterval(() => {
    if (counter >= carouselImages.length - 1) counter = -1;
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}, 5000);
