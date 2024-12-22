document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.desktop-nav');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
