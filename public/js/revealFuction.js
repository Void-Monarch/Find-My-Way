import { anime, enterE } from './AnimeScript';

const revealEnterOffice = () => {
  const Sections2 = document.querySelector('#flexrow--2');

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    enterE.play();
    console.log('played');

    observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    rootMargin: `0px`,
    threshold: 0.65,
  });

  sectionObserver.observe(Sections2);
};

export { revealEnterOffice };
