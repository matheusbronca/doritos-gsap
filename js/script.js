const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const $overlays = $$('.overlay');
const tl = gsap.timeline();
const tl2 = new gsap.timeline({
  onStart: () => tl3.play(),
});
const tl3 = new gsap.timeline();
const $logo = $('.logo img');

tl.add([tl2]);

// Intro transition Animation:
tl.staggerTo(
  $overlays,
  1.5,
  {
    top: '-100%',
    ease: Expo.easeInOut,
  },
  0.25
);

// Header Animations:
tl.from(
  ['.logo img', 'nav ul li a', '.basket'],
  1.5,
  {
    y: '-130',
    ease: Expo.easeInOut,
    stagger: 0.1,
  },
  '-=1.5'
);
// Product Description Animation:

tl2.from(
  '.hide',
  1.5,
  {
    y: '180',
    ease: Expo.easeInOut,
    stagger: 0.2,
  },
  '+=1'
);

// Product display animations
tl3
  .from(
    '.doritos',
    1.5,
    {
      y: '-150%',
      ease: Expo.easeInOut,
    },
    '+=.8'
  )

  .from('.chips', 1.5, {
    x: '200%',
    ease: Expo.easeInOut,
  } ,'-=1')

  .from('.ketchup', 1.5, {
      y: '200%',
      ease: Expo.easeInOut
  }, '-=1.2')

    .from('.chilli', 1.5, {
      y: '200%',
      ease: Expo.easeInOut
  }, '-=1.4')

    .from('.backdrop', 1.5, {
        y: '200%',
        ease: Expo.easeInOut
    }, '-=2.5')

// tl.to($overlay1, 1.5, {
//     top: '-100%',
//     ease: Expo.easeInOut
// })
// .to($overlay2, 1.5, {
//     top: '-100%',
//     ease: Expo.easeInOut
// })

tl.play();
