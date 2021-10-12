import { route } from '@aurelia/router';

@route({
  routes: [
    {
      path: '',
      component: import('./pages/home/home'),
      title: 'Home',
    },
    {
      path: 'd2rplus',
      component: import('./pages/d2rplus/d2rplus'),
      title: 'D2r Plus',
    }
]})

export class App {

}
