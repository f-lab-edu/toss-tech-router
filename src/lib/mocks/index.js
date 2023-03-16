import { setupWorker } from 'msw';
import { mockGetArticleDetail, mockGetArticleList } from './api';

export const initialWorker = async () => {
  try {
    if (typeof window !== 'undefined') {
      const mockApiHandler = [mockGetArticleList, mockGetArticleDetail].map((handler) => handler());
      const worker = setupWorker(...mockApiHandler);
      await worker.start();
      return true;
    }
    return false;
  } catch (e) {
    console.error(`initMocks Error: ${e}`);
    return false;
  }
};
