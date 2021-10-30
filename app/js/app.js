let hamburgerMenu = document.getElementById('hamburgerMenu');
let header = document.querySelector('header');
let body = document.querySelector('body');
let hamburgerLinks = document.querySelectorAll('.hamburger-links');

hamburgerMenu.addEventListener('click', () => {
  header.classList.toggle('open');
  body.classList.toggle('noscroll');
});

hamburgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.toggle('open');
    body.classList.toggle('noscroll');
  });
});
