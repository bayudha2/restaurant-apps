import RestaurantDbSource from '../../data/restaurantdb-source';
import { restaurantItemTemplate } from '../template/template-creator';
import PulseLoading from '../../../public/images/pulse_loading.svg';
import NoDataIllu from '../../../public/images/no-data.svg';

const Home = {
  async render() {
    return `
        <section id="home__items" class="home__items">
          <div class="restaurant__head" tabindex="0">
              <p>List of The</p>
              <h1>RESTAURANT</h1>
          </div>
          <article class="most-picked">
            Most Picked
            <div id="item__most" class="item__most"></div>
            <div class="loading__image">
              <img class="loading__loader" src="${PulseLoading}" alt="preloader"/>
            </div>
          </article>
          <article class="popular">
            Popular
            <div id="item__popular" class="item__popular"></div>
            <div class="loading__image">
              <img class="loading__loader" src="${PulseLoading}" alt="preloader"/>
            </div>
          </article>
          <article class="others">
            Others
            <div id="item__others" class="item__others"></div>
            <div class="loading__image">
              <img class="loading__loader" src="${PulseLoading}" alt="preloader"/>
            </div>
          </article>
        </section>
        <section>
            <div class="about__us">
                <figure class="about__img" tabindex="0">
                    <img src="images/restaurant.jpg" alt="gambar restaurant">
                </figure>
                <div class="about__content">
                    <div class="container" >
                        <p class="about_us" tabindex="0">About Us</p>
                        <h1 class="about__title" tabindex="0">YummYResto.</h1>
                        <p class="about__desc" tabindex="0">YummyResto is a website to find various extraordinary restaurants. This website has been established since 1990 and is used by various restaurants to promote their restaurant in the hope that in the future it will be known by everyone. Restaurants listed on most large websites have stars above 4, so they are guaranteed to be satisfying.<br><br>We will always provide the latest information based on trends, feedback, news about delicious food at existing restaurants. I hope that with this, customers will not feel confused about finding a good restaurant.</p>
                        <img src="images/signature.png" tabindex="0" alt="tanda tangan">
                    </div>
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurant();
    if (restaurants === 'failed') {
      const homeContainer = document.querySelector('#home__items');
      homeContainer.innerHTML = `
      <figure class="nodata__figure">
          <img class="nodata__picture" src="${NoDataIllu}" alt="No Data Illustration"/>
      </figure>
      <h3 class="nodata__description">Whoops.. Sorry for bad services.</h3>
      `;
    }

    await this._changeHome();

    const getMostPicked = restaurants.filter((x) => x.rating > 4.7);
    const getPopular = restaurants.filter((x) => x.rating >= 4);
    const getOthers = restaurants.filter((x) => x.rating < 4);

    const mostContainer = document.querySelector('#item__most');
    const popularContainer = document.querySelector('#item__popular');
    const othersContainer = document.querySelector('#item__others');

    getMostPicked.forEach((restaurant) => {
      mostContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
    getPopular.forEach((restaurant) => {
      popularContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
    getOthers.forEach((restaurant) => {
      othersContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },

  _changeHome() {
    const loadingContainer = document.querySelectorAll('.loading__image');
    loadingContainer.forEach((container) => {
      container.innerHTML = '';
    });
  },
};

export default Home;
