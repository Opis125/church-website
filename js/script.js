// js/script.js

document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle code
    const mobileHandle = document.querySelector('.menu-mobile-handle');
    const mobileMenu = document.querySelector('nav.mobile ul.menu-mobile');
  
    mobileHandle.addEventListener('click', function() {
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
      } else {
        mobileMenu.style.display = 'block';
      }
    });
  
    // Carousel code
    const slides = document.querySelectorAll('.hero-carousel .carousel-slide');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  });
  