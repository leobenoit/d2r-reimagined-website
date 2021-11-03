import json from '../item-jsons/sets.json';
import {bindable} from 'aurelia';

export class Sets {
    sets = json;
    @bindable search;

    searchChanged() {
        if (!this.search) {
            this.sets = json;
            return;
        }
        this.updateList();
    }

    updateList() {
        let foundSets = [];
        for (let set of json) {
            if (set.Name.toLowerCase().includes(this.search.toLowerCase())) {
                foundSets.push(set);
                continue;
            }
            for (let property of set.Properties) {
                if (property.PropertyString.toLowerCase().includes(this.search.toLowerCase())) {
                    foundSets.push(set);
                    break;
                }
            }
        }
        this.uniques = foundSets;
    }

    getDamageTypeString(type) {
        switch (type) {
            case 3:
                return 'Damage: ';
            case 2:
                return 'Throw Damage: ';
            case 1:
                return 'Two-Handed Damage: '
            default:
                return 'Damage: ';
        }
    }
}