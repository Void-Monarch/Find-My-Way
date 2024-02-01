/* eslint-disable */
'use strict';

import anime, { easings } from 'animejs';
import validator from 'validator';

// Elements
const slides = document.querySelectorAll('.slide');

// ANIMATIONS

anime({
  targets: '#hr--hero-below',
  width: '50%',
  delay: 200,
  duration: 2000,
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
    duration: 2500,
    delay: 200,
  },
});

const allEnter = document.querySelectorAll('.enter--all');

// Foe the Enter Office SVG
const enterE = anime({
  targets: allEnter,

  translateY: {
    value: function (e, i, t) {
      return [`-${100 * i}%`, `-=10%`];
    },
    delay: function (e, i) {
      return 150 * i;
    },
    duration: 1300,
  },

  opacity: {
    value: function (e, i, t) {
      return [0, 1];
    },

    delay: function (e, i) {
      return 150 * i;
    },

    duration: function (e, i) {
      return 1300;
    },

    easings: 'cubicBezier(.5, .05, .1, .3)',
  },
  autoplay: false,
});

const enterE_text = anime({
  targets: '.enter__text',
  translateX: {
    value: ['-20%', 0],
    duration: 1000,
    easing: 'cubicBezier(.5, .05, .1, .3)',
  },
  opacity: {
    value: [0, 1],
    duration: 2000,
  },
  autoplay: false,
});

const img_career = anime({
  targets: '.img__career ',
  translateX: {
    value: ['-20%', 0],
    duration: 1200,
    easing: 'cubicBezier(.5, .05, .1, .3)',
  },
  opacity: {
    value: [0, 1],
    duration: 2000,
  },
  autoplay: false,
});

const interact_img = anime({
  targets: '#interact--img',
  translateY: {
    value: ['15%', 0],
    duration: 1000,
    easing: 'cubicBezier(.5, .05, .1, .3)',
  },
  opacity: {
    value: [0, 1],
    duration: 2000,
  },
  autoplay: false,
});

anime({
  targets: '#interact-tab-1',
  translateY: ['-100%', '-100%'],
});
const interact_pulse = anime({
  targets: '#interact-tab-1',
  scale: {
    value: [1, 1.05],
    duration: 1000,
  },
  direction: 'alternate',
  loop: true,
  easing: 'linear',
});

// Sidebar Animation

const sideBaritem = anime({
  targets: '.side-menu-item',
  translateX: {
    value: ['-15%', '0%'],
    delay: anime.stagger(80, { start: 100 }),
  },
  opacity: [0, 1],
  duration: 1200,
  autoplay: false,
});


export {
  anime,
  enterE,
  enterE_text,
  img_career,
  interact_img,
  interact_pulse,
  sideBaritem,

};
