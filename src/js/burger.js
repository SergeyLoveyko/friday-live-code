var burgerMenu;
var lineBurger;
var headerNav;
var HTMLBody;
let showHeaderBtn;

export function burger() {
  burgerMenu = document.querySelector('.hamburger');
  lineBurger = document.querySelector('.hamburger__line');
  headerNav = document.querySelector('.header__nav');
  HTMLBody = document.body;
  showHeaderBtn = document.querySelector('.header__buttons');

  burgerMenu.addEventListener('click', showNavigation);
}

function showNavigation() {
  lineBurger.classList.toggle('animate');
  headerNav.classList.toggle('header__nav_active');
  HTMLBody.classList.toggle('overlay-not');
  showHeaderBtn.classList.toggle('show-head-btn')
}