importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
);
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/images/heros/drink_logo.svg', revision: '1' },
    { url: '/images/heros/food_logo.svg', revision: '1' },
    { url: '/images/heros/food.svg', revision: '1' },
    { url: '/images/heros/hero_frame.jpeg', revision: '1' },
    { url: '/images/heros/hero_frame.svg', revision: '1' },
    { url: '/images/heros/hero-image_4.jpg', revision: '1' },
    { url: '/images/heros/pin.svg', revision: '1' },
    { url: '/images/heros/scroll.svg', revision: '1' },
    { url: '/images/heros/soft-drink.svg', revision: '1' },
    { url: '/images/heros/spoon_fork.svg', revision: '1' },
    { url: '/styles/detailResto.scss', revision: '1' },
    { url: '/manifest.json', revision: '1' },
  ]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
