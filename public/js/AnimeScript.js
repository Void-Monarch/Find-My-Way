/* eslint-disable */

import anime from 'animejs';

const el = document.querySelectorAll('.slide');
console.log(el);

anime({
  targets: el,
  translateX: 500,
});

export { anime };
