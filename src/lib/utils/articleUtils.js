import { ARTICLE_DETAILS, ARTICLES } from './constant';

export const getArticleList = () => ARTICLES;

export const getArticleDetailById = (id) => ARTICLE_DETAILS.find((article) => article.id === id);
