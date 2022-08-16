const menuToggler = document.querySelector('#burger-menu');
const header = document.querySelector('.header');

menuToggler.addEventListener('click', handleMenuToggle);

function handleMenuToggle() {
  menuToggler.classList.toggle('opened');
  header.classList.toggle('menu-visible');
  document.body.classList.toggle('no-scrolling');
}

const searchButton = document.querySelector('#search-button');
const closeButton = document.querySelector('#close-button');
const searchForm = document.querySelector('.search-form');

searchButton.addEventListener('click', () => {
  header.classList.add('search-active');
  searchForm.classList.add('active');
});

closeButton.addEventListener('click', () => {
  header.classList.remove('search-active');
  searchForm.classList.remove('active');
});
