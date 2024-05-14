import { bindable, watch } from 'aurelia';

import json from '../item-jsons/runewords.json';

export class Runewords {
    runewords = json;
    @bindable search;
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

    selectedType: string;

    searchChanged() {
        this.filteredRunewords = [];
        this.updateList();
    }

    @watch('selectedType')
    selectedTypeChanged() {
        console.log('type changed', this.selectedType)
        this.updateList();
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
