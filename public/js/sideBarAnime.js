import { anime, sideBaritem } from './AnimeScript';

let items = document.querySelectorAll('.side-menu-item');

const sideItemIn = (() => {
  const hamburgerIN = document.querySelector('#sideMenuBtn');
  const hamburgerOUT = document.querySelector('#sideMenuBtnCls');
  // Event Listener
  hamburgerIN.addEventListener('click', () => {
    sideBaritem.play();
  });
  hamburgerOUT.addEventListener('click', () => {
    sideBaritem.reset();
    items.forEach((e) => {
      e.classList.remove('side-menu-item-2');
    });
  });
})();

const itemSwell = (() => {
  items.forEach((e) => {
    e.addEventListener('mouseover', (el) => {
      e.classList.add('expandNow');
      e.classList.add('side-menu-item-2');
    });
    e.addEventListener('mouseleave', (el) => {
      e.classList.remove('expandNow');
    });
  });
  document.querySelector('#body').addEventListener('click', () => {
    items.forEach((e) => {
      e.classList.remove('side-menu-item-2');
    });
  });
})();

export { sideItemIn, itemSwell };
