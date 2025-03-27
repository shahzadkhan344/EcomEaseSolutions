let slideIndex = 0;
const slides = document.querySelector(".slides");
function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) slideIndex = 2;
    if (slideIndex > 2) slideIndex = 0;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function autoSlide() {
    moveSlide(1);
}
setInterval(autoSlide, 5000);







let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slidesa');
    const totalSlides = document.querySelectorAll('.sliders').length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 3000); // 5000ms = 5 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});











document.querySelectorAll(".faq").forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });