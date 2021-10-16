import { route } from '@aurelia/router';

@route({
    routes: [
        {
            path: 'cube-recipes',
            component: import('./cube-recipes/cube-recipes'),
            title: 'D2r Cube Recipes',
        },
        {
            path: 'set-items',
            component: import('./set-items/set-items'),
            title: 'D2r Plus Set Items',
        }
    ]}
)


export class D2rPlus {

}