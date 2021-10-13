//script untuk icon hamburger menu
const menu = document.querySelector('.hammenu');
const nav = document.querySelector('.sidebar');

menu.addEventListener('click', function () {
    nav.classList.toggle('slide');
});