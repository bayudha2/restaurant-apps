const HeroChanger = {
  changeHero(urlData) {
    const heroTitleContainer = document.querySelector('.hero__title');
    const heroTagContainer = document.querySelector('.hero__tagline');
    const buttonContainer = document.querySelector('.button');

    if (urlData === '/' || urlData === '/home') {
      heroTitleContainer.innerHTML = `Looking for great food ?`;
      heroTagContainer.innerHTML = `Here in YummYResto, we provide any kind of restaurant that you want.</br>
        Many kind of dishes from many popular restaurant are in here.`;
      buttonContainer.innerHTML = `EXPLORE`;
    }
    if (urlData === '/detail/:id' || urlData === '/favorite') {
      heroTitleContainer.innerHTML = `Looking for more ?`;
      heroTagContainer.innerHTML = ``;
      buttonContainer.innerHTML = `Back to Home`;
    }
  },
};

export default HeroChanger;
