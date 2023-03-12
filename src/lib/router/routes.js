import { ArticlePage, MainPage, NotFoundPage } from '../../ui/pages';

const routes = [
  { path: '/', component: MainPage },
  { path: '/article/:id', component: ArticlePage },
  { path: '/article/:id/:title', component: ArticlePage },
  { path: '/404', component: NotFoundPage },
];

export default routes;
