import './ui/styles/reset.css';
import App from './App';
import { initialWorker } from './lib/mocks';

const init = async () => {
  const isWorker = await initialWorker();
  if (isWorker) {
    const $app = document.getElementById('app');
    new App({
      $target: $app,
    });
  }
};

document.addEventListener('DOMContentLoaded', init);
