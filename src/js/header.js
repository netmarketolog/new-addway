(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    const path = window.location.pathname;

    if (path === '/' || path === '/index.html') {
      header.classList.add('home-header');
    } else {
      header.classList.add('other-page-header');
    }
  });
})();

(() => {
  document.addEventListener('DOMContentLoaded', function () {
    function updateMenu() {
      const menuList = document.querySelector('.site-nav__list');
      const moreList = document.querySelector('.more-menu__list');
      const moreBtn = document.querySelector('.more-menu__btn');

      let screenWidth = window.innerWidth;

      moreList.innerHTML = '';

      if (screenWidth >= 1280 && screenWidth < 1440) {
        while (3 <= menuList.children.length) {
          const item = menuList.children[3];
          item.classList.add('more-menu__item');

          const childLink = item.querySelector('a');
          if (childLink) {
            childLink.classList.add('more-menu__link');
          }

          moreList.appendChild(item);
        }
        return;
      }

      if (screenWidth >= 1440 && screenWidth < 1660) {
        while (4 <= menuList.children.length) {
          const item = menuList.children[4];
          item.classList.add('more-menu__item');

          const childLink = item.querySelector('a');
          if (childLink) {
            childLink.classList.add('more-menu__link');
          }

          moreList.appendChild(item);
        }
        return;
      }

      if (screenWidth >= 1660 && screenWidth < 1924) {
        while (5 <= menuList.children.length) {
          const item = menuList.children[5];
          item.classList.add('more-menu__item');

          const childLink = item.querySelector('a');
          if (childLink) {
            childLink.classList.add('more-menu__link');
          }

          moreList.appendChild(item);
        }
        return;
      }
      moreBtn.style.display = 'none';
    }

    updateMenu();
    window.addEventListener('resize', updateMenu);
  });
})();
