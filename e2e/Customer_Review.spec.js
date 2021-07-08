const assert = require('assert');

Feature('Make restaurant review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Giving a restaurant review', async ({ I }) => {
  I.seeElement('.home__items');

  I.seeElement('.resto');

  await I.click(locate('.resto').first());

  I.seeElement('.personal__review');
  I.see('What do you think about this restaurant ?', '.personal__review h3');

  const Name = 'husnul';
  const Review = 'revew 6';

  I.fillField('#name', Name);
  I.fillField('#review', Review);

  I.click('#review__submit');

  I.wait(5);

  const lastReviewName = locate('.reviewer__name').last();
  const lastReview = locate('.reviewer__review').last();

  I.amOnPage('/');

  I.wait(5);

  await I.click(locate('.resto').first());

  I.seeElement('#review__card');

  const lastReviewNameText = await I.grabTextFrom(lastReviewName);
  const lastReviewText = await I.grabTextFrom(lastReview);

  assert.strictEqual(lastReviewNameText, Name);
  assert.strictEqual(lastReviewText, Review);
});
