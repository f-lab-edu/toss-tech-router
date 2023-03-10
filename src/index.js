import './ui/styles/reset.css';
import App from './App';
import request from './lib/api';
import { initialWorker } from './lib/mocks/browser';

const init = async () => {
  try {
    const isWorker = await initialWorker();
    if (isWorker) {
      const response = await request({ url: '/api/articles' });
      console.log(response);
      new App();
      return;
    }
    throw new Error('worker Error');
  } catch (e) {
    console.error(`init Error: ${JSON.stringify(e)}`);
  }
};

window.onload = init;
