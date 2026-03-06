const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

/*controls the menu and burger icon on small screens*/
navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});

/*adds in class to CSS that shows shadow under the nav bar on scroll*/
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
});