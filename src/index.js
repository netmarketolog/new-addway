import './js/scroll-to-top';
import getBreadcrumbs from './js/breadcrumbs';
import './js/slider';

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu__open'),
    closeMenuBtn: document.querySelector('.header-menu__close'),
    menu: document.querySelector('.burger'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

getBreadcrumbs();
