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
