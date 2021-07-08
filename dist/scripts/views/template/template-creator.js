import CONFIG from '../../globals/config';
import Pin from '../../../images/heros/pin.svg';
import SpoonFork from '../../../images/heros/spoon_fork.svg';
import Frame from '../../../images/heros/hero_frame.svg';
import FoodLogo from '../../../images/heros/food_logo.svg';
import DrinkLogo from '../../../images/heros/drink_logo.svg';
import Placeholder from '../../../images/placeholder.png';

const restaurantItemTemplate = (restaurant) => `
<div class="card__item">
    <figure class="img-wrapper" tabindex="0">
        <div class="tag">
            ${restaurant.city}
        </div>
        <img  class="lazyload" data-src="${
          CONFIG.BASE_IMAGE_URL + 'medium/' + restaurant.pictureId
        }" alt="gambar restaurant ${restaurant.name}">
    </figure>
    <div class="content__wrapper" tabindex="0">
        <p class="item__rating">Rating: ${restaurant.rating}</p>
        <h3 class="item__title"><a id="resto" class="resto" href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h3>
        <p class="item__desc">${restaurant.description}</p>
    </div>
</div>
`;

const skeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
<div class="card__item">
    <figure class="img-wrapper" tabindex="0">
        <img  src="${Placeholder}" alt="placeholder">
    </figure>
    <div class="content__wrapper" tabindex="0">
        <p class="item__rating">Rating:...</p>
        <h3 class="item__title"><a href="#">...</a></h3>
        <p class="item__desc">...</p>
    </div>
</div>
`;
  }
  return template;
};

const restaurantDetailTemplate = (restaurant) => {
  const category_list = [];
  const categoriesObj = restaurant.categories;

  Object.values(categoriesObj).forEach((item) => {
    category_list.push(item.name);
  });

  const descContainer = restaurant.description;
  const splitter = descContainer.split('.');
  const firstPara = splitter.slice(0, 7);
  const secondPara = splitter.slice(7);
  const JoinedFirstPara = firstPara.join('. ');
  const JoinedSecondPara = secondPara.join('. ');

  return `
    <div class="restaurant__hero">
            <div class="restaurant__header">
                <div class="header__content" tabindex="0">
                    <h1>${restaurant.name}</h1>
                    <p class="detail__rating">Rating : ${restaurant.rating}</p>
                    <p>${JoinedFirstPara}</p>
                    <p>${JoinedSecondPara}</p>
                    <div id="likeButtonContainer"></div>
                    <div class="info__content">
                        <div class="info__address" tabindex="0">
                            <img src="${Pin}" alt="Pin"/>
                            <h2>${
                              restaurant.address + ', ' + restaurant.city
                            }</h2>
                        </div>
                        <div class="info__category" tabindex="0">
                            <img src="${SpoonFork}" alt="SpoonFork"/>
                            <h2>${category_list.join(', ')}</h2>
                        </div>
                    </div>
                </div>
                <div class="hero__banner">
                    <div class="image__banner" tabindex="0">
                        <img class="picture__banner" src="${
                          CONFIG.BASE_IMAGE_URL +
                          'medium/' +
                          restaurant.pictureId
                        }" alt="${restaurant.name}"/>
                        <img class="frame__banner" src="${Frame}" alt="${
    restaurant.name
  }"/>
                    </div>
                </div>
            </div>
    </div>
`;
};

const specialDishTemplate = (dish) => {
  return `
    <div class="dish__card" tabindex="0">
      <figure class="image__dish">
        <img src="${FoodLogo}" alt="food default logo"/>
      </figure>
      <div class="dish__content">
        <h3>${dish}</h3>
      </div>
    </div>
    `;
};

const specialDrinkstemplate = (drinks) => {
  return `
    <div class="drink__card" tabindex="0">
      <figure class="image__drink">
        <img src="${DrinkLogo}" alt="drink default logo"/>
      </figure>
      <div class="drink__content">
        <h3>${drinks}</h3>
      </div>
    </div>
    `;
};

const reviewCardTemplate = (review) => {
  return `
    <div class="card" tabindex="0">
      <h1>''</h1>
      <p class="reviewer__review">${review.review}</p>
      <p class="reviewer__nameDate"><span class="reviewer__name">${review.name}</span>/ ${review.date}</p>
    </div>
  `;
};

const likedRestaurantTemplate = (restaurant) => {
  return `
    <div class="likedRestaurant__item">
      <figure tabindex="0">
        <img class="likedRestaurant_picture" src="${
          CONFIG.BASE_IMAGE_URL + 'medium/' + restaurant.pictureId
        }" alt="${restaurant.name}"/>
      </figure>
      <div class="liked__content" tabindex="0">
        <h2>${restaurant.name}</h2>
        <p class="liked__rating">Rating : ${restaurant.rating}</p>
        <p class="liked__description">${restaurant.description}</p>
      </div>
      <div class="button__seeDetail" tabindex="0">
        <button class="see__detail"><a href="${`/#/detail/${restaurant.id}`}">See Detail</a></button>
      </div>
    </div>
  `;
};

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">Add to favorite</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="unlikeButton" class="like">Remove from favorite</button>
`;

export {
  restaurantItemTemplate,
  skeletonRestaurantTemplate,
  restaurantDetailTemplate,
  specialDishTemplate,
  specialDrinkstemplate,
  reviewCardTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  likedRestaurantTemplate,
};
