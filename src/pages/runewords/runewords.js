import json from '../item-jsons/runewords.json';
import {bindable} from 'aurelia';

export class Runewords {
    runewords = json;
    @bindable search;

    searchChanged() {
        if (!this.search) {
            this.runewords = json;
            return;
        }
        this.updateList();
    }

    updateList() {
        let found = [];
        for (let runeword of json) {
            if (runeword.Name.toLowerCase().includes(this.search.toLowerCase())) {
                found.push(runeword);
                continue;
            }
            for (let property of runeword.Properties) {
                if (property.PropertyString.toLowerCase().includes(this.search.toLowerCase())) {
                    found.push(runeword);
                    break;
                }
            }
            for (let type of runeword.Types) {
                if (type.Name.toLowerCase().includes(this.search.toLowerCase())) {
                    found.push(runeword);
                    break;
                }
            }
        }
        this.runewords = found;
    }

    removeRuneFromName(runeName) {
        return runeName.replace(' Rune', '');
    }
}