
// header js 

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  


let activeSlide = 0;

// Ensure the DOM is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.image-slide');
    const slidesContainer = document.querySelector('.image-slides');

    // Function to navigate slides
    function navigateSlide(direction) {
        const totalSlides = slides.length;

        // Update active slide index
        activeSlide = (activeSlide + direction + totalSlides) % totalSlides;

        // Move slides container
        const slideWidth = slides[0].clientWidth;
        slidesContainer.style.transform = `translateX(-${activeSlide * slideWidth}px)`;
    }

    // Attach click event listeners to arrows
    document.querySelector('.slider-left').addEventListener('click', () => navigateSlide(-1));
    document.querySelector('.slider-right').addEventListener('click', () => navigateSlide(1));
});


// logo slider 

const sliderWrapper = document.querySelector('.slider-wrapper');
const slideTrack = document.querySelector('.slide-track');

let isDragging = false;
let startX;
let scrollLeft;

sliderWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    sliderWrapper.style.cursor = 'grabbing';
    startX = e.pageX - sliderWrapper.offsetLeft;
    scrollLeft = slideTrack.scrollLeft;
});

sliderWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
    sliderWrapper.style.cursor = 'grab';
});

sliderWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    sliderWrapper.style.cursor = 'grab';
});

sliderWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderWrapper.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scrolling speed
    slideTrack.style.transform = `translateX(${scrollLeft - walk}px)`;
});













// let customCurrentSlide = 0;

// function moveCustomSlide(direction) {
//   const slides = document.querySelectorAll('.custom-slide'); // Get all slides
//   const sliderContainer = document.querySelector('.custom-slider-container'); // Get the slider container
//   const totalSlides = slides.length; // Total number of slides

//   // Update the current slide index, ensuring it wraps around
//   customCurrentSlide = (customCurrentSlide + direction + totalSlides) % totalSlides;

//   // Move the slider container to show the correct slide
//   sliderContainer.style.transform = `translateX(-${customCurrentSlide * 100}%)`;
// }
