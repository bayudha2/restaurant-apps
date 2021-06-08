import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer';
import HeroChanger from '../utils/hero-changer';

class App {
  constructor({ hero, content, drawer, button }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    HeroChanger.changeHero(url);
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
