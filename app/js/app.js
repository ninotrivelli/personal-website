let hamburgerMenu = document.getElementById('hamburgerMenu');
let header = document.querySelector('header');
let body = document.querySelector('body');
hamburgerMenu.addEventListener('click', () => {
  header.classList.toggle('open');
  body.classList.toggle('noscroll');
});
