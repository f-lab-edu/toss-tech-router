import { ArticlePage, MainPage } from '../../ui/pages';

const routes = [
  { path: '/', component: MainPage },
  { path: '/article/:id', component: ArticlePage },
];

export default routes;
