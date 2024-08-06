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
      const container = document.querySelector('.burger');
      const menuList = document.querySelector('.site-nav__list');
      const moreButton = document.querySelector('.more-menu__list');

      let screenWidth = window.innerWidth;
      let containerWidth = container.clientWidth;
      let totalWidth = 0;
      let index = 0;
      // console.log('containerWidth', containerWidth = 1280 || );

      // Очистим блок с "More..." перед обновлением
      moreButton.innerHTML = '';
      // moreButton.style.display = 'none';
      console.log('screenWidth', screenWidth);
      if ((screenWidth = 1280)) {
        while (3 <= menuList.children.length) {
          moreButton.appendChild(menuList.children[3]);
        }
      }
      // Найдем индекс первого элемента, который не помещается
      // while (
      //   index < menuList.children.length &&
      //   totalWidth + menuList.children[index].offsetWidth <= containerWidth
      // ) {
      //   console.log(' в menuList.children.length', menuList.children.length);

      //   totalWidth += menuList.children[index].offsetWidth;
      //   index++;
      //   console.log('totalWidth', totalWidth);
      //   console.log('index', index);
      // }

      // // index = index - 1;

      // console.log('posle index', index);
      // console.log('posle totalWidth', totalWidth);
      // console.log('posle menuList.children.length', menuList.children.length);
      // // Перемещаем элементы, которые не помещаются, и один предыдущий элемент в блок "More..."
      // if (index < menuList.children.length) {
      //   moreButton.style.display = 'block'; // Показываем блок с "More..."

      //   // Перемещаем один элемент перед началом группы невидимых элементов и все последующие
      //   if (index < menuList.children.length) {
      //     moreButton.appendChild(menuList.children[index]);
      //   }

      //   // Перемещаем все оставшиеся элементы в блок "More..."
      //   while (index < menuList.children.length) {
      //     moreButton.appendChild(menuList.children[index]);
      //   }
      // }
      // console.log('moreButton', moreButton);
    }

    // Вызовем функцию при загрузке страницы и при изменении размера окна
    updateMenu();
    window.addEventListener('resize', updateMenu);
  });
})();
// (() => {
//   document.addEventListener('DOMContentLoaded', function () {
//     function updateMenu() {
//       const container = document.querySelector('.burger');
//       const menuList = document.querySelector('.site-nav__list');
//       const moreButton = document.querySelector('.more-menu-list');

//       let containerWidth = container.clientWidth;
//       let totalWidth = 0;
//       let index = 0;
//       console.log('containerWidth', containerWidth);

//       // Очистим блок с "More..." перед обновлением
//       moreButton.innerHTML = '';
//       moreButton.style.display = 'none';
//       console.log('do menuList.children.length', menuList.children.length);
//       // Найдем индекс первого элемента, который не помещается
//       while (
//         index < menuList.children.length &&
//         totalWidth + menuList.children[index].offsetWidth <= containerWidth
//       ) {
//         console.log(' в menuList.children.length', menuList.children.length);

//         totalWidth += menuList.children[index].offsetWidth;
//         index++;
//         console.log('totalWidth', totalWidth);
//         console.log('index', index);
//       }

//       // index = index - 1;

//       console.log('posle index', index);
//       console.log('posle totalWidth', totalWidth);
//       console.log('posle menuList.children.length', menuList.children.length);
//       // Перемещаем элементы, которые не помещаются, и один предыдущий элемент в блок "More..."
//       if (index < menuList.children.length) {
//         moreButton.style.display = 'block'; // Показываем блок с "More..."

//         // Перемещаем один элемент перед началом группы невидимых элементов и все последующие
//         if (index < menuList.children.length) {
//           moreButton.appendChild(menuList.children[index]);
//         }

//         // Перемещаем все оставшиеся элементы в блок "More..."
//         while (index < menuList.children.length) {
//           moreButton.appendChild(menuList.children[index]);
//         }
//       }
//       console.log('moreButton', moreButton);
//     }

//     // Вызовем функцию при загрузке страницы и при изменении размера окна
//     updateMenu();
//     window.addEventListener('resize', updateMenu);
//   });
// })();
