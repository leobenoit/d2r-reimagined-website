import { route } from '@aurelia/router';

@route({
    routes: [
        {
            path: 'cube-recipes',
            component: import('./cube-recipes/cube-recipes'),
            title: 'Talonrage Cube Recipes',
        },
        {
            path: 'set-items',
            component: import('./set-items/set-items'),
            title: 'Talonrage Plus Set Items',
        },
        {
            path: 'runes',
            component: import('./runes/runes'),
            title: 'Talonrage Runes',
        },
        {
            path: 'gems',
            component: import('./gems/gems'),
            title: 'Talonrage gems',
        },
        {
            path: 'runewords/armor',
            component: import('./runewords/armor/armor'),
            title: 'Talonrage Runewords - Armor',
        },
        {
            path: 'runewords/helms',
            component: import('./runewords/helms/helms'),
            title: 'Talonrage Runewords - Helms',
        },
        {
            path: 'runewords/shields',
            component: import('./runewords/shields/shields'),
            title: 'Talonrage Runewords - Shields',
        },
        {
            path: 'runewords/weapons',
            component: import('./runewords/weapons/weapons'),
            title: 'Talonrage Runewords - Weapons',
        }
    ]}
)

export class D2rPlus {


}