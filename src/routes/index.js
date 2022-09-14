import {
  AnimesPage,
  AnimeDetailsPage,
  AboutPage,
  NotFoundPage,
} from '../pages';

const routes = [
  { path: '/animes', component: AnimesPage },
  { path: '/animes/:id', component: AnimeDetailsPage },
  { path: '/about', component: AboutPage },
  { path: '*', component: NotFoundPage },
];

export default routes;
