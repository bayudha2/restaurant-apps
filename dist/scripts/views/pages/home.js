import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  restaurantItemTemplate,
  skeletonRestaurantTemplate,
} from '../template/template-creator';
import NoDataIllu from '../../../images/no-data.svg';

const Home = {
  async render() {
    return `
        <section id="home__items" class="home__items">
          <div class="restaurant__head" tabindex="0">
              <p>List of The</p>
              <h1>RESTAURANT</h1>
          </div>
          <article class="most-picked">
            <h2 class="heading__article">Most Picked</h2>
            <div id="item__most" class="item__most">
              ${skeletonRestaurantTemplate(3)}
            </div>
          </article>
          <article class="popular">
          <h2 class="heading__article">Popular</h2>
            <div id="item__popular" class="item__popular">
              ${skeletonRestaurantTemplate(14)}
            </div>
          </article>
          <article class="others">
          <h2 class="heading__article">Others</h2>
            <div id="item__others" class="item__others">
              ${skeletonRestaurantTemplate(6)}
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
                        <h2 class="about__title" tabindex="0">YummYResto.</h2>
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
      <h1 class="nodata__description">Whoops.. Sorry for bad services.</h1>
      `;
    }

    const getMostPicked = restaurants.filter((x) => x.rating > 4.7);
    const getPopular = restaurants.filter((x) => x.rating >= 4);
    const getOthers = restaurants.filter((x) => x.rating < 4);

    const mostContainer = document.querySelector('#item__most');
    const popularContainer = document.querySelector('#item__popular');
    const othersContainer = document.querySelector('#item__others');

    mostContainer.innerHTML = '';
    popularContainer.innerHTML = '';
    othersContainer.innerHTML = '';

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
};

export default Home;
