const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.no__data');
  I.see(
    "Whoops.. You didn't liked any restaurant yet.",
    '.nodata__description'
  );
});

Scenario('liking and Unliking one restaurant', async ({ I }) => {
  I.see(
    "Whoops.. You didn't liked any restaurant yet.",
    '.nodata__description'
  );

  I.amOnPage('/');

  I.seeElement('.item__title a');

  const firstRestaurant = locate('.item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.likedRestaurant__item');

  const likedRestaurantTitle = await I.grabTextFrom('.liked__content h2');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.see__detail');
  I.click('.see__detail a');
  I.click('.see__detail a');

  I.seeElement('#unlikeButton');
  I.click('#unlikeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.no__data');
  I.see(
    "Whoops.. You didn't liked any restaurant yet.",
    '.nodata__description'
  );
});
