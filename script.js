/* Navigation Menu */
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('change');
  });
});

/* Scroll to Top Button */
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
