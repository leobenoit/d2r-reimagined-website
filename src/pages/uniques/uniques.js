import json from '../item-jsons/uniques.json';
import {bindable} from 'aurelia';

export class Uniques {
    uniques = json;
    @bindable search;

    searchChanged() {
        if (!this.search) {
            this.uniques = json;
            return;
        }
        this.updateList();
    }

    updateList() {
        let foundUniques = [];
        for (let unique of json) {
            if (unique.Name.toLowerCase().includes(this.search.toLowerCase())) {
                foundUniques.push(unique);
                continue;
            }
            for (let property of unique.Properties) {
                if (property.PropertyString.toLowerCase().includes(this.search.toLowerCase())) {
                    foundUniques.push(unique);
                    break;
                }
            }
        }
        this.uniques = foundUniques;
    }
}