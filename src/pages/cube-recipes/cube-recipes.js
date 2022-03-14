import json from '../item-jsons/cube_recipes.json';
import {bindable} from 'aurelia';

export class CubeRecipes {
    recipes = [...json];
    @bindable search;


    searchChanged() {
        console.log(this.search);
        if (!this.search) {
            this.recipes = json;
            return;
        }
        let found = [];
        for (let recipe of json) {
            if (recipe.CubeRecipeDescription.toLowerCase().includes(this.search.toLowerCase())) {
                found.push(recipe);
                break;
            }

            if (recipe.Output.toLowerCase().includes(this.search.toLowerCase())) {
                found.push(recipe);
                break;
            }

            if (recipe.Description.toLowerCase().includes(this.search.toLowerCase())) {
                found.push(recipe);
                break;
            }
        }
        this.recipes = found;
    }
}