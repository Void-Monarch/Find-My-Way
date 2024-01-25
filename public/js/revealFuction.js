import { anime, enterE, enterE_text, img_career } from './AnimeScript';

const revealEnterOffice = () => {
  const Sections2 = document.querySelector('#flexrow--2');

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    enterE.play();
    enterE_text.play();

    observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    rootMargin: `0px`,
    threshold: 0.65,
  });

  sectionObserver.observe(Sections2);
};

const reveal_img_career = () => {
  const career_img = document.querySelector('.img__career');

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    img_career.play();

    observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    rootMargin: `0px`,
    threshold: 0.5,
  });

  sectionObserver.observe(career_img);
};

export { revealEnterOffice, reveal_img_career };
