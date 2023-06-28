const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.sections-navbar');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});
