const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

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
/* Stops transitions as the viewport is being resized therefore preventing the menu from flashing */
let resizeTimer;
window.addEventListener('resize', function() {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});

document.querySelectorAll('.image-grid img').forEach(img => {
  img.addEventListener('click', function() {
    modal.classList.add('is-open');
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

modalClose.addEventListener('click', function() {
  modal.classList.remove('is-open');
});

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.remove('is-open');
  }
});