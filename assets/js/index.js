
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.style.top = '-100px'; // Esconde a navbar
    } else {
        // Scroll Up
        navbar.style.top = '0'; // Mostra a navbar
    }
    lastScrollTop = scrollTop;
});
