/* eslint-disable no-underscore-dangle */
import LikeButtonInitiator from '../../utils/like-button';
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import HorizonScroll from '../../../public/images/heros/scroll.svg';
import PulseLoading from '../../../public/images/pulse_loading.svg';
import NoDataIllu from '../../../public/images/no-data.svg';
import {
  restaurantDetailTemplate,
  specialDishTemplate,
  specialDrinkstemplate,
  reviewCardTemplate,
} from '../template/template-creator';

const Detail = {
  async render() {
    return `
    <section id="detail__items">
        <article id="restaurant" class="restaurant"></article>  
        <div class="loading__image">
              <img class="loading__loader" src="${PulseLoading}" alt="preloader"/>
            </div>
        <article class="specialDish">
            <div class="specialDish__title">
                <div class="specialDish__head" tabindex="0">
                    <h1>Our Special Dish</h1>
                    <p>Made with premium ingridients.</p>
                </div>
                <div id="dish__list" class="dish__list"></div>
                <div class="loading__image">
                  <img class="loading__loader" src="${PulseLoading}" alt="preloader"/>
                </div>
                <div class="horizontal__scroll">
                    <img src="${HorizonScroll}" alt="Horizontal scroll"/>
                </div>
            </div>      
        </article>
        <article class="specialDrink">
            <div class="specialDrink__title">
                <div class="specialDrink__head" tabindex="0">
                    <h1>Our Special Drinks</h1>
                    <p>Made with premium ingridients.</p>
                </div>
                <div id="drink__list" class="drink__list"></div>
                <div class="loading__image">
                  <img class="loading__loader" src="${PulseLoading}" alt="preloader"/>
                </div>
                <div class="horizontal__scroll">
                    <img src="${HorizonScroll}" alt="Horizontal scroll"/>
                </div>
            </div>      
        </article>
        <article class="customer__riview">
            <div class="container" tabindex="0">
                <h1>Customer say about us</h1>
                <div id="review__card" class="review__card"></div>
                <div class="personal__review" tabindex="0">
                    <h2>What do you think about this restaurant ?</h2>
                    <div class="review__container">
                        <form id="review__form" class="review__form" tabindex="0">
                            <input placeholder="Name" type="text" id="name" name="name">
                            <input placeholder="Well, I think..." type="text" id="review" name="review">
                        </form>
                        <button id="review__submit">Submit</button>
                    </div>
                </div>
            </div>
        </article>
    </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);

    if (restaurant === 'failed') {
      const detailContainer = document.querySelector('#detail__items');
      detailContainer.innerHTML = `
      <figure class="nodata__figure" tabindex="0">
          <img class="nodata__picture" src="${NoDataIllu}" alt="No Data Illustration"/>
      </figure>
      <h3 class="nodata__description">Whoops.. Sorry for bad services.</h3>
      `;
    }
    await this._changeDetail();

    const dishes = this._dishChanger(restaurant.menus);
    const drinks = this._drinkChanger(restaurant.menus);
    const reviews = restaurant.customerReviews;

    const restaurantContainer = document.querySelector('#restaurant');
    const specialDishContainer = document.querySelector('#dish__list');
    const drinkContainer = document.querySelector('#drink__list');
    const reviewCardContainer = document.querySelector('#review__card');
    const submitButton = document.querySelector('#review__submit');
    submitButton.addEventListener('click', customerReviewSubmit);

    restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);
    dishes.forEach((dish) => {
      specialDishContainer.innerHTML += specialDishTemplate(dish);
    });
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += specialDrinkstemplate(drink);
    });
    reviews.forEach((review) => {
      reviewCardContainer.innerHTML += reviewCardTemplate(review);
    });

    function customerReviewSubmit() {
      const nama = document.querySelector('#name').value;
      const text = document.querySelector('#review').value;

      if (nama === '' || text === '') {
        alert('Please complete the review');
      } else {
        const idRestaurant = restaurant.id;
        const reviewerName = nama;
        const reviwerText = text;

        const data = {
          id: idRestaurant,
          name: reviewerName,
          review: reviwerText,
        };
        return RestaurantDbSource.uploadReview(data);
      }
    }

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
      },
    });
  },

  _dishChanger(dish) {
    const foods = [];
    Object.values(dish.foods).forEach((item) => {
      foods.push(item.name);
    });
    return foods;
  },

  _drinkChanger(water) {
    const drinks = [];
    Object.values(water.drinks).forEach((item) => {
      drinks.push(item.name);
    });
    return drinks;
  },

  _changeDetail() {
    const loadingContainer = document.querySelectorAll('.loading__image');
    loadingContainer.forEach((container) => {
      container.innerHTML = '';
    });
  },
};

export default Detail;
