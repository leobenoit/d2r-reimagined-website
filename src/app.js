import { route } from '@aurelia/router';

@route({
  routes: [
    {
      path: ['', 'home'],
      component: import('./pages/home/home'),
      title: 'Home',
    }
]})

export class App {

}
