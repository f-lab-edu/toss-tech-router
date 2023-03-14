import './ui/styles/reset.css';
import App from './App';
import request from './lib/api';
import { initialWorker } from './lib/mocks/browser';

const init = async () => {
  const isWorker = await initialWorker();
  if (isWorker) {
    const initialState = await request({ url: '/api/articles' });
    const $app = document.getElementById('app');
    new App({
      $target: $app,
      initialState,
    });
  }
};

document.addEventListener('DOMContentLoaded', init);
