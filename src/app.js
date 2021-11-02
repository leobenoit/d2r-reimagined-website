import { route } from '@aurelia/router';

@route({
  routes: [
    {
      path: '',
      component: import('./pages/home/home'),
      title: 'Home',
    },
    {
      path: 'cube-recipes',
      component: import('./pages/cube-recipes/cube-recipes'),
      title: 'Cube Recipes',
    },
    {
      path: 'uniques',
      component: import('./pages/uniques/uniques'),
      title: 'Uniques',
    }
]})

export class App {
  goToTalonrageDocs() {
    window.location.href = 'https://d2r-reimagined.com/talonrage';
  }
}
