/* eslint-disable */
'use strict';

const stickNav = () => {
  const nav = document.querySelector('#navBar');
  const navcontainer = document.querySelector('.navbar-header');
  const header = document.querySelector('.section-hero');
  const navHeight = nav.getBoundingClientRect().height;

  const stickyNavf = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      navcontainer.classList.add('sticky');
      navcontainer.classList.add('cusNav');
      nav.classList.add('bg-slate-100');
      nav.classList.remove('bg-transparent');
    } else {
      nav.classList.remove('bg-slate-100');
      navcontainer.classList.remove('sticky');
      navcontainer.classList.remove('cusNav');
      nav.classList.add('bg-transparent');
    }
  };

  const headerObserver = new IntersectionObserver(stickyNavf, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(header);
};

export { stickNav };
