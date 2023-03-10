import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

export const initialWorker = async () => {
  try {
    if (typeof window !== 'undefined') {
      await worker.start();
      return true;
    }
    return false;
  } catch (e) {
    console.error(`initMocks Error: ${e}`);
    return false;
  }
};
