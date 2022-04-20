const menu = document.querySelector(".menuSec");
const ham = document.querySelector(".ham");
const topSec = document.querySelector(".topSec");

ham.addEventListener('click', () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("mobileMenu");
    ham.classList.toggle("mobHam");
})
