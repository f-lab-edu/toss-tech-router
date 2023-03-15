import { Navbar } from './ui/components';
import initRouter from './lib/router';
import routes from './lib/router/routes';

function App({ $target }) {
  const init = () => {
    new Navbar({ $target }).render();

    const $main = document.createElement('main');
    $target.appendChild($main);

    initRouter({ $target, $element: $main, routes });
  };

  init();
}

export default App;
