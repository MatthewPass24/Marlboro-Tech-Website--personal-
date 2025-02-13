// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//click down button
$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section').offset().top }, 'slow');
    return false;
  });
});

//js for the card carousel 
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Next and previous navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

//js for the changing FAQ section depending on selected major
function aI(){
  document.getElementById('change-title').innerText='Artificial Intelligence FAQ' 
  document.getElementById('change-text').innerText='Artificial Intelligence: Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
}
function compEngineering(){
  document.getElementById('change-title').innerText='Computer Engineering FAQ' 
  document.getElementById('change-text').innerText='Artificial Intelligence: Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
}
function compSci(){
  document.getElementById('change-title').innerText='Computer Science FAQ' 
  document.getElementById('change-text').innerText='Computer Science: Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
}
function compEngineering(){
  document.getElementById('change-title').innerText='Cybersecurity FAQ' 
  document.getElementById('change-text').innerText='Artificial Intelligence: Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
}
function compEngineering(){
  document.getElementById('change-title').innerText='Computer Engineering FAQ' 
  document.getElementById('change-text').innerText='Artificial Intelligence: Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
}
function compEngineering(){
  document.getElementById('change-title').innerText='Computer Engineering FAQ' 
  document.getElementById('change-text').innerText='Artificial Intelligence: Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
}
function compEngineering(){
  document.getElementById('change-title').innerText='Computer Engineering FAQ' 
  document.getElementById('change-text').innerText='Artificial Intelligence: Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
}