import request, { handleErrorResponse } from './index';
import { API_URL } from '../utils/constant';

export const apiGetArticleList = async () => {
  try {
    const response = await request.get(API_URL.ARTICLES);
    return response.data;
  } catch (error) {
    handleErrorResponse(error);
    throw error;
  }
};

export const apiGetArticleDetail = async (id) => {
  try {
    const response = await request.get(`${API_URL.ARTICLE_DETAIL}/${id}`);
    return response.data;
  } catch (error) {
    handleErrorResponse(error);
    throw error;
  }
};
