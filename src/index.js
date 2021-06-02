import 'regenerator-runtime'; /* for async await transpile */
import '../src/styles/main.scss';
import App from './scripts/views/app';
import swRegister from './scripts/utils/sw-register';

const app = new App({
  content: document.querySelector('#maincontent'),
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  hero: document.querySelector('.hero'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
