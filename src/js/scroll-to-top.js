const scrollUp = document.querySelector('.scroll_up');

scrollUp.addEventListener('click', onScrollUp);

function onScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
