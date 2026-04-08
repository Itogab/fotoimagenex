//GALERIA
const images = document.querySelectorAll('.grid-wrapper img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.body.style.overflow = "visible";

let currentIndex = 0;

// abrir imagen
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        currentIndex = index;
        document.body.style.overflow = "hidden";
    });
});

// cerrar con X
document.querySelector('.close').addEventListener('click', () => {
    document.body.style.overflow = "visible";
    lightbox.classList.remove('active');
});

// siguiente
document.querySelector('.next').addEventListener('click', () => {
    let newIndex = (currentIndex + 1) % images.length;
    changeImage(newIndex);
});


//anterior
document.querySelector('.prev').addEventListener('click', () => {
    let newIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(newIndex);
});

// cerrar clickeando fondo
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.classList.remove('active');
        document.body.style.overflow = "visible";
    }
});

// teclado
document.addEventListener('keydown', (e) => {
    if(lightbox.classList.contains('active')){
        if(e.key === 'ArrowRight'){
            let newIndex = (currentIndex + 1) % images.length;
            changeImage(newIndex);
        }
        if(e.key === 'ArrowLeft'){
            let newIndex = (currentIndex - 1 + images.length) % images.length;
            changeImage(newIndex);
        }
        if(e.key === 'Escape'){
            lightbox.classList.remove('active');
            document.body.style.overflow = "visible";
        }
    }
});


//Cambiar imagen
function changeImage(newIndex){
    lightboxImg.classList.add('fade-out');

    setTimeout(() => {
        currentIndex = newIndex;
        lightboxImg.src = images[currentIndex].src;

        lightboxImg.classList.remove('fade-out');
    }, 100);
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