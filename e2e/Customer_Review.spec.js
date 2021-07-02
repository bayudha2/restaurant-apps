const assert = require('assert');

Feature('Make restaurant review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Giving a restaurant review', async ({ I }) => {
  I.seeElement('.home__items');

  const firstRestaurant = locate('.item__title a').first();
  I.click(firstRestaurant);

  I.seeElement('.personal__review');
  I.see('What do you think about this restaurant ?', '.personal__review h3');

  const Name = 'Yudhz';
  const Review = 'revew 4';

  I.fillField('#name', Name);
  I.fillField('#review', Review);

  I.click('#review__submit');

  const lastReviewName = locate('.reviewer__name').last();
  const lastReview = locate('.reviewer__review').last();

  I.amOnPage('/');

  I.waitForElement(locate('.item__title a').first(), 10);
  I.click(locate('.item__title a').first());

  I.seeElement('#review__card');

  const lastReviewNameText = await I.grabTextFrom(lastReviewName);
  const lastReviewText = await I.grabTextFrom(lastReview);

  assert.strictEqual(lastReviewNameText, Name);
  assert.strictEqual(lastReviewText, Review);
});
