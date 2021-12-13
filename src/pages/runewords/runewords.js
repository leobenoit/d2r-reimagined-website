import json from '../item-jsons/runewords.json';
import {bindable} from 'aurelia';

export class Runewords {
    runewords = json;
    @bindable search;

    types = [
        'Armor', 'Helm', 'Polearm', 'Any Shield',
        'Barbarian Item', 'Circlet', 'Missile Weapon',
        'Melee Weapon', 'Weapon', 'Wand',
        'Orb', 'Sword', 'Axe',
        'Amazon Bow', 'Spear', 'Staff',
        'Mace', 'Hammer', 'Paladin Item',
        'Hand to Hand', 'Club', 'Any Armor',
        'Scepter', 'Druid Item'
    ]
    selectedType;

    searchChanged() {
        if (!this.search) {
            this.runewords = json;
            return;
        }
        this.updateList();
    }

    typeChanged(e) {
        this.selectedType = e?.detail?.value;
        this.runewords = json;
        this.updateList();
    }

    updateList() {
        let found = [];
        if (this.selectedType) {
            this.runewords = this.runewords.filter((x) => {
                for (let type of x.Types) {
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
            for (let runeword of this.runewords) {
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
        } else {
            return this.runewords;
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