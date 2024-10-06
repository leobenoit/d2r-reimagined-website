import { bindable, watch } from 'aurelia';

import { debounce, DebouncedFunction } from '../../utilities/debounce';
import json from '../item-jsons/uniques.json';

export class Uniques {
    uniques = json;
    @bindable search: string;
    @bindable class: string;

    private _debouncedSearchItem!: DebouncedFunction;

    attached() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        this._debouncedSearchItem = debounce(this.updateList.bind(this), 350);
        this.updateList();
    }

    @watch('search')
    handleSearchChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
    }

    classes = [
        { value: 'Amazon', label: 'Amazon' },
        { value: 'Assassin', label: 'Assassin' },
        { value: 'Barbarian', label: 'Barbarian' },
        { value: 'Druid', label: 'Druid' },
        { value: 'Necromancer', label: 'Necromancer' },
        { value: 'Paladin', label: 'Paladin' },
        { value: 'Sorceress', label: 'Sorceress' }
    ];

    classChanged() {
        this.updateList();
    }

    updateList() {
        if (!this.search && !this.class) {
            return;
        }
        this.uniques = json;

        const foundUniques = [];

        uniqueLoop:
        for (const unique of json) {
            if (this.search && unique.Name.toLowerCase().includes(this.search?.toLowerCase())) {
                foundUniques.push(unique);
                continue;
            }
            if (this.class) {
                if (unique.Equipment.RequiredClass?.toLowerCase().includes(this.class?.toLowerCase())) {
                    foundUniques.push(unique);
                    continue;
                }
            }
            if (this.search) {
                for (const property of unique.Properties) {
                    if (property.PropertyString?.toLowerCase().includes(this.search?.toLowerCase())) {
                        foundUniques.push(unique);
                        continue uniqueLoop;
                    }
                }
            }
        }
        this.uniques = foundUniques;
    }

    get filteredUniques() {
        return this.uniques.filter(x => !x.Name.toLowerCase().includes('grabber'));
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
