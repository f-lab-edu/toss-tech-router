import request from './index';
import { API_URL } from '../utils/constant';

export const apiGetArticleList = async () => {
  try {
    const response = await request({ url: API_URL.ARTICLES });
    return response;
  } catch (error) {
    return { error: error.message };
  }
};

export const apiGetArticleDetail = async (id) => {
  try {
    const response = await request({ url: `${API_URL.ARTICLE_DETAIL}/${id}` });
    return response;
  } catch (error) {
    return { error: error.message };
  }
};
