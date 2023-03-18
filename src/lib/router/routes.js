import { mainPageTagName } from '../../ui/pages/MainPage';
import { articlePageTageName } from '../../ui/pages/ArticlePage';
import { notFoundPageTagName } from '../../ui/pages/NotFoundPage';

const routes = [
  { path: '/', tagName: mainPageTagName },
  { path: '/article/:articleId', tagName: articlePageTageName },
  { path: '/404', tagName: notFoundPageTagName },
];

export default routes;
