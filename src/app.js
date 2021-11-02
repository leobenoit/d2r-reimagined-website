import { route } from '@aurelia/router';

@route({
  routes: [
    {
      path: '',
      component: import('./pages/home/home'),
      title: 'Home',
    }
]})

export class App {
  goToTalonrageDocs() {
    window.location.href = 'https://d2r-reimagined.com/talonrage';
  }
}
