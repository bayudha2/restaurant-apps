import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { likedRestaurantTemplate } from '../template/template-creator';
import NoDataIllu from '../../../public/images/no-data.svg';

const Favorite = {
  async render() {
    return `
        <section class="liked__restaurant">
            <article class="liked__container" tabindex="0">
                <h1>Restaurant you liked</h1>
                <p>List Restaurant</p>
                <div id="list__likedRestaurant" class="list__likedRestaurant"></div>
            </article>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector(
      '#list__likedRestaurant'
    );

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <div class="no__data">
            <figure>
                <img class="nodata__picture" src="${NoDataIllu}" alt="No Data Illustration"/>
            </figure>
            <h3 class="nodata__description">Whoops.. You didn't liked any restaurant yet.</h3>
        </div>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += likedRestaurantTemplate(restaurant);
    });
  },
};

export default Favorite;
