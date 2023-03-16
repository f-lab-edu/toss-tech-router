import { mockServer } from './config';
import { API_MOCK } from '../utils/constant';
import { getArticleDetailById, getArticleList } from '../utils/articleUtils';

export const mockGetArticleList = () =>
  mockServer({
    method: 'GET',
    path: API_MOCK.ARTICLES,
    statusCode: 200,
    responseCallback: getArticleList,
  });

export const mockGetArticleDetail = () => {
  const responseCallback = (params) => {
    const id = parseInt(params.id, 10);
    return getArticleDetailById(id);
  };

  return mockServer({
    method: 'GET',
    path: API_MOCK.ARTICLE_DETAIL,
    statusCode: 200,
    responseCallback,
  });
};
