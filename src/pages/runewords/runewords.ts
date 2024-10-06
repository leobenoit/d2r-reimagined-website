import { bindable, watch } from 'aurelia';

import json from '../item-jsons/runewords.json';
import { debounce, DebouncedFunction } from '../../utilities/debounce';

export class Runewords {
    runewords = json;

    @bindable search: string;

    private _debouncedSearchItem!: DebouncedFunction;

    filteredRunewords = [];

    types = [
        { value: 'Armor', label: 'Armor' },
        { value: 'Helm', label: 'Helm' },
        { value: 'Polearm', label: 'Polearm' },
        { value: 'Any Shield', label: 'Any Shield' },
        { value: 'Barbarian Item', label: 'Barbarian Item' },
        { value: 'Circlet', label: 'Circlet' },
        { value: 'Missile Weapon', label: 'Missile Weapon' },
        { value: 'Melee Weapon', label: 'Melee Weapon' },
        { value: 'Weapon', label: 'Weapon' },
        { value: 'Wand', label: 'Wand' },
        { value: 'Orb', label: 'Orb' },
        { value: 'Sword', label: 'Sword' },
        { value: 'Axe', label: 'Axe' },
        { value: 'Amazon Bow', label: 'Amazon Bow' },
        { value: 'Spear', label: 'Spear' },
        { value: 'Staff', label: 'Staff' },
        { value: 'Mace', label: 'Mace' },
        { value: 'Hammer', label: 'Hammer' },
        { value: 'Paladin Item', label: 'Paladin Item' },
        { value: 'Hand to Hand', label: 'Hand to Hand' },
        { value: 'Club', label: 'Club' },
        { value: 'Any Armor', label: 'Any Armor' },
        { value: 'Scepter', label: 'Scepter' },
        { value: 'Druid Item', label: 'Druid Item' }
    ];

    amounts = [
        { value: 2, label: '2 Sockets' },
        { value: 3, label: '3 Sockets' },
        { value: 4, label: '4 Sockets' },
        { value: 5, label: '5 Sockets' },
        { value: 6, label: '6 Sockets' }
    ];

    selectedType: string;
    selectedAmount: number;

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

    @watch('selectedType')
    selectedTypeChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
    }

    @watch('selectedAmount')
    selectedAmountChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
    }

    updateList() {
        const found = [];
        let filteringRunewords = this.runewords;
        if (this.selectedType) {
            filteringRunewords = filteringRunewords.filter((x) => {
                for (const type of x.Types) {
                    if (type.Index === this.selectedType) {
                        return true;
                    }
                    if (type.Index === 'Merc Equip' && this.selectedType === 'Helm') {
                        return true;
                    }
                }
                return false;
            });
        }
        if (this.selectedAmount) {
            filteringRunewords = filteringRunewords.filter((x) => {
                return x.Runes.length === this.selectedAmount;
            });
        }
        if (this.search) {
            for (const runeword of filteringRunewords) {
                if (runeword.Name.toLowerCase().includes(this.search.toLowerCase())) {
                    found.push(runeword);
                    continue;
                }
                for (const property of runeword.Properties) {
                    if (property.PropertyString.toLowerCase().includes(this.search.toLowerCase())) {
                        found.push(runeword);
                        break;
                    }
                }
                for (const type of runeword.Types) {
                    if (type.Name.toLowerCase().includes(this.search.toLowerCase())) {
                        found.push(runeword);
                        break;
                    }
                }
            }
            this.filteredRunewords = found;
        } else {
            this.filteredRunewords = filteringRunewords;
        }
    }

    removeRuneFromName(runeName) {
        return runeName.replace(' Rune', '');
    }

    transformTypeName(name) {
        switch (name) {
            case 'Merc Equip':
                return 'Helm'
            default:
                return name;
        }
    }
}
