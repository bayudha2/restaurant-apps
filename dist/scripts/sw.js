importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
);
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/images/hero/hero-image_4-small.jpg', revision: '1' },
    { url: '/images/hero/hero-image_4-large.jpg', revision: '1' },
    { url: '/images/icons/maskable_icon_x48.png', revision: '1' },
    { url: '/images/icons/maskable_icon_x48.png', revision: '1' },
    { url: '/images/icons/maskable_icon_x72.png', revision: '1' },
    { url: '/images/icons/maskable_icon_x96.png', revision: '1' },
    { url: '/images/icons/maskable_icon_x128.png', revision: '1' },
    { url: '/images/icons/maskable_icon_x192.png', revision: '1' },
    { url: '/images/icons/maskable_icon_x384.png', revision: '1' },
    { url: '/images/icons/maskable_icon_x512.png', revision: '1' },
    { url: '/images/no-data.svg', revision: '1' },
    { url: '/images/placeholder.png', revision: '1' },
    { url: '/images/pulse_loading.svg', revision: '1' },
    { url: '/images/restaurant.jpg', revision: '1' },
    { url: '/images/signature.png', revision: '1' },
    { url: '/images/heros/drink_logo.svg', revision: '1' },
    { url: '/images/heros/food_logo.svg', revision: '1' },
    { url: '/images/heros/food.svg', revision: '1' },
    { url: '/images/heros/hero_frame.svg', revision: '1' },
    { url: '/images/heros/pin.svg', revision: '1' },
    { url: '/images/heros/scroll.svg', revision: '1' },
    { url: '/images/heros/soft-drink.svg', revision: '1' },
    { url: '/images/heros/spoon_fork.svg', revision: '1' },
    { url: '/scripts/data/favoriterestaurant-idb.js', revision: '1' },
    { url: '/scripts/data/restaurantdb-source.js', revision: '1' },
    { url: '/scripts/globals/api-endpoint.js', revision: '1' },
    { url: '/scripts/globals/config.js', revision: '1' },
    { url: '/scripts/routes/routes.js', revision: '1' },
    { url: '/scripts/routes/url-parser.js', revision: '1' },
    { url: '/scripts/utils/drawer.js', revision: '1' },
    { url: '/scripts/utils/hero-changer.js', revision: '1' },
    { url: '/scripts/utils/like-button-presenter.js', revision: '1' },
    { url: '/scripts/utils/sw-register.js', revision: '1' },
    { url: '/scripts/views/pages/detail.js', revision: '1' },
    { url: '/scripts/views/pages/favorite.js', revision: '1' },
    { url: '/scripts/views/pages/home.js', revision: '2' },
    { url: '/scripts/views/template/template-creator.js', revision: '1' },
    { url: '/scripts/views/app.js', revision: '1' },
    { url: '/styles/detailResto.scss', revision: '1' },
    { url: '/styles/Favorite.scss', revision: '1' },
    { url: '/styles/main.scss', revision: '1' },
    { url: '/styles/mostResto.scss', revision: '2' },
    { url: '/index.html', revision: '1' },
    { url: '/index.js', revision: '1' },
    {
      url: '/defaultVendors~main~._node_modules_a.container.bundle.js',
      revision: '1',
    },
    {
      url: '/defaultVendors~main~._node_modules_l.container.bundle.js',
      revision: '1',
    },
    {
      url: '/defaultVendors~main~._node_modules_u.container.bundle.js',
      revision: '1',
    },
    {
      url: '/defaultVendors~main~._node_modules_sockjs-client_dist_sockjs.js~9be258d6.container.bundle.js',
      revision: '1',
    },
    { url: '/container.bundle.js', revision: '1' },
    { url: '/0.container.bundle.js', revision: '1' },
    { url: '/1.container.bundle.js', revision: '1' },
    { url: '/manifest.json', revision: '1' },
  ]);

  workbox.routing.registerRoute(
    /^https:\/\/restaurant-api\.dicoding\.dev/,
    workbox.strategies.networkFirst({
      cacheName: 'api-restaurant',
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
        }),
      ],
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
