const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }

    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
});
