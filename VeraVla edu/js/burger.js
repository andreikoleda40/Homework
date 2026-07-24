// burger.js
export function initBurgerMenu() {
  const burgerButton = document.getElementById('burgerButton');
  const burgerMenu = document.getElementById('burgerMenu');

  if (!burgerButton || !burgerMenu) return;

  const openMenu = () => {
    burgerMenu.classList.add('header__menu--open');
    burgerButton.classList.add('burger--open');
    burgerButton.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    burgerMenu.classList.remove('header__menu--open');
    burgerButton.classList.remove('burger--open');
    burgerButton.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    burgerMenu.classList.contains('header__menu--open')
      ? closeMenu()
      : openMenu();
  };

  // клик по кнопке
  burgerButton.addEventListener('click', toggleMenu);

  // клик вне меню
  document.addEventListener('click', (e) => {
    if (
      burgerMenu.classList.contains('header__menu--open') &&
      !burgerMenu.contains(e.target) &&
      !burgerButton.contains(e.target)
    ) {
      closeMenu();
    }
  });
}