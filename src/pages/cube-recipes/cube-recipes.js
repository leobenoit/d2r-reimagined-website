import json from '../item-jsons/cube-recipes.json';
import {bindable} from 'aurelia';

export class CubeRecipes {
    recipes = json;
    @bindable search;

    searchChanged() {
        this.recipes = json.filter(x => x.CubeRecipeDescription.toLowerCase().includes(this.search));
    }
}