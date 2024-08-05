(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu__open'),
    closeMenuBtn: document.querySelector('.header-menu__close'),
    siteNavBtn: document.querySelectorAll('.site-nav__btn'),
    menu: document.querySelector('.burger'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('open');
    refs.body.classList.toggle('no-scroll');
  }

  refs.siteNavBtn.forEach(button => {
    button.addEventListener('click', function () {
      const dropdown = this.parentElement.nextElementSibling;

      dropdown.classList.toggle('open');
    });
  });
})();
