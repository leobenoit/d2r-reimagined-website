import { bindable } from 'aurelia';

import json from '../item-jsons/cube_recipes.json';

import './cube-recipes.scss';

export class CubeRecipes {
    recipes = [...json];
    @bindable search;


    searchChanged() {
        // console.log(this.search);
        if (!this.search) {
            this.recipes = json;
            return;
        }
        const found = [];
        for (const recipe of json) {
            if (
                recipe.CubeRecipeDescription.toLowerCase().includes(this.search.toLowerCase())
                ||
                recipe.Output.toLowerCase().includes(this.search.toLowerCase())
                ||
                recipe.Description.toLowerCase().includes(this.search.toLowerCase())
            ) {
                found.push(recipe);
            }
        }
        this.recipes = found;

    }
}
