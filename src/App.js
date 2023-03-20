import initRouter from './lib/router';
import routes from './lib/router/routes';
import './ui/components';
import './ui/pages';

function App({ $target }) {
  const init = () => {
    $target.innerHTML = '<header-navbar></header-navbar>';

    const $main = document.createElement('main');
    $main.innerHTML = `
      <main-page></main-page>
    `;
    $target.appendChild($main);

    initRouter({ $target, $element: $main, routes });
  };

  init();
}

export default App;
