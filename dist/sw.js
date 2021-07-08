var serviceWorkerOption = {
  "assets": [
    "/b0cf6d289ac9b04ce677aa448b1d523e.svg",
    "/0800c30db185f3acbc733a0b23b83064.svg",
    "/575c14d07c19bd4d625b482659e6cc82.svg",
    "/6e40d2d14aa1e80c5ebf34d689f5cf15.svg",
    "/ffbbcbb45a88148fa1e9545f9720274e.svg",
    "/d7b2fbec1b4f9625f8406596acb4913f.png",
    "/15ddeb7bd3603eed90e40254db9f95f5.svg",
    "/ed92d66e6f95c36310644946127139a7.svg",
    "/413567ac2bfbee279acdcb85b4a52a4f.svg",
    "/0.container.bundle.js",
    "/1.container.bundle.js",
    "/container.bundle.js",
    "/DATA.json",
    "/favicon.png",
    "/index.html",
    "/index.js",
    "/manifest.json",
    "/images/no-data.svg",
    "/images/placeholder.png",
    "/images/pulse_loading.svg",
    "/images/restaurant.jpg",
    "/images/signature.png",
    "/scripts/sw.js",
    "/styles/Favorite.scss",
    "/styles/detailResto.scss",
    "/styles/main.scss",
    "/styles/mostResto.scss",
    "/images/heros/drink_logo.svg",
    "/images/heros/food.svg",
    "/images/heros/food_logo.svg",
    "/images/heros/hero_frame.svg",
    "/images/heros/pin.svg",
    "/images/heros/scroll.svg",
    "/images/heros/soft-drink.svg",
    "/images/heros/spoon_fork.png",
    "/images/heros/spoon_fork.svg",
    "/images/icons/maskable_icon_x128.png",
    "/images/icons/maskable_icon_x192.png",
    "/images/icons/maskable_icon_x384.png",
    "/images/icons/maskable_icon_x48.png",
    "/images/icons/maskable_icon_x512.png",
    "/images/icons/maskable_icon_x72.png",
    "/images/icons/maskable_icon_x96.png",
    "/scripts/data/favoriterestaurant-idb.js",
    "/scripts/data/restaurantdb-source.js",
    "/scripts/globals/api-endpoint.js",
    "/scripts/globals/config.js",
    "/scripts/routes/routes.js",
    "/scripts/routes/url-parser.js",
    "/scripts/views/app.js",
    "/scripts/utils/drawer.js",
    "/scripts/utils/hero-changer.js",
    "/scripts/utils/like-button-presenter.js",
    "/scripts/utils/sw-register.js",
    "/scripts/views/pages/detail.js",
    "/scripts/views/pages/favorite.js",
    "/scripts/views/pages/home.js",
    "/scripts/views/template/template-creator.js"
  ]
};
        
        !function(e){var s={};function r(i){if(s[i])return s[i].exports;var o=s[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=s,r.d=function(e,s,i){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var o in e)r.d(i,o,function(s){return e[s]}.bind(null,o));return i},r.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="",r(r.s=0)}([function(e,s){importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"),workbox?(console.log("Yay! Workbox is loaded 🎉"),workbox.precaching.precacheAndRoute([{url:"/",revision:"1"},{url:"/images/hero/hero-image_4-small.jpg",revision:"1"},{url:"/images/hero/hero-image_4-large.jpg",revision:"1"},{url:"/images/icons/maskable_icon_x48.png",revision:"1"},{url:"/images/icons/maskable_icon_x48.png",revision:"1"},{url:"/images/icons/maskable_icon_x72.png",revision:"1"},{url:"/images/icons/maskable_icon_x96.png",revision:"1"},{url:"/images/icons/maskable_icon_x128.png",revision:"1"},{url:"/images/icons/maskable_icon_x192.png",revision:"1"},{url:"/images/icons/maskable_icon_x384.png",revision:"1"},{url:"/images/icons/maskable_icon_x512.png",revision:"1"},{url:"/images/no-data.svg",revision:"1"},{url:"/images/placeholder.png",revision:"1"},{url:"/images/pulse_loading.svg",revision:"1"},{url:"/images/restaurant.jpg",revision:"1"},{url:"/images/signature.png",revision:"1"},{url:"/images/heros/drink_logo.svg",revision:"1"},{url:"/images/heros/food_logo.svg",revision:"1"},{url:"/images/heros/food.svg",revision:"1"},{url:"/images/heros/hero_frame.svg",revision:"1"},{url:"/images/heros/pin.svg",revision:"1"},{url:"/images/heros/scroll.svg",revision:"1"},{url:"/images/heros/soft-drink.svg",revision:"1"},{url:"/images/heros/spoon_fork.svg",revision:"1"},{url:"/scripts/data/favoriterestaurant-idb.js",revision:"1"},{url:"/scripts/data/restaurantdb-source.js",revision:"1"},{url:"/scripts/globals/api-endpoint.js",revision:"1"},{url:"/scripts/globals/config.js",revision:"1"},{url:"/scripts/routes/routes.js",revision:"1"},{url:"/scripts/routes/url-parser.js",revision:"1"},{url:"/scripts/utils/drawer.js",revision:"1"},{url:"/scripts/utils/hero-changer.js",revision:"1"},{url:"/scripts/utils/like-button-presenter.js",revision:"1"},{url:"/scripts/utils/sw-register.js",revision:"1"},{url:"/scripts/views/pages/detail.js",revision:"1"},{url:"/scripts/views/pages/favorite.js",revision:"1"},{url:"/scripts/views/pages/home.js",revision:"2"},{url:"/scripts/views/template/template-creator.js",revision:"1"},{url:"/scripts/views/app.js",revision:"1"},{url:"/styles/detailResto.scss",revision:"1"},{url:"/styles/Favorite.scss",revision:"1"},{url:"/styles/main.scss",revision:"1"},{url:"/styles/mostResto.scss",revision:"2"},{url:"/index.html",revision:"1"},{url:"/index.js",revision:"1"},{url:"/defaultVendors~main~._node_modules_a.container.bundle.js",revision:"1"},{url:"/defaultVendors~main~._node_modules_l.container.bundle.js",revision:"1"},{url:"/defaultVendors~main~._node_modules_u.container.bundle.js",revision:"1"},{url:"/defaultVendors~main~._node_modules_sockjs-client_dist_sockjs.js~9be258d6.container.bundle.js",revision:"1"},{url:"/container.bundle.js",revision:"1"},{url:"/0.container.bundle.js",revision:"1"},{url:"/1.container.bundle.js",revision:"1"},{url:"/manifest.json",revision:"1"}]),workbox.routing.registerRoute(/^https:\/\/restaurant-api\.dicoding\.dev/,workbox.strategies.networkFirst({cacheName:"api-restaurant"})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,workbox.strategies.staleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,workbox.strategies.cacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxAgeSeconds:31536e3,maxEntries:30})]})),workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,workbox.strategies.cacheFirst({cacheName:"images",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:2592e3})]}))):console.log("Boo! Workbox didn't load 😬")}]);