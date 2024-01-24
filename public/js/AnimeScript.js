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

export { anime };
