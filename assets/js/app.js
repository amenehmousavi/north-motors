const menuToggle = document.querySelector('.menu-toggle');
const headerMenu = document.querySelector('.header-menu');

menuToggle.addEventListener('click', () => {

    headerMenu.classList.toggle('active');

    if (headerMenu.classList.contains('active')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }

});