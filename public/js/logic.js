//Carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY){
    nav.classList.add("nav_hidden");
  }else{
    nav.classList.remove("nav_hidden")
  }

  lastScrollY = window.scrollY
});

//DROPDOWN MENU

let menu = document.querySelector('.menu-icon');

menu.addEventListener("click", () => {
  let dropdown = document.querySelector('.dropdown-menu');
  if (dropdown.classList.contains("disabled")){
    dropdown.classList.remove("disabled")
  }else{
    dropdown.classList.add("disabled")
  }
})