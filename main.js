const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});