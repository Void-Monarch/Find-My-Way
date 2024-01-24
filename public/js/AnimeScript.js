/* eslint-disable */
'use strict';

import anime from 'animejs';

// Elements
const slides = document.querySelectorAll('.slide');

// ANIMATIONS
anime({
  targets: '#hr--hero-below',
  width: '50%',
  delay: 200,
  duration: 1200,
});

anime({
  targets: '.slider',
  height: '135px',

  duration: 2000,
});

anime({
  targets: '#hero-img',

  opacity: {
    value: [0, 1],
    duration: 3000,
    delay: 200,
  },
  translateY: {
    value: ['20%', 0],
    duration: 2000,
    delay: 200,
  },
});

export { anime };
