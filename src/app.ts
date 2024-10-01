import { route } from '@aurelia/router-lite';

@route({
    title: 'D2R Reimagined',
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
        },
        {
            path: 'sets',
            component: import('./pages/sets/sets'),
            title: 'Sets',
        },
        {
            path: 'runewords',
            component: import('./pages/runewords/runewords'),
            title: 'Runewords',
        }
    ]
})

export class App {
}
