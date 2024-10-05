import { C as CustomElement, c as customElement, b as bindable } from "./index-BioZ9ucT.js";
const name = "cube-recipes";
const template = '<template>\n    <h3 class="text-center my-4">\n        ${recipes.length} Recipes Found\n    </h3>\n    <div class="search my-2 text-center">\n        <form>\n            <label>Search Recipes</label><br>\n            <input type="text" value.bind="search" />\n        </form>\n    </div>\n    <div class="row gy-5 px-5 text-center">\n        <div class="col-6" repeat.for="recipe of recipes">\n            <div class="card bg-dark p-2">\n                <div class="unique-text">\n                    ${recipe.Output}\n                </div>\n                <div class="description">\n                    ${recipe.CubeRecipeDescription}\n                </div>\n                <div class="description">\n                    ${recipe.Description}\n                </div>\n            </div>\n        </div>\n    </div>\n</template>';
const dependencies = [];
const bindables = {};
let _e;
function register(container) {
  if (!_e) {
    _e = CustomElement.define({ name, template, dependencies, bindables });
  }
  container.register(_e);
}
const __au2ViewDef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bindables,
  default: template,
  dependencies,
  name,
  register,
  template
}, Symbol.toStringTag, { value: "Module" }));
const json = [
  {
    Description: "Staff of Kings + Amulet of the Viper -> Horadric Staff",
    Item: null,
    Input: "Shaft of the Horadric Staff + Amulet of the Viper ",
    CubeRecipeDescription: "Shaft Of The Horadric Staff + Amulet Of The Viper = Horadric Staff"
  },
  {
    Description: "Khalim's Flail + Khalim's Heart + Khalim's Eye + Khalim's Brain -> Khalim's Will",
    Item: null,
    Input: "Khalim's Flail + Khalim's Heart + Khalim's Eye + Khalim's Brain ",
    CubeRecipeDescription: "Khalim's Flail + Khalim's Heart + Khalim's Eye + Khalim's Brain = Khalim's Will"
  },
  {
    Description: "Wirt's Leg + Tome of Town Portal -> Portal to The Secret Cow Level",
    Item: null,
    Input: "Wirt's Leg + Tome of Town Portal ",
    CubeRecipeDescription: "Wirt's Leg + Tome Of Town Portal = Cow Portal"
  },
  {
    Description: "3 Healing Potions (Any) + 3 Mana Potions (Any) + 1 Standard Gem (Any) -> Full Rejuvenation Potion",
    Item: null,
    Input: "3 Healing Potion + 3 Mana Potion + Standard Gem ",
    CubeRecipeDescription: "3 Healing Potion + 3 Mana Potion + Standard Gem = Full Rejuvenation Potion"
  },
  {
    Description: "3 Healing Potions (Any) + 3 Mana Potions (Any)  + 1 Chipped Gem (Any) -> Rejuvenation Potion",
    Item: null,
    Input: "3 Healing Potion + 3 Mana Potion + Chipped Gem ",
    CubeRecipeDescription: "3 Healing Potion + 3 Mana Potion + Chipped Gem = Rejuvenation Potion"
  },
  {
    Description: "3 Rejuvenation Potions -> Full Rejuvenation Potion",
    Item: null,
    Input: "3 Rejuvenation Potion ",
    CubeRecipeDescription: "3 Rejuvenation Potion = Full Rejuvenation Potion"
  },
  {
    Description: "6 Perfect Gems (1 of each type) + 1 Magic Amulet -> Prismatic Amulet",
    Item: null,
    Input: "Magic Amulet + Perfect Amethyst + Perfect Topaz + Perfect Sapphire + Perfect Emerald + Perfect Ruby + Perfect Diamond ",
    CubeRecipeDescription: "Magic Amulet + Perfect Amethyst + Perfect Topaz + Perfect Sapphire + Perfect Emerald + Perfect Ruby + Perfect Diamond = Gymnast's Amulet"
  },
  {
    Description: "1 Magic Ring + 1 Perfect Ruby + 1 Exploding Potion -> Garnet Ring",
    Item: null,
    Input: "Magic Ring + Perfect Ruby + Exploding Potion ",
    CubeRecipeDescription: "Magic Ring + Perfect Ruby + Exploding Potion = Expert's Ring"
  },
  {
    Description: "1 Magic Ring + 1 Perfect Sapphire + 1 Thawing Potion -> Cobalt Ring",
    Item: null,
    Input: "Magic Ring + Perfect Sapphire + Thawing Potion ",
    CubeRecipeDescription: "Magic Ring + Perfect Sapphire + Thawing Potion = Accursed Ring"
  },
  {
    Description: "1 Magic Ring + 1 Perfect Topaz + 1 Rejuvenation Potion -> Coral Ring",
    Item: null,
    Input: "Magic Ring + Perfect Topaz + Rejuvenation Potion ",
    CubeRecipeDescription: "Magic Ring + Perfect Topaz + Rejuvenation Potion = Communal Ring"
  },
  {
    Description: "1 Magic Ring + 1 Standard Emerald + 1 Antidote Potion -> Jade Ring",
    Item: null,
    Input: "Magic Ring + Perfect Emerald + Antidote Potion ",
    CubeRecipeDescription: "Magic Ring + Perfect Emerald + Antidote Potion = Gnostics1 Ring"
  },
  {
    Description: "1 Axe (Any) + 1 Dagger (Any) -> Throwing Axe",
    Item: null,
    Input: "Axe + Knife ",
    CubeRecipeDescription: "Axe + Knife = Normal Throwing Axe"
  },
  {
    Description: "1 Spear (Any) + 1 Arrows -> Javelins",
    Item: null,
    Input: "Spear + Arrows ",
    CubeRecipeDescription: "Spear + Arrows = Normal Javelin"
  },
  {
    Description: "3 Magic Rings -> Magic Amulet",
    Item: null,
    Input: "3 Magic Ring ",
    CubeRecipeDescription: "3 Magic Ring = Magic Amulet"
  },
  {
    Description: "3 Magic Amulets -> Magic Ring",
    Item: null,
    Input: "3 Magic Amulet ",
    CubeRecipeDescription: "3 Magic Amulet = Magic Ring"
  },
  {
    Description: "3 Standard Gems + 1 Socketed Weapon ->  Socketed Magic Weapon",
    Item: null,
    Input: "Socketed Weapon + 3 Standard Gem ",
    CubeRecipeDescription: "Socketed Weapon + 3 Standard Gem = Magic Weapon"
  },
  {
    Description: "3 Flawless Gems + 1 Magic Weapon -> Socketed Magic Weapon",
    Item: null,
    Input: "Magic Weapon + 3 Flawless Gem ",
    CubeRecipeDescription: "Magic Weapon + 3 Flawless Gem = Magic Weapon"
  },
  {
    Description: "1 Magic Shield + 1 Spiked Club + 2 Skulls (Any) -> Magic Shield of Spikes",
    Item: null,
    Input: "Magic Any Shield + 2 Skull + Spiked Club ",
    CubeRecipeDescription: "Magic Any Shield + 2 Skull + Spiked Club = Any Shield Of The Lamprey"
  },
  {
    Description: "4 Healing Potions (Any) + 1 Standard Ruby + 1 Magic Sword -> Sword of the Leech",
    Item: null,
    Input: "Magic Sword + Ruby + 4 Healing Potion ",
    CubeRecipeDescription: "Magic Sword + Ruby + 4 Healing Potion = Sword Of The Colosuss"
  },
  {
    Description: "1 Diamond (Any) + 1 Kris + 1 Staff + 1 Belt -> Savage Polearm",
    Item: null,
    Input: "Kris + Diamond + Staff + Belt ",
    CubeRecipeDescription: "Kris + Diamond + Staff + Belt = Jagged Polearm"
  },
  {
    Description: "1 Strangling Gas Potion + 1 Healing Potion (Any) -> Antidote Potion",
    Item: null,
    Input: "Strangling Gas Potion + Healing Potion ",
    CubeRecipeDescription: "Strangling Gas Potion + Healing Potion = Antidote Potion"
  },
  {
    Description: "2 Arrows -> Bolts",
    Item: null,
    Input: "2 Arrows ",
    CubeRecipeDescription: "2 Arrows = Bolts"
  },
  {
    Description: "2 Bolts -> Arrows",
    Item: null,
    Input: "2 Bolts ",
    CubeRecipeDescription: "2 Bolts = Arrows"
  },
  {
    Description: "2 Chipped Amethysts -> Flawed Amethyst",
    Item: null,
    Input: "2 Chipped Amethyst ",
    CubeRecipeDescription: "2 Chipped Amethyst = Flawed Amethyst"
  },
  {
    Description: "2 Flawed Amethysts -> Standard Amethyst",
    Item: null,
    Input: "2 Flawed Amethyst ",
    CubeRecipeDescription: "2 Flawed Amethyst = Amethyst"
  },
  {
    Description: "2 Standard Amethysts -> Flawless Amethyst",
    Item: null,
    Input: "2 Amethyst ",
    CubeRecipeDescription: "2 Amethyst = Flawless Amethyst"
  },
  {
    Description: "2 Flawless Amethysts -> Perfect Amethyst",
    Item: null,
    Input: "2 Flawless Amethyst ",
    CubeRecipeDescription: "2 Flawless Amethyst = Perfect Amethyst"
  },
  {
    Description: "2 Chipped Rubies -> Flawed Ruby",
    Item: null,
    Input: "2 Chipped Ruby ",
    CubeRecipeDescription: "2 Chipped Ruby = Flawed Ruby"
  },
  {
    Description: "2 Flawed Rubies -> Standard Ruby",
    Item: null,
    Input: "2 Flawed Ruby ",
    CubeRecipeDescription: "2 Flawed Ruby = Ruby"
  },
  {
    Description: "2 Standard Rubies -> Flawless Ruby",
    Item: null,
    Input: "2 Ruby ",
    CubeRecipeDescription: "2 Ruby = Flawless Ruby"
  },
  {
    Description: "2 Flawless Rubies -> Perfect Ruby",
    Item: null,
    Input: "2 Flawless Ruby ",
    CubeRecipeDescription: "2 Flawless Ruby = Perfect Ruby"
  },
  {
    Description: "2 Chipped Sapphires -> Flawed Sapphire",
    Item: null,
    Input: "2 Chipped Sapphire ",
    CubeRecipeDescription: "2 Chipped Sapphire = Flawed Sapphire"
  },
  {
    Description: "2 Flawed Sapphires -> Standard Sapphire",
    Item: null,
    Input: "2 Flawed Sapphire ",
    CubeRecipeDescription: "2 Flawed Sapphire = Sapphire"
  },
  {
    Description: "2 Standard Sapphires -> Flawless Sapphire",
    Item: null,
    Input: "2 Sapphire ",
    CubeRecipeDescription: "2 Sapphire = Flawless Sapphire"
  },
  {
    Description: "2 Flawless Sapphires -> Perfect Sapphire",
    Item: null,
    Input: "2 Flawless Sapphire ",
    CubeRecipeDescription: "2 Flawless Sapphire = Perfect Sapphire"
  },
  {
    Description: "2 Chipped Topazes -> Flawed Topaz",
    Item: null,
    Input: "2 Chipped Topaz ",
    CubeRecipeDescription: "2 Chipped Topaz = Flawed Topaz"
  },
  {
    Description: "2 Flawed Topazes -> Standard Topaz",
    Item: null,
    Input: "2 Flawed Topaz ",
    CubeRecipeDescription: "2 Flawed Topaz = Topaz"
  },
  {
    Description: "2 Standard Topazes -> Flawless Topaz",
    Item: null,
    Input: "2 Topaz ",
    CubeRecipeDescription: "2 Topaz = Flawless Topaz"
  },
  {
    Description: "2 Flawless Topazes -> Perfect Topaz",
    Item: null,
    Input: "2 Flawless Topaz ",
    CubeRecipeDescription: "2 Flawless Topaz = Perfect Topaz"
  },
  {
    Description: "2 Chipped Emeralds -> Flawed Emerald",
    Item: null,
    Input: "2 Chipped Emerald ",
    CubeRecipeDescription: "2 Chipped Emerald = Flawed Emerald"
  },
  {
    Description: "2 Flawed Emeralds -> Standard Emerald",
    Item: null,
    Input: "2 Flawed Emerald ",
    CubeRecipeDescription: "2 Flawed Emerald = Emerald"
  },
  {
    Description: "2 Standard Emeralds -> Flawless Emerald",
    Item: null,
    Input: "2 Emerald ",
    CubeRecipeDescription: "2 Emerald = Flawless Emerald"
  },
  {
    Description: "2 Flawless Emeralds -> Perfect Emerald",
    Item: null,
    Input: "2 Flawless Emerald ",
    CubeRecipeDescription: "2 Flawless Emerald = Perfect Emerald"
  },
  {
    Description: "2 Chipped Diamonds -> Flawed Diamond",
    Item: null,
    Input: "2 Chipped Diamond ",
    CubeRecipeDescription: "2 Chipped Diamond = Flawed Diamond"
  },
  {
    Description: "2 Flawed Diamonds -> Standard Diamond",
    Item: null,
    Input: "2 Flawed Diamond ",
    CubeRecipeDescription: "2 Flawed Diamond = Diamond"
  },
  {
    Description: "2 Standard Diamonds -> Flawless Diamond",
    Item: null,
    Input: "2 Diamond ",
    CubeRecipeDescription: "2 Diamond = Flawless Diamond"
  },
  {
    Description: "2 Flawless Diamonds -> Perfect Diamond",
    Item: null,
    Input: "2 Flawless Diamond ",
    CubeRecipeDescription: "2 Flawless Diamond = Perfect Diamond"
  },
  {
    Description: "2 Chipped Skulls -> Flawed Skull",
    Item: null,
    Input: "2 Chipped Skull ",
    CubeRecipeDescription: "2 Chipped Skull = Flawed Skull"
  },
  {
    Description: "2 Flawed Skulls -> Standard Skull",
    Item: null,
    Input: "2 Flawed Skull ",
    CubeRecipeDescription: "2 Flawed Skull = Skull"
  },
  {
    Description: "2 Standard Skulls -> Flawless Skull",
    Item: null,
    Input: "2 Skull ",
    CubeRecipeDescription: "2 Skull = Flawless Skull"
  },
  {
    Description: "2 Flawless Skulls -> Perfect Skull",
    Item: null,
    Input: "2 Flawless Skull ",
    CubeRecipeDescription: "2 Flawless Skull = Perfect Skull"
  },
  {
    Description: "3 El Runes -> Eld Rune",
    Item: null,
    Input: "2 El Rune ",
    CubeRecipeDescription: "2 El Rune = Eld Rune"
  },
  {
    Description: "3 Eld Runes -> Tir Rune",
    Item: null,
    Input: "2 Eld Rune ",
    CubeRecipeDescription: "2 Eld Rune = Tir Rune"
  },
  {
    Description: "3 Tir Runes -> Nef Rune",
    Item: null,
    Input: "2 Tir Rune ",
    CubeRecipeDescription: "2 Tir Rune = Nef Rune"
  },
  {
    Description: "3 Nef Runes -> Eth Rune",
    Item: null,
    Input: "2 Nef Rune ",
    CubeRecipeDescription: "2 Nef Rune = Eth Rune"
  },
  {
    Description: "3 Eth Runes -> Ith Rune",
    Item: null,
    Input: "2 Eth Rune ",
    CubeRecipeDescription: "2 Eth Rune = Ith Rune"
  },
  {
    Description: "3 Ith Runes -> Tal Rune",
    Item: null,
    Input: "2 Ith Rune ",
    CubeRecipeDescription: "2 Ith Rune = Tal Rune"
  },
  {
    Description: "3 Tal Runes -> Ral Rune",
    Item: null,
    Input: "2 Tal Rune ",
    CubeRecipeDescription: "2 Tal Rune = Ral Rune"
  },
  {
    Description: "3 Ral Runes -> Ort Rune",
    Item: null,
    Input: "2 Ral Rune ",
    CubeRecipeDescription: "2 Ral Rune = Ort Rune"
  },
  {
    Description: "3 Ort Runes -> Thul Rune",
    Item: null,
    Input: "2 Ort Rune ",
    CubeRecipeDescription: "2 Ort Rune = Thul Rune"
  },
  {
    Description: "3 Perfect Gems (Any) + 1 Magic Item -> Re-rolled Magic Item",
    Item: null,
    Input: "Magic any + 3 Perfect Gem ",
    CubeRecipeDescription: "Magic Any + 3 Perfect Gem = Magic Item"
  },
  {
    Description: "3 Perfect Gems stack (Any) + 1 Magic Item -> Re-rolled Magic Item",
    Item: null,
    Input: "Magic any + 3 Perfect Gem Stack ",
    CubeRecipeDescription: "Magic Any + 3 Perfect Gem Stack = Magic Item"
  },
  {
    Description: "3 Perfect Gems stack (Any) + 1 Magic Item -> Re-rolled Magic Item",
    Item: null,
    Input: "Perfect Gem Stack + Magic Grand Charm ",
    CubeRecipeDescription: "Perfect Gem Stack + Magic Grand Charm = Perfect Gem Stack"
  },
  {
    Description: "3 Perfect Gems stack (Any) + 1 Magic Item -> Re-rolled Magic Item",
    Item: null,
    Input: "Perfect Gem Stack + Magic Large Charm ",
    CubeRecipeDescription: "Perfect Gem Stack + Magic Large Charm = Perfect Gem Stack"
  },
  {
    Description: "3 Perfect Gems stack (Any) + 1 Magic Item -> Re-rolled Magic Item",
    Item: null,
    Input: "Perfect Gem Stack + Magic Small Charm ",
    CubeRecipeDescription: "Perfect Gem Stack + Magic Small Charm = Perfect Gem Stack"
  },
  {
    Description: "6 Perfect Skulls + 1 Rare Item -> 1 Low Quality Rare Item",
    Item: null,
    Input: "Rare any + 6 Perfect Skull ",
    CubeRecipeDescription: "Rare Any + 6 Perfect Skull = Rare Item"
  },
  {
    Description: "1 Perfect Skull + 1 Rare Item + 1 Stone of Jordan -> 1 High Quality Rare Item",
    Item: null,
    Input: "Rare any + Perfect Skull + The Stone of Jordan ",
    CubeRecipeDescription: "Rare Any + Perfect Skull + The Stone Of Jordan = Rare Item"
  },
  {
    Description: "3 Perfect Skull + 1 Rare Item + 1 Stone of Jordan -> Add 1 Socket to Rare Item",
    Item: null,
    Input: "Rare No Socket any + 3 Perfect Skull + The Stone of Jordan ",
    CubeRecipeDescription: "Rare No Socket Any + 3 Perfect Skull + The Stone Of Jordan = 1 Sockets"
  },
  {
    Description: "1 Magic Full Helm + 1 Jewel + 1 Ith Rune + 1 Perfect Sapphire -> Hit Power Helm",
    Item: null,
    Input: "Magic Full Helm + Jewel + Ith Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Full Helm + Jewel + Ith Rune + Perfect Sapphire = Magic Full Helm"
  },
  {
    Description: "1 Magic Chain Boots + 1 Jewel + 1 Ral Rune + 1 Perfect Sapphire -> Hit Power Boots",
    Item: null,
    Input: "Magic Chain Boots + Jewel + Ral Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Chain Boots + Jewel + Ral Rune + Perfect Sapphire = Magic Chain Boots"
  },
  {
    Description: "1 Magic Chain Gloves + 1 Jewel + 1 Ort Rune + 1 Perfect Sapphire -> Hit Power Gloves",
    Item: null,
    Input: "Magic Chain Gloves + Jewel + Ort Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Chain Gloves + Jewel + Ort Rune + Perfect Sapphire = Magic Chain Gloves"
  },
  {
    Description: "1 Magic Heavy Belt + 1 Jewel + 1 Tal Rune + 1 Perfect Sapphire -> Hit Power Belt",
    Item: null,
    Input: "Magic Heavy Belt + Jewel + Tal Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Heavy Belt + Jewel + Tal Rune + Perfect Sapphire = Magic Heavy Belt"
  },
  {
    Description: "1 Magic Gothic Shield + 1 Jewel + 1 Eth Rune + 1 Perfect Sapphire -> Hit Power Shield",
    Item: null,
    Input: "Magic Gothic Shield + Jewel + Eth Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Gothic Shield + Jewel + Eth Rune + Perfect Sapphire = Magic Gothic Shield"
  },
  {
    Description: "1 Magic Field Plate + 1 Jewel + 1 Nef Rune + 1 Perfect Sapphire -> Hit Power Body",
    Item: null,
    Input: "Magic Field Plate + Jewel + Nef Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Field Plate + Jewel + Nef Rune + Perfect Sapphire = Magic Field Plate"
  },
  {
    Description: "1 Magic Amulet + 1 Jewel + Thul Rune + 1 Perfect Sapphire -> Hit Power Amulet",
    Item: null,
    Input: "Magic Amulet + Jewel + Thul Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Amulet + Jewel + Thul Rune + Perfect Sapphire = Amulet"
  },
  {
    Description: "1 Magic Ring + 1 Jewel + 1 Amn Rune + 1 Perfect Sapphire -> Hit Power Ring",
    Item: null,
    Input: "Magic Ring + Jewel + Amn Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Ring + Jewel + Amn Rune + Perfect Sapphire = Ring"
  },
  {
    Description: "1 Magic Blunt Weapon + 1 Jewel + 1 Tir Rune + 1 Perfect Sapphire -> Hit Power Weapon",
    Item: null,
    Input: "Magic Blunt + Jewel + Tir Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Magic Blunt + Jewel + Tir Rune + Perfect Sapphire = Blunt"
  },
  {
    Description: "1 Magic Helm + 1 Jewel + 1 Ral Rune + 1 Perfect Ruby -> Blood Helm",
    Item: null,
    Input: "Magic Helm + Jewel + Ral Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Helm + Jewel + Ral Rune + Perfect Ruby = Magic Helm"
  },
  {
    Description: "1 Magic Light Plated Boots + 1 Jewel + 1 Eth Rune + 1 Perfect Ruby -> Blood Boots",
    Item: null,
    Input: "Magic Light Plated Boots + Jewel + Eth Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Light Plated Boots + Jewel + Eth Rune + Perfect Ruby = Magic Light Plated Boots"
  },
  {
    Description: "1 Magic Heavy Gloves + 1 Jewel + 1 Nef Rune + 1 Perfect Ruby -> Blood Gloves",
    Item: null,
    Input: "Magic Heavy Gloves + Jewel + Nef Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Heavy Gloves + Jewel + Nef Rune + Perfect Ruby = Magic Heavy Gloves"
  },
  {
    Description: "1 Magic Belt + 1 Jewel + 1 Tal Rune + 1 Perfect Ruby -> Blood Belt",
    Item: null,
    Input: "Magic Belt + Jewel + Tal Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Belt + Jewel + Tal Rune + Perfect Ruby = Magic Belt"
  },
  {
    Description: "1 Magic Spiked Shield + 1 Jewel + 1 Ith Rune + 1 Perfect Ruby -> Blood Shield",
    Item: null,
    Input: "Magic Spiked Shield + Jewel + Ith Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Spiked Shield + Jewel + Ith Rune + Perfect Ruby = Magic Spiked Shield"
  },
  {
    Description: "1 Magic Plate Mail + 1 Jewel + 1 Thul Rune + 1 Perfect Ruby -> Blood Body",
    Item: null,
    Input: "Magic Plate Mail + Jewel + Thul Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Plate Mail + Jewel + Thul Rune + Perfect Ruby = Magic Plate Mail"
  },
  {
    Description: "1 Magic Amulet + 1 Jewel + 1 Amn Rune + 1 Perfect Ruby -> Blood Amulet",
    Item: null,
    Input: "Magic Amulet + Jewel + Amn Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Amulet + Jewel + Amn Rune + Perfect Ruby = Amulet"
  },
  {
    Description: "1 Magic Ring + 1 Jewel + 1 Sol Rune + 1 Perfect Ruby -> Blood Ring",
    Item: null,
    Input: "Magic Ring + Jewel + Sol Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Ring + Jewel + Sol Rune + Perfect Ruby = Ring"
  },
  {
    Description: "1 Magic Axe + 1 Jewel + Ort Rune + 1 Perfect Ruby -> Blood Weapon",
    Item: null,
    Input: "Magic Axe + Jewel + Ort Rune + Perfect Ruby ",
    CubeRecipeDescription: "Magic Axe + Jewel + Ort Rune + Perfect Ruby = Axe"
  },
  {
    Description: "1 Magic Mask + 1 Jewel + Nef Rune + 1 Perfect Amethyst -> Caster Helm",
    Item: null,
    Input: "Magic Mask + Jewel + Nef Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Mask + Jewel + Nef Rune + Perfect Amethyst = Magic Mask"
  },
  {
    Description: "1 Magic Boots + 1 Jewel + Thul Rune + 1 Perfect Amethyst -> Caster Boots",
    Item: null,
    Input: "Magic Boots + Jewel + Thul Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Boots + Jewel + Thul Rune + Perfect Amethyst = Magic Boots"
  },
  {
    Description: "1 Magic Leather Gloves + 1 Jewel + Ort Rune + 1 Perfect Amethyst -> Caster Gloves",
    Item: null,
    Input: "Magic Leather Gloves + Jewel + Ort Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Leather Gloves + Jewel + Ort Rune + Perfect Amethyst = Magic Leather Gloves"
  },
  {
    Description: "1 Magic Light Belt + 1 Jewel + Ith Rune + 1 Perfect Amethyst -> Caster Belt",
    Item: null,
    Input: "Magic Light Belt + Jewel + Ith Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Light Belt + Jewel + Ith Rune + Perfect Amethyst = Magic Light Belt"
  },
  {
    Description: "1 Magic Small Shield + 1 Jewel + 1 Eth Rune + 1 Perfect Amethyst -> Caster Shield",
    Item: null,
    Input: "Magic Small Shield + Jewel + Eth Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Small Shield + Jewel + Eth Rune + Perfect Amethyst = Magic Small Shield"
  },
  {
    Description: "1 Magic Light Plate + 1 Jewel + 1 Tal Rune + 1 Perfect Amethyst -> Caster Body",
    Item: null,
    Input: "Magic Light Plate + Jewel + Tal Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Light Plate + Jewel + Tal Rune + Perfect Amethyst = Magic Light Plate"
  },
  {
    Description: "1 Magic Amulet + 1 Jewel + 1 Ral Rune + 1 Perfect Amethyst -> Caster Amulet",
    Item: null,
    Input: "Magic Amulet + Jewel + Ral Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Amulet + Jewel + Ral Rune + Perfect Amethyst = Amulet"
  },
  {
    Description: "1 Magic Ring + 1 Jewel + 1 Amn Rune + 1 Perfect Amethyst -> Caster Ring",
    Item: null,
    Input: "Magic Ring + Jewel + Amn Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Ring + Jewel + Amn Rune + Perfect Amethyst = Ring"
  },
  {
    Description: "1 Magic Rod + 1 Jewel + 1 Tir Rune + 1 Perfect Amethyst -> Caster Weapon",
    Item: null,
    Input: "Magic Staves And Rods + Jewel + Tir Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Magic Staves And Rods + Jewel + Tir Rune + Perfect Amethyst = Staves And Rods"
  },
  {
    Description: "1 Magic Crown + 1 Jewel + 1 Ith Rune + 1 Perfect Emerald -> Safety Helm",
    Item: null,
    Input: "Magic Crown + Jewel + Ith Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Crown + Jewel + Ith Rune + Perfect Emerald = Magic Crown"
  },
  {
    Description: "1 Magic Plated Boots + 1 Jewel + 1 Ort Rune + 1 Perfect Emerald -> Safety Boots",
    Item: null,
    Input: "Magic Greaves + Jewel + Ort Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Greaves + Jewel + Ort Rune + Perfect Emerald = Magic Greaves"
  },
  {
    Description: "1 Magic Gauntlets + 1 Jewel + 1 Ral Rune + 1 Perfect Emerald -> Safety Gloves",
    Item: null,
    Input: "Magic Gauntlets + Jewel + Ral Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Gauntlets + Jewel + Ral Rune + Perfect Emerald = Magic Gauntlets"
  },
  {
    Description: "1 Magic Sash + 1 Jewel + 1 Tal Rune + 1 Perfect Emerald -> Safety Belt",
    Item: null,
    Input: "Magic Sash + Jewel + Tal Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Sash + Jewel + Tal Rune + Perfect Emerald = Magic Sash"
  },
  {
    Description: "1 Magic Kite Shield + 1 Jewel + 1 Nef Rune + 1 Perfect Emerald -> Safety Shield",
    Item: null,
    Input: "Magic Kite Shield + Jewel + Nef Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Kite Shield + Jewel + Nef Rune + Perfect Emerald = Magic Kite Shield"
  },
  {
    Description: "1 Magic Breast Plate + 1 Jewel + 1 Eth Rune + 1 Perfect Emerald -> Safety Body",
    Item: null,
    Input: "Magic Breast Plate + Jewel + Eth Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Breast Plate + Jewel + Eth Rune + Perfect Emerald = Magic Breast Plate"
  },
  {
    Description: "1 Magic Amulet + 1 Jewel + 1 Thul Rune + 1 Perfect Emerald -> Safety Amulet",
    Item: null,
    Input: "Magic Amulet + Jewel + Thul Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Amulet + Jewel + Thul Rune + Perfect Emerald = Amulet"
  },
  {
    Description: "1 Magic Ring + 1 Jewel + 1 Amn Rune + 1 Perfect Emerald -> Safety Ring",
    Item: null,
    Input: "Magic Ring + Jewel + Amn Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Ring + Jewel + Amn Rune + Perfect Emerald = Ring"
  },
  {
    Description: "1 Magic Spear + 1 Jewel + 1 Sol Rune + 1 Perfect Emerald -> Safety Weapon",
    Item: null,
    Input: "Magic Spear + Jewel + Sol Rune + Perfect Emerald ",
    CubeRecipeDescription: "Magic Spear + Jewel + Sol Rune + Perfect Emerald = Spear"
  },
  {
    Description: "3 Thul Runes + 1 Chipped Topaz -> Amn Rune",
    Item: null,
    Input: "2 Thul Rune ",
    CubeRecipeDescription: "2 Thul Rune = Amn Rune"
  },
  {
    Description: "3 Amn Runes + 1 Chipped Amethyst -> Sol Rune",
    Item: null,
    Input: "2 Amn Rune ",
    CubeRecipeDescription: "2 Amn Rune = Sol Rune"
  },
  {
    Description: "3 Sol Runes + 1 Chipped Sapphire -> Shael Rune",
    Item: null,
    Input: "2 Sol Rune ",
    CubeRecipeDescription: "2 Sol Rune = Shael Rune"
  },
  {
    Description: "3 Shael Runes + 1 Chipped Ruby -> Dol Rune",
    Item: null,
    Input: "2 Shael Rune ",
    CubeRecipeDescription: "2 Shael Rune = Dol Rune"
  },
  {
    Description: "3 Dol Runes + 1 Chipped Emerald -> Hel Rune",
    Item: null,
    Input: "2 Dol Rune ",
    CubeRecipeDescription: "2 Dol Rune = Hel Rune"
  },
  {
    Description: "3 Hel Runes + 1 Chipped Diamond -> Io Rune",
    Item: null,
    Input: "2 Hel Rune ",
    CubeRecipeDescription: "2 Hel Rune = Io Rune"
  },
  {
    Description: "3 Io Runes + 1 Flawed Topaz -> Lum Rune",
    Item: null,
    Input: "2 Io Rune ",
    CubeRecipeDescription: "2 Io Rune = Lum Rune"
  },
  {
    Description: "3 Lum Runes + 1 Flawed Amethyst -> Ko Rune",
    Item: null,
    Input: "2 Lum Rune ",
    CubeRecipeDescription: "2 Lum Rune = Ko Rune"
  },
  {
    Description: "3 Ko Runes + 1 Flawed Sapphire -> Fal Rune",
    Item: null,
    Input: "2 Ko Rune ",
    CubeRecipeDescription: "2 Ko Rune = Fal Rune"
  },
  {
    Description: "3 Fal Runes + 1 Flawed Ruby -> Lem Rune",
    Item: null,
    Input: "2 Fal Rune ",
    CubeRecipeDescription: "2 Fal Rune = Lem Rune"
  },
  {
    Description: "3 Lem Runes + 1 Flawed Emerald -> Pul Rune",
    Item: null,
    Input: "2 Lem Rune ",
    CubeRecipeDescription: "2 Lem Rune = Pul Rune"
  },
  {
    Description: "2 Pul Runes + 1 Flawed Diamond -> Um Rune",
    Item: null,
    Input: "2 Pul Rune ",
    CubeRecipeDescription: "2 Pul Rune = Um Rune"
  },
  {
    Description: "2 Um Runes + 1 Standard Topaz -> Mal Rune",
    Item: null,
    Input: "2 Um Rune ",
    CubeRecipeDescription: "2 Um Rune = Mal Rune"
  },
  {
    Description: "2 Mal Runes + 1 Standard Amethyst -> Ist Rune",
    Item: null,
    Input: "2 Mal Rune ",
    CubeRecipeDescription: "2 Mal Rune = Ist Rune"
  },
  {
    Description: "2 Ist Runes + 1 Standard Sapphire -> Gul Rune",
    Item: null,
    Input: "2 Ist Rune ",
    CubeRecipeDescription: "2 Ist Rune = Gul Rune"
  },
  {
    Description: "2 Gul Runes + 1 Standard Ruby -> Vex Rune",
    Item: null,
    Input: "2 Gul Rune ",
    CubeRecipeDescription: "2 Gul Rune = Vex Rune"
  },
  {
    Description: "2 Vex Runes + 1 Standard Emerald -> Ohm Rune",
    Item: null,
    Input: "2 Vex Rune ",
    CubeRecipeDescription: "2 Vex Rune = Ohm Rune"
  },
  {
    Description: "2 Ohm Runes + 1 Standard Diamond -> Lo Rune",
    Item: null,
    Input: "2 Ohm Rune ",
    CubeRecipeDescription: "2 Ohm Rune = Lo Rune"
  },
  {
    Description: "2 Lo Runes + 1 Flawless Topaz -> Sur Rune",
    Item: null,
    Input: "2 Lo Rune ",
    CubeRecipeDescription: "2 Lo Rune = Sur Rune"
  },
  {
    Description: "2 Sur Runes + 1 Flawless Amethyst -> Ber Rune",
    Item: null,
    Input: "2 Sur Rune ",
    CubeRecipeDescription: "2 Sur Rune = Ber Rune"
  },
  {
    Description: "2 Ber Runes + 1 Flawless Sapphire -> Jah Rune",
    Item: null,
    Input: "2 Ber Rune ",
    CubeRecipeDescription: "2 Ber Rune = Jah Rune"
  },
  {
    Description: "2 Jah Runes + 1 Flawless Ruby -> Cham Rune",
    Item: null,
    Input: "2 Jah Rune ",
    CubeRecipeDescription: "2 Jah Rune = Cham Rune"
  },
  {
    Description: "2 Cham Runes + 1 Flawless Emerald -> Zod Rune",
    Item: null,
    Input: "2 Cham Rune ",
    CubeRecipeDescription: "2 Cham Rune = Zod Rune"
  },
  {
    Description: "1 Tal Rune + 1 Thul Rune + 1 Perfect Topaz + 1 Normal Torso Armor -> Socketed Torso Armor",
    Item: null,
    Input: "Normal No Socket Armor + Tal Rune + Thul Rune + Perfect Topaz ",
    CubeRecipeDescription: "Normal No Socket Armor + Tal Rune + Thul Rune + Perfect Topaz = Socketed Armor"
  },
  {
    Description: "1 Ral Rune + 1 Amn Rune + 1 Perfect Amethyst + 1 Normal Weapon -> Socketed Weapon",
    Item: null,
    Input: "Normal No Socket Weapon + Ral Rune + Amn Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Normal No Socket Weapon + Ral Rune + Amn Rune + Perfect Amethyst = Socketed Weapon"
  },
  {
    Description: "1 Ral Rune + 1 Thul Rune + 1 Perfect Sapphire + 1 Normal Helm -> Socketed Helm",
    Item: null,
    Input: "Normal No Socket Merc Equip + Ral Rune + Thul Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Normal No Socket Merc Equip + Ral Rune + Thul Rune + Perfect Sapphire = Socketed Merc Equip"
  },
  {
    Description: "1 Tal Rune + 1 Amn Rune + 1 Perfect Ruby + 1 Normal Shield -> Socketed Shield",
    Item: null,
    Input: "Normal No Socket Any Shield + Tal Rune + Amn Rune + Perfect Ruby ",
    CubeRecipeDescription: "Normal No Socket Any Shield + Tal Rune + Amn Rune + Perfect Ruby = Socketed Any Shield"
  },
  {
    Description: "1 Eld Rune + 1 Chipped Gem (Any) + 1 Low Quality Weapon -> Normal Weapon",
    Item: null,
    Input: "Low Quality Weapon + Eld Rune + Chipped Gem ",
    CubeRecipeDescription: "Low Quality Weapon + Eld Rune + Chipped Gem = Normal Weapon"
  },
  {
    Description: "1 El Rune + 1 Chipped Gem (Any) + 1 Low Quality Armor -> Normal Armor",
    Item: null,
    Input: "Low Quality Any Armor + El Rune + Chipped Gem ",
    CubeRecipeDescription: "Low Quality Any Armor + El Rune + Chipped Gem = Normal Any Armor"
  },
  {
    Description: "1 Ral Rune + 1 Sol Rune + 1 Perfect Emerald + 1 Normal Unique Weapon -> Exceptional Unique Weapon",
    Item: null,
    Input: "basic Unique Weapon + Ral Rune + Sol Rune + Perfect Emerald ",
    CubeRecipeDescription: "Basic Unique Weapon + Ral Rune + Sol Rune + Perfect Emerald = Exceptional Weapon"
  },
  {
    Description: "1 Tal Rune + 1 Shael Rune + 1 Perfect Diamond + 1 Normal Unique Armor -> Exceptional Unique Armor",
    Item: null,
    Input: "basic Unique Any Armor + Tal Rune + Shael Rune + Perfect Diamond ",
    CubeRecipeDescription: "Basic Unique Any Armor + Tal Rune + Shael Rune + Perfect Diamond = Exceptional Any Armor"
  },
  {
    Description: "1 Lum Rune + 1 Pul Rune + 1 Perfect Emerald + 1 Exceptional Unique Weapon -> Elite Unique Weapon",
    Item: null,
    Input: "exceptional Unique Weapon + Lum Rune + Pul Rune + Perfect Emerald ",
    CubeRecipeDescription: "Exceptional Unique Weapon + Lum Rune + Pul Rune + Perfect Emerald = Elite Weapon"
  },
  {
    Description: "1 Ko Rune + 1 Lem Rune + 1 Perfect Diamond + 1 Exceptional Unique Armor -> Elite Unique Armor",
    Item: null,
    Input: "exceptional Unique Any Armor + Ko Rune + Lem Rune + Perfect Diamond ",
    CubeRecipeDescription: "Exceptional Unique Any Armor + Ko Rune + Lem Rune + Perfect Diamond = Elite Any Armor"
  },
  {
    Description: "1 Ort Rune + 1 Amn Rune + 1 Perfect Sapphire + 1 Normal Rare Weapon -> Exceptional Rare Weapon",
    Item: null,
    Input: "basic Rare Weapon + Ort Rune + Amn Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Basic Rare Weapon + Ort Rune + Amn Rune + Perfect Sapphire = Exceptional Weapon"
  },
  {
    Description: "1 Ral Rune + 1 Thul Rune + 1 Perfect Amethyst + 1 Normal Rare Armor -> Exceptional Rare Armor",
    Item: null,
    Input: "basic Rare Any Armor + Ral Rune + Thul Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Basic Rare Any Armor + Ral Rune + Thul Rune + Perfect Amethyst = Exceptional Any Armor"
  },
  {
    Description: "1 Fal Rune + 1 Um Rune + 1 Perfect Sapphire + 1 Exceptional Rare Weapon -> Elite Rare Weapon",
    Item: null,
    Input: "exceptional Rare Weapon + Fal Rune + Um Rune + Perfect Sapphire ",
    CubeRecipeDescription: "Exceptional Rare Weapon + Fal Rune + Um Rune + Perfect Sapphire = Elite Weapon"
  },
  {
    Description: "1 Ko Rune + 1 Pul Rune + 1 Perfect Amethyst + 1 Exceptional Rare Armor -> Elite Rare Armor",
    Item: null,
    Input: "exceptional Rare Any Armor + Ko Rune + Pul Rune + Perfect Amethyst ",
    CubeRecipeDescription: "Exceptional Rare Any Armor + Ko Rune + Pul Rune + Perfect Amethyst = Elite Any Armor"
  },
  {
    Description: "1 Ort Rune + 1 Weapon -> Fully Repaired Weapon",
    Item: null,
    Input: "Not Etheral Weapon + Ort Rune ",
    CubeRecipeDescription: "Not Etheral Weapon + Ort Rune = 255 Weapon Repair Durability"
  },
  {
    Description: "1 Ral Rune + 1 Armor -> Fully Repaired Armor",
    Item: null,
    Input: "Not Etheral Any Armor + Ral Rune ",
    CubeRecipeDescription: "Not Etheral Any Armor + Ral Rune = 255 Any Armor Repair Durability"
  },
  {
    Description: "1 Ort Rune + 1 Chipped Gem (Any) + 1 Weapon -> Fully Repaired and Recharged Weapon",
    Item: null,
    Input: "Not Etheral Weapon + Ort Rune + Chipped Gem ",
    CubeRecipeDescription: "Not Etheral Weapon + Ort Rune + Chipped Gem = 255 Weapon Recharge Quantity Repair Durability"
  },
  {
    Description: "1 Ral Rune + 1 Flawed Gem (Any) + 1 Armor -> Fully Repaired and Recharged Armor",
    Item: null,
    Input: "Not Etheral Any Armor + Ral Rune + Flawed Gem ",
    CubeRecipeDescription: "Not Etheral Any Armor + Ral Rune + Flawed Gem = 255 Any Armor Recharge Quantity Repair Durability"
  },
  {
    Description: "1 Hel Rune + Scroll of Town Portal + 1 Socketed Item -> Clear Sockets on Item",
    Item: null,
    Input: "Socketed any + Hel Rune + Scroll of Town Portal ",
    CubeRecipeDescription: "Socketed Any + Hel Rune + Scroll Of Town Portal = Destroy Gems "
  },
  {
    Description: "3 Chipped Gems (Any) + 1 Magic Weapon -> Socketed Magic Weapon",
    Item: null,
    Input: "Magic Weapon + 3 Chipped Gem ",
    CubeRecipeDescription: "Magic Weapon + 3 Chipped Gem = Magic Weapon"
  },
  {
    Description: "1 Key of Terror + 1 Key of Hate + 1 Key of Destruction -> Portal to Matron's Den/Forgotten Sands/Furnace of Pain (Random)",
    Item: null,
    Input: "Key of Terror + Key of Hate + Key of Destruction ",
    CubeRecipeDescription: "Key Of Terror + Key Of Hate + Key Of Destruction = Pandemonium Portal"
  },
  {
    Description: "1 Diablo's Horn + 1 Baal's Eye + 1 Mephisto's Brain -> Portal to Tristram (Pandemonium Finale)",
    Item: null,
    Input: "Diablo's Horn + Baal's Eye + Mephisto's Brain ",
    CubeRecipeDescription: "Diablo's Horn + Baal's Eye + Mephisto's Brain = Pandemonium Finale Portal"
  },
  {
    Description: "1 Twisted Essence of Suffering + 1 Charged Essence of Hatred + 1 Burning Essence of Terror + 1 Festering Essence of Destruction -> Token of Absolution",
    Item: null,
    Input: "Twisted Essence of Suffering + Charged Essense of Hatred + Burning Essence of Terror + Festering Essence of Destruction ",
    CubeRecipeDescription: "Twisted Essence Of Suffering + Charged Essense Of Hatred + Burning Essence Of Terror + Festering Essence Of Destruction = Token Of Absolution"
  },
  {
    Description: "Scroll of Town Portal + Scroll of Identify -> Token of Absolution",
    Item: null,
    Input: "Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Scroll Of Identify + Scroll Of Town Portal = Token Of Absolution"
  },
  {
    Description: "Scroll of Town Portal + 1 Socketed Item -> Clear Sockets on Item",
    Item: null,
    Input: "Socketed any + Scroll of Town Portal ",
    CubeRecipeDescription: "Socketed Any + Scroll Of Town Portal = Remove Gems "
  },
  {
    Description: "33 Zod-Rune downgrade",
    Item: null,
    Input: "Zod Rune ",
    CubeRecipeDescription: "Zod Rune = Cham Rune"
  },
  {
    Description: "32 Cham-downgrade",
    Item: null,
    Input: "Cham Rune ",
    CubeRecipeDescription: "Cham Rune = Jah Rune"
  },
  {
    Description: "31 Jah-downgrade",
    Item: null,
    Input: "Jah Rune ",
    CubeRecipeDescription: "Jah Rune = Ber Rune"
  },
  {
    Description: "30 Ber-downgrade",
    Item: null,
    Input: "Ber Rune ",
    CubeRecipeDescription: "Ber Rune = Sur Rune"
  },
  {
    Description: "29 Sur-downgrade",
    Item: null,
    Input: "Sur Rune ",
    CubeRecipeDescription: "Sur Rune = Lo Rune"
  },
  {
    Description: "28 Lo-downgrade",
    Item: null,
    Input: "Lo Rune ",
    CubeRecipeDescription: "Lo Rune = Ohm Rune"
  },
  {
    Description: "27 Ohm-downgrade",
    Item: null,
    Input: "Ohm Rune ",
    CubeRecipeDescription: "Ohm Rune = Vex Rune"
  },
  {
    Description: "26 Vex-downgrade",
    Item: null,
    Input: "Vex Rune ",
    CubeRecipeDescription: "Vex Rune = Gul Rune"
  },
  {
    Description: "25 Gul-downgrade",
    Item: null,
    Input: "Gul Rune ",
    CubeRecipeDescription: "Gul Rune = Ist Rune"
  },
  {
    Description: "24 Ist-downgrade",
    Item: null,
    Input: "Ist Rune ",
    CubeRecipeDescription: "Ist Rune = Mal Rune"
  },
  {
    Description: "23 Mal-downgrade",
    Item: null,
    Input: "Mal Rune ",
    CubeRecipeDescription: "Mal Rune = Um Rune"
  },
  {
    Description: "22 Um-downgrade",
    Item: null,
    Input: "Um Rune ",
    CubeRecipeDescription: "Um Rune = Pul Rune"
  },
  {
    Description: "21 Pul-downgrade",
    Item: null,
    Input: "Pul Rune ",
    CubeRecipeDescription: "Pul Rune = Lem Rune"
  },
  {
    Description: "20 Lem-downgrade",
    Item: null,
    Input: "Lem Rune ",
    CubeRecipeDescription: "Lem Rune = Fal Rune"
  },
  {
    Description: "19 Fal-downgrade",
    Item: null,
    Input: "Fal Rune ",
    CubeRecipeDescription: "Fal Rune = Ko Rune"
  },
  {
    Description: "18 Ko-downgrade",
    Item: null,
    Input: "Ko Rune ",
    CubeRecipeDescription: "Ko Rune = Lum Rune"
  },
  {
    Description: "17 Lum-downgrade",
    Item: null,
    Input: "Lum Rune ",
    CubeRecipeDescription: "Lum Rune = Io Rune"
  },
  {
    Description: "16 Io-downgrade",
    Item: null,
    Input: "Io Rune ",
    CubeRecipeDescription: "Io Rune = Hel Rune"
  },
  {
    Description: "15 Hel-downgrade",
    Item: null,
    Input: "Hel Rune ",
    CubeRecipeDescription: "Hel Rune = Dol Rune"
  },
  {
    Description: "14 Dol-downgrade",
    Item: null,
    Input: "Dol Rune ",
    CubeRecipeDescription: "Dol Rune = Shael Rune"
  },
  {
    Description: "13 Sheal-downgrade",
    Item: null,
    Input: "Shael Rune ",
    CubeRecipeDescription: "Shael Rune = Sol Rune"
  },
  {
    Description: "12 Sol-downgrade",
    Item: null,
    Input: "Sol Rune ",
    CubeRecipeDescription: "Sol Rune = Amn Rune"
  },
  {
    Description: "11 Amn-downgrade",
    Item: null,
    Input: "Amn Rune ",
    CubeRecipeDescription: "Amn Rune = Thul Rune"
  },
  {
    Description: "10 Thul-downgrade",
    Item: null,
    Input: "Thul Rune ",
    CubeRecipeDescription: "Thul Rune = Ort Rune"
  },
  {
    Description: "9 Ort-downgrade",
    Item: null,
    Input: "Ort Rune ",
    CubeRecipeDescription: "Ort Rune = Ral Rune"
  },
  {
    Description: "8 Ral-downgrade",
    Item: null,
    Input: "Ral Rune ",
    CubeRecipeDescription: "Ral Rune = Tal Rune"
  },
  {
    Description: "7 Tal-downgrade",
    Item: null,
    Input: "Tal Rune ",
    CubeRecipeDescription: "Tal Rune = Ith Rune"
  },
  {
    Description: "6 Ith-downgrade",
    Item: null,
    Input: "Ith Rune ",
    CubeRecipeDescription: "Ith Rune = Eth Rune"
  },
  {
    Description: "5 Eth-downgrade",
    Item: null,
    Input: "Eth Rune ",
    CubeRecipeDescription: "Eth Rune = Nef Rune"
  },
  {
    Description: "4 Nef-downgrade",
    Item: null,
    Input: "Nef Rune ",
    CubeRecipeDescription: "Nef Rune = Tir Rune"
  },
  {
    Description: "3 Tir-downgrade",
    Item: null,
    Input: "Tir Rune ",
    CubeRecipeDescription: "Tir Rune = Eld Rune"
  },
  {
    Description: "2 Eld-downgrade (El-Rune would be Rune number 1)",
    Item: null,
    Input: "Eld Rune ",
    CubeRecipeDescription: "Eld Rune = El Rune"
  },
  {
    Description: "1 socket punch - any body armor",
    Item: null,
    Input: "Armor + Jewel ",
    CubeRecipeDescription: "Armor + Jewel = Socketed Armor"
  },
  {
    Description: "1 socket punch - any shield",
    Item: null,
    Input: "Any Shield + Jewel ",
    CubeRecipeDescription: "Any Shield + Jewel = Socketed Any Shield"
  },
  {
    Description: "1 socket punch - any helm",
    Item: null,
    Input: "Merc Equip + Jewel ",
    CubeRecipeDescription: "Merc Equip + Jewel = Socketed Merc Equip"
  },
  {
    Description: "2 socket punch - any body armor",
    Item: null,
    Input: "Armor + 2 Jewel ",
    CubeRecipeDescription: "Armor + 2 Jewel = Socketed Armor"
  },
  {
    Description: "2 socket punch - any helm",
    Item: null,
    Input: "Merc Equip + 2 Jewel ",
    CubeRecipeDescription: "Merc Equip + 2 Jewel = Socketed Merc Equip"
  },
  {
    Description: "2 socket punch - any shield",
    Item: null,
    Input: "Any Shield + 2 Jewel ",
    CubeRecipeDescription: "Any Shield + 2 Jewel = Socketed Any Shield"
  },
  {
    Description: "3 socket punch - normal body armor",
    Item: null,
    Input: "Armor + 3 Jewel ",
    CubeRecipeDescription: "Armor + 3 Jewel = Socketed Armor"
  },
  {
    Description: "3 socket punch - normal helm",
    Item: null,
    Input: "Merc Equip + 3 Jewel ",
    CubeRecipeDescription: "Merc Equip + 3 Jewel = Socketed Merc Equip"
  },
  {
    Description: "3 socket punch - normal shield",
    Item: null,
    Input: "Any Shield + 3 Jewel ",
    CubeRecipeDescription: "Any Shield + 3 Jewel = Socketed Any Shield"
  },
  {
    Description: "3 socket punch - magic body armor",
    Item: null,
    Input: "Magic Armor + 3 Jewel ",
    CubeRecipeDescription: "Magic Armor + 3 Jewel = Socketed Armor"
  },
  {
    Description: "3 socket punch - magic helm",
    Item: null,
    Input: "Magic Merc Equip + 3 Jewel ",
    CubeRecipeDescription: "Magic Merc Equip + 3 Jewel = Socketed Merc Equip"
  },
  {
    Description: "3 socket punch - magic shield",
    Item: null,
    Input: "Magic Any Shield + 3 Jewel ",
    CubeRecipeDescription: "Magic Any Shield + 3 Jewel = Socketed Any Shield"
  },
  {
    Description: "3 socket punch - rare body armor",
    Item: null,
    Input: "Rare Armor + 3 Jewel ",
    CubeRecipeDescription: "Rare Armor + 3 Jewel = Socketed Armor"
  },
  {
    Description: "3 socket punch - rare helm",
    Item: null,
    Input: "Rare Merc Equip + 3 Jewel ",
    CubeRecipeDescription: "Rare Merc Equip + 3 Jewel = Socketed Merc Equip"
  },
  {
    Description: "3 socket punch - rare shield",
    Item: null,
    Input: "Rare Any Shield + 3 Jewel ",
    CubeRecipeDescription: "Rare Any Shield + 3 Jewel = Socketed Any Shield"
  },
  {
    Description: "3 socket punch - unique body armor",
    Item: null,
    Input: "Unique Armor + 3 Jewel ",
    CubeRecipeDescription: "Unique Armor + 3 Jewel = Socketed Armor"
  },
  {
    Description: "3 socket punch - set body armor",
    Item: null,
    Input: "Set Armor + 3 Jewel ",
    CubeRecipeDescription: "Set Armor + 3 Jewel = Socketed Armor"
  },
  {
    Description: "3 socket punch - unique helm",
    Item: null,
    Input: "Unique Merc Equip + 3 Jewel ",
    CubeRecipeDescription: "Unique Merc Equip + 3 Jewel = Socketed Merc Equip"
  },
  {
    Description: "3 socket punch - set helm",
    Item: null,
    Input: "Set Merc Equip + 3 Jewel ",
    CubeRecipeDescription: "Set Merc Equip + 3 Jewel = Socketed Merc Equip"
  },
  {
    Description: "4 socket punch - normal body armor",
    Item: null,
    Input: "Armor + 4 Jewel ",
    CubeRecipeDescription: "Armor + 4 Jewel = Socketed Armor"
  },
  {
    Description: "4 socket punch - normal helm",
    Item: null,
    Input: "Merc Equip + 4 Jewel ",
    CubeRecipeDescription: "Merc Equip + 4 Jewel = Socketed Merc Equip"
  },
  {
    Description: "4 socket punch - normal shield",
    Item: null,
    Input: "Any Shield + 4 Jewel ",
    CubeRecipeDescription: "Any Shield + 4 Jewel = Socketed Any Shield"
  },
  {
    Description: "4 socket punch - magic body armor",
    Item: null,
    Input: "Magic Armor + 4 Jewel ",
    CubeRecipeDescription: "Magic Armor + 4 Jewel = Socketed Armor"
  },
  {
    Description: "4 socket punch - magic helm",
    Item: null,
    Input: "Magic Merc Equip + 4 Jewel ",
    CubeRecipeDescription: "Magic Merc Equip + 4 Jewel = Socketed Merc Equip"
  },
  {
    Description: "4 socket punch - magic shield",
    Item: null,
    Input: "Magic Any Shield + 4 Jewel ",
    CubeRecipeDescription: "Magic Any Shield + 4 Jewel = Socketed Any Shield"
  },
  {
    Description: "4 socket punch - rare body armor",
    Item: null,
    Input: "Rare Armor + 4 Jewel ",
    CubeRecipeDescription: "Rare Armor + 4 Jewel = Socketed Armor"
  },
  {
    Description: "4 socket punch - rare helm",
    Item: null,
    Input: "Rare Merc Equip + 4 Jewel ",
    CubeRecipeDescription: "Rare Merc Equip + 4 Jewel = Socketed Merc Equip"
  },
  {
    Description: "4 socket punch - rare shield",
    Item: null,
    Input: "Rare Any Shield + 4 Jewel ",
    CubeRecipeDescription: "Rare Any Shield + 4 Jewel = Socketed Any Shield"
  },
  {
    Description: "4 socket punch - unique body armor",
    Item: null,
    Input: "Unique Armor + 4 Jewel ",
    CubeRecipeDescription: "Unique Armor + 4 Jewel = Socketed Armor"
  },
  {
    Description: "4 socket punch - set body armor",
    Item: null,
    Input: "Set Armor + 4 Jewel ",
    CubeRecipeDescription: "Set Armor + 4 Jewel = Socketed Armor"
  },
  {
    Description: "4 socket punch - unique helm",
    Item: null,
    Input: "Unique Merc Equip + 4 Jewel ",
    CubeRecipeDescription: "Unique Merc Equip + 4 Jewel = Socketed Merc Equip"
  },
  {
    Description: "4 socket punch - set helm",
    Item: null,
    Input: "Set Merc Equip + 4 Jewel ",
    CubeRecipeDescription: "Set Merc Equip + 4 Jewel = Socketed Merc Equip"
  },
  {
    Description: "5 socket punch - normal body armor",
    Item: null,
    Input: "Armor + 5 Jewel ",
    CubeRecipeDescription: "Armor + 5 Jewel = Socketed Armor"
  },
  {
    Description: "5 socket punch - magic body armor",
    Item: null,
    Input: "Magic Armor + 5 Jewel ",
    CubeRecipeDescription: "Magic Armor + 5 Jewel = Socketed Armor"
  },
  {
    Description: "5 socket punch - rare body armor",
    Item: null,
    Input: "Rare Armor + 5 Jewel ",
    CubeRecipeDescription: "Rare Armor + 5 Jewel = Socketed Armor"
  },
  {
    Description: "6 socket punch - magic bodyarmor",
    Item: null,
    Input: "Magic Armor + 6 Jewel ",
    CubeRecipeDescription: "Magic Armor + 6 Jewel = Socketed Armor"
  },
  {
    Description: "6 socket punch - rare body armor",
    Item: null,
    Input: "Rare Armor + 6 Jewel ",
    CubeRecipeDescription: "Rare Armor + 6 Jewel = Socketed Armor"
  },
  {
    Description: "6 socket punch - normal body armor",
    Item: null,
    Input: "Armor + 6 Jewel ",
    CubeRecipeDescription: "Armor + 6 Jewel = Socketed Armor"
  },
  {
    Description: "1 socket punch - any weapon",
    Item: null,
    Input: "Weapon + Jewel ",
    CubeRecipeDescription: "Weapon + Jewel = Socketed Weapon"
  },
  {
    Description: "2 socket punch - any weapon",
    Item: null,
    Input: "Weapon + 2 Jewel ",
    CubeRecipeDescription: "Weapon + 2 Jewel = Socketed Weapon"
  },
  {
    Description: "3 socket punch - any weapon",
    Item: null,
    Input: "Weapon + 3 Jewel ",
    CubeRecipeDescription: "Weapon + 3 Jewel = Socketed Weapon"
  },
  {
    Description: "4 socket punch - any weapon",
    Item: null,
    Input: "Weapon + 4 Jewel ",
    CubeRecipeDescription: "Weapon + 4 Jewel = Socketed Weapon"
  },
  {
    Description: "5 socket punch - normal weapon",
    Item: null,
    Input: "Weapon + 5 Jewel ",
    CubeRecipeDescription: "Weapon + 5 Jewel = Socketed Weapon"
  },
  {
    Description: "5 socket punch - magic weapon",
    Item: null,
    Input: "Magic Weapon + 5 Jewel ",
    CubeRecipeDescription: "Magic Weapon + 5 Jewel = Socketed Weapon"
  },
  {
    Description: "5 socket punch - rare weapon",
    Item: null,
    Input: "Rare Weapon + 5 Jewel ",
    CubeRecipeDescription: "Rare Weapon + 5 Jewel = Socketed Weapon"
  },
  {
    Description: "5 socket punch - unique weapon",
    Item: null,
    Input: "Unique Weapon + 5 Jewel ",
    CubeRecipeDescription: "Unique Weapon + 5 Jewel = Socketed Weapon"
  },
  {
    Description: "5 socket punch - set weapon",
    Item: null,
    Input: "Set Weapon + 5 Jewel ",
    CubeRecipeDescription: "Set Weapon + 5 Jewel = Socketed Weapon"
  },
  {
    Description: "6 socket punch - normal weapon",
    Item: null,
    Input: "Weapon + 6 Jewel ",
    CubeRecipeDescription: "Weapon + 6 Jewel = Socketed Weapon"
  },
  {
    Description: "6 socket punch - magic weapon",
    Item: null,
    Input: "Magic Weapon + 6 Jewel ",
    CubeRecipeDescription: "Magic Weapon + 6 Jewel = Socketed Weapon"
  },
  {
    Description: "6 socket punch - rare weapon",
    Item: null,
    Input: "Rare Weapon + 6 Jewel ",
    CubeRecipeDescription: "Rare Weapon + 6 Jewel = Socketed Weapon"
  },
  {
    Description: "6 socket punch - unique weapon",
    Item: null,
    Input: "Unique Weapon + 6 Jewel ",
    CubeRecipeDescription: "Unique Weapon + 6 Jewel = Socketed Weapon"
  },
  {
    Description: "6 socket punch - set weapon",
    Item: null,
    Input: "Set Weapon + 6 Jewel ",
    CubeRecipeDescription: "Set Weapon + 6 Jewel = Socketed Weapon"
  },
  {
    Description: "3 chipped gems + 1 magic weapon -> socketed, magic weapon",
    Item: null,
    Input: "Magic Weapon + 3 Chipped Gem ",
    CubeRecipeDescription: "Magic Weapon + 3 Chipped Gem = Magic Weapon"
  },
  {
    Description: "Replenish Unique Arrows",
    Item: null,
    Input: "Barbed Arrows + Healing Potion ",
    CubeRecipeDescription: "Barbed Arrows + Healing Potion = 500  Repair Durability"
  },
  {
    Description: "Replenishing Quiver",
    Item: null,
    Input: "Arrows + Amethyst + Tir Rune ",
    CubeRecipeDescription: "Arrows + Amethyst + Tir Rune = Barbed Arrows"
  },
  {
    Description: "Replenish Unique Arrows",
    Item: null,
    Input: "Arrows of Piercing + Healing Potion ",
    CubeRecipeDescription: "Arrows Of Piercing + Healing Potion = 500  Repair Durability"
  },
  {
    Description: "Quiver of Piercing",
    Item: null,
    Input: "Arrows + Perfect Topaz + Thul Rune ",
    CubeRecipeDescription: "Arrows + Perfect Topaz + Thul Rune = Arrows Of Piercing"
  },
  {
    Description: "Replenish Unique Arrows",
    Item: null,
    Input: "Arrows of Slaying + Healing Potion ",
    CubeRecipeDescription: "Arrows Of Slaying + Healing Potion = 500  Repair Durability"
  },
  {
    Description: "Quiver of Slaying",
    Item: null,
    Input: "Arrows + Perfect Sapphire + Fal Rune ",
    CubeRecipeDescription: "Arrows + Perfect Sapphire + Fal Rune = Arrows Of Slaying"
  },
  {
    Description: "Replenish Unique Arrows",
    Item: null,
    Input: "Barbed Bolts + Healing Potion ",
    CubeRecipeDescription: "Barbed Bolts + Healing Potion = 500  Repair Durability"
  },
  {
    Description: "Replenishing Bolt Case",
    Item: null,
    Input: "Bolts + Amethyst + Tir Rune ",
    CubeRecipeDescription: "Bolts + Amethyst + Tir Rune = Barbed Bolts"
  },
  {
    Description: "Replenish Unique Arrows",
    Item: null,
    Input: "Bolts of Piercing + Healing Potion ",
    CubeRecipeDescription: "Bolts Of Piercing + Healing Potion = 500  Repair Durability"
  },
  {
    Description: "Bolt Case of Piercing",
    Item: null,
    Input: "Bolts + Perfect Topaz + Thul Rune ",
    CubeRecipeDescription: "Bolts + Perfect Topaz + Thul Rune = Bolts Of Piercing"
  },
  {
    Description: "Replenish Unique Bolts",
    Item: null,
    Input: "Bolts of Slaying + Healing Potion ",
    CubeRecipeDescription: "Bolts Of Slaying + Healing Potion = 500  Repair Durability"
  },
  {
    Description: "Bolt Case of Slaying",
    Item: null,
    Input: "Bolts + Perfect Sapphire + Fal Rune ",
    CubeRecipeDescription: "Bolts + Perfect Sapphire + Fal Rune = Bolts Of Slaying"
  },
  {
    Description: "Lightning Damage Weapon",
    Item: null,
    Input: "Weapon + Perfect Topaz ",
    CubeRecipeDescription: "Weapon + Perfect Topaz = Weapon"
  },
  {
    Description: "Fire Damage Weapon",
    Item: null,
    Input: "Weapon + Perfect Ruby ",
    CubeRecipeDescription: "Weapon + Perfect Ruby = Weapon"
  },
  {
    Description: "Cold Damage Weapons",
    Item: null,
    Input: "Weapon + Perfect Sapphire ",
    CubeRecipeDescription: "Weapon + Perfect Sapphire = Weapon"
  },
  {
    Description: "Poison Damage Weapons",
    Item: null,
    Input: "Weapon + Perfect Emerald ",
    CubeRecipeDescription: "Weapon + Perfect Emerald = Weapon"
  },
  {
    Description: "Physical Damage Weapons",
    Item: null,
    Input: "Weapon + Perfect Skull ",
    CubeRecipeDescription: "Weapon + Perfect Skull = Weapon"
  },
  {
    Description: "Attack Rating Weapons",
    Item: null,
    Input: "Weapon + Perfect Amethyst ",
    CubeRecipeDescription: "Weapon + Perfect Amethyst = Weapon"
  },
  {
    Description: "Durability Weapons",
    Item: null,
    Input: "Weapon + Perfect Diamond ",
    CubeRecipeDescription: "Weapon + Perfect Diamond = Weapon"
  },
  {
    Description: "Duel Leech Weapons",
    Item: null,
    Input: "Weapon + 3 Perfect Skull ",
    CubeRecipeDescription: "Weapon + 3 Perfect Skull = Weapon"
  },
  {
    Description: "MF Armor",
    Item: null,
    Input: "Armor + Perfect Topaz ",
    CubeRecipeDescription: "Armor + Perfect Topaz = Armor"
  },
  {
    Description: "Life Armor",
    Item: null,
    Input: "Armor + Perfect Ruby ",
    CubeRecipeDescription: "Armor + Perfect Ruby = Armor"
  },
  {
    Description: "Mana Armor",
    Item: null,
    Input: "Armor + Perfect Sapphire ",
    CubeRecipeDescription: "Armor + Perfect Sapphire = Armor"
  },
  {
    Description: "Dexterity Armor",
    Item: null,
    Input: "Armor + Perfect Emerald ",
    CubeRecipeDescription: "Armor + Perfect Emerald = Armor"
  },
  {
    Description: "Regen Armor",
    Item: null,
    Input: "Armor + Perfect Skull ",
    CubeRecipeDescription: "Armor + Perfect Skull = Armor"
  },
  {
    Description: "Strength Armor",
    Item: null,
    Input: "Armor + Perfect Amethyst ",
    CubeRecipeDescription: "Armor + Perfect Amethyst = Armor"
  },
  {
    Description: "Durability Armor",
    Item: null,
    Input: "Any Armor + Perfect Diamond ",
    CubeRecipeDescription: "Any Armor + Perfect Diamond = Any Armor"
  },
  {
    Description: "Defense Armor",
    Item: null,
    Input: "Any Armor + 3 Perfect Diamond ",
    CubeRecipeDescription: "Any Armor + 3 Perfect Diamond = Any Armor"
  },
  {
    Description: "MF Armor",
    Item: null,
    Input: "Belt + Perfect Topaz ",
    CubeRecipeDescription: "Belt + Perfect Topaz = Belt"
  },
  {
    Description: "Life Armor",
    Item: null,
    Input: "Belt + Perfect Ruby ",
    CubeRecipeDescription: "Belt + Perfect Ruby = Belt"
  },
  {
    Description: "Mana Armor",
    Item: null,
    Input: "Belt + Perfect Sapphire ",
    CubeRecipeDescription: "Belt + Perfect Sapphire = Belt"
  },
  {
    Description: "Dexterity Armor",
    Item: null,
    Input: "Belt + Perfect Emerald ",
    CubeRecipeDescription: "Belt + Perfect Emerald = Belt"
  },
  {
    Description: "Regen Armor",
    Item: null,
    Input: "Belt + Perfect Skull ",
    CubeRecipeDescription: "Belt + Perfect Skull = Belt"
  },
  {
    Description: "Strength Armor",
    Item: null,
    Input: "Belt + Perfect Amethyst ",
    CubeRecipeDescription: "Belt + Perfect Amethyst = Belt"
  },
  {
    Description: "Adds 1 Socket",
    Item: null,
    Input: "Magic Weapon + Thul Rune ",
    CubeRecipeDescription: "Magic Weapon + Thul Rune = Socketed Weapon"
  },
  {
    Description: "MF Armor",
    Item: null,
    Input: "Gloves + Perfect Topaz ",
    CubeRecipeDescription: "Gloves + Perfect Topaz = Gloves"
  },
  {
    Description: "Life Armor",
    Item: null,
    Input: "Gloves + Perfect Ruby ",
    CubeRecipeDescription: "Gloves + Perfect Ruby = Gloves"
  },
  {
    Description: "Mana Armor",
    Item: null,
    Input: "Gloves + Perfect Sapphire ",
    CubeRecipeDescription: "Gloves + Perfect Sapphire = Gloves"
  },
  {
    Description: "Dexterity Armor",
    Item: null,
    Input: "Gloves + Perfect Emerald ",
    CubeRecipeDescription: "Gloves + Perfect Emerald = Gloves"
  },
  {
    Description: "Regen Armor",
    Item: null,
    Input: "Gloves + Perfect Skull ",
    CubeRecipeDescription: "Gloves + Perfect Skull = Gloves"
  },
  {
    Description: "Strength Armor",
    Item: null,
    Input: "Gloves + Perfect Amethyst ",
    CubeRecipeDescription: "Gloves + Perfect Amethyst = Gloves"
  },
  {
    Description: "MF Armor",
    Item: null,
    Input: "Boots + Perfect Topaz ",
    CubeRecipeDescription: "Boots + Perfect Topaz = Boots"
  },
  {
    Description: "Life Armor",
    Item: null,
    Input: "Boots + Perfect Ruby ",
    CubeRecipeDescription: "Boots + Perfect Ruby = Boots"
  },
  {
    Description: "Mana Armor",
    Item: null,
    Input: "Boots + Perfect Sapphire ",
    CubeRecipeDescription: "Boots + Perfect Sapphire = Boots"
  },
  {
    Description: "Dexterity Armor",
    Item: null,
    Input: "Boots + Perfect Emerald ",
    CubeRecipeDescription: "Boots + Perfect Emerald = Boots"
  },
  {
    Description: "Regen Armor",
    Item: null,
    Input: "Boots + Perfect Skull ",
    CubeRecipeDescription: "Boots + Perfect Skull = Boots"
  },
  {
    Description: "Strength Armor",
    Item: null,
    Input: "Boots + Perfect Amethyst ",
    CubeRecipeDescription: "Boots + Perfect Amethyst = Boots"
  },
  {
    Description: "MF Armor",
    Item: null,
    Input: "Merc Equip + Perfect Topaz ",
    CubeRecipeDescription: "Merc Equip + Perfect Topaz = Merc Equip"
  },
  {
    Description: "Life Armor",
    Item: null,
    Input: "Merc Equip + Perfect Ruby ",
    CubeRecipeDescription: "Merc Equip + Perfect Ruby = Merc Equip"
  },
  {
    Description: "Mana Armor",
    Item: null,
    Input: "Merc Equip + Perfect Sapphire ",
    CubeRecipeDescription: "Merc Equip + Perfect Sapphire = Merc Equip"
  },
  {
    Description: "Dexterity Armor",
    Item: null,
    Input: "Merc Equip + Perfect Emerald ",
    CubeRecipeDescription: "Merc Equip + Perfect Emerald = Merc Equip"
  },
  {
    Description: "Regen Armor",
    Item: null,
    Input: "Merc Equip + Perfect Skull ",
    CubeRecipeDescription: "Merc Equip + Perfect Skull = Merc Equip"
  },
  {
    Description: "Strength Armor",
    Item: null,
    Input: "Merc Equip + Perfect Amethyst ",
    CubeRecipeDescription: "Merc Equip + Perfect Amethyst = Merc Equip"
  },
  {
    Description: "Lightning Resist Shield",
    Item: null,
    Input: "Any Shield + Perfect Topaz ",
    CubeRecipeDescription: "Any Shield + Perfect Topaz = Any Shield"
  },
  {
    Description: "Fire Resist Shield",
    Item: null,
    Input: "Any Shield + Perfect Ruby ",
    CubeRecipeDescription: "Any Shield + Perfect Ruby = Any Shield"
  },
  {
    Description: "Cold Resist Shield",
    Item: null,
    Input: "Any Shield + Perfect Sapphire ",
    CubeRecipeDescription: "Any Shield + Perfect Sapphire = Any Shield"
  },
  {
    Description: "Poison Resist Shield",
    Item: null,
    Input: "Any Shield + Perfect Emerald ",
    CubeRecipeDescription: "Any Shield + Perfect Emerald = Any Shield"
  },
  {
    Description: "Attacker Takes DMG Shield",
    Item: null,
    Input: "Any Shield + Perfect Skull ",
    CubeRecipeDescription: "Any Shield + Perfect Skull = Any Shield"
  },
  {
    Description: "Increased % to Block Shield",
    Item: null,
    Input: "Any Shield + Perfect Amethyst ",
    CubeRecipeDescription: "Any Shield + Perfect Amethyst = Any Shield"
  },
  {
    Description: "All resist Shield",
    Item: null,
    Input: "Any Shield + 2 Perfect Diamond ",
    CubeRecipeDescription: "Any Shield + 2 Perfect Diamond = Any Shield"
  },
  {
    Description: "+1 Skills to Amulet",
    Item: null,
    Input: "Amulet + 6 Perfect Topaz ",
    CubeRecipeDescription: "Amulet + 6 Perfect Topaz = "
  },
  {
    Description: "+1 Skills to Amulet",
    Item: null,
    Input: "Amulet + 6 Perfect Ruby ",
    CubeRecipeDescription: "Amulet + 6 Perfect Ruby = "
  },
  {
    Description: "+1 Skills to Amulet",
    Item: null,
    Input: "Amulet + 6 Perfect Sapphire ",
    CubeRecipeDescription: "Amulet + 6 Perfect Sapphire = "
  },
  {
    Description: "+1 Skills to Amulet",
    Item: null,
    Input: "Amulet + 6 Perfect Emerald ",
    CubeRecipeDescription: "Amulet + 6 Perfect Emerald = "
  },
  {
    Description: "+1 Skills to Amulet",
    Item: null,
    Input: "Amulet + 6 Perfect Skull ",
    CubeRecipeDescription: "Amulet + 6 Perfect Skull = "
  },
  {
    Description: "+1 Skills to Amulet",
    Item: null,
    Input: "Amulet + 6 Perfect Amethyst ",
    CubeRecipeDescription: "Amulet + 6 Perfect Amethyst = "
  },
  {
    Description: "+1 Skills to Amulet",
    Item: null,
    Input: "Amulet + 6 Perfect Diamond ",
    CubeRecipeDescription: "Amulet + 6 Perfect Diamond = "
  },
  {
    Description: "MF Ring",
    Item: null,
    Input: "Ring + Perfect Topaz ",
    CubeRecipeDescription: "Ring + Perfect Topaz = "
  },
  {
    Description: "Life Ring",
    Item: null,
    Input: "Ring + Perfect Ruby ",
    CubeRecipeDescription: "Ring + Perfect Ruby = "
  },
  {
    Description: "Mana Ring",
    Item: null,
    Input: "Ring + Perfect Sapphire ",
    CubeRecipeDescription: "Ring + Perfect Sapphire = "
  },
  {
    Description: "Dexterity Ring",
    Item: null,
    Input: "Ring + Perfect Emerald ",
    CubeRecipeDescription: "Ring + Perfect Emerald = "
  },
  {
    Description: "Attacker Takes DMG Ring",
    Item: null,
    Input: "Ring + Perfect Skull ",
    CubeRecipeDescription: "Ring + Perfect Skull = "
  },
  {
    Description: "Strength Ring",
    Item: null,
    Input: "Ring + Perfect Amethyst ",
    CubeRecipeDescription: "Ring + Perfect Amethyst = "
  },
  {
    Description: "All resist Ring",
    Item: null,
    Input: "Ring + Perfect Diamond ",
    CubeRecipeDescription: "Ring + Perfect Diamond = "
  },
  {
    Description: "3 Small charms = reroll charm",
    Item: null,
    Input: "3 Magic Small Charm ",
    CubeRecipeDescription: "3 Magic Small Charm = Magic Small Charm"
  },
  {
    Description: "3 med charms = reroll charm",
    Item: null,
    Input: "3 Magic Large Charm ",
    CubeRecipeDescription: "3 Magic Large Charm = Magic Large Charm"
  },
  {
    Description: "3 grand charms = reroll charm",
    Item: null,
    Input: "3 Magic Grand Charm ",
    CubeRecipeDescription: "3 Magic Grand Charm = Magic Grand Charm"
  },
  {
    Description: "3 magic jewels = reroll magic jewel",
    Item: null,
    Input: "3 Magic Jewel ",
    CubeRecipeDescription: "3 Magic Jewel = Magic Jewel"
  },
  {
    Description: "3 rare jewels = reroll rare jewel",
    Item: null,
    Input: "3 Rare Jewel ",
    CubeRecipeDescription: "3 Rare Jewel = Rare Jewel"
  },
  {
    Description: "3 rare rings -> rare ring",
    Item: null,
    Input: "3 Rare Ring ",
    CubeRecipeDescription: "3 Rare Ring = Rare Ring"
  },
  {
    Description: "3 rare amulets = rare amulet",
    Item: null,
    Input: "3 Rare Amulet ",
    CubeRecipeDescription: "3 Rare Amulet = Rare Amulet"
  },
  {
    Description: "Light weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + El Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + El Rune = Weapon"
  },
  {
    Description: "dmg undead weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Eld Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Eld Rune = Weapon"
  },
  {
    Description: "mana kill weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Tir Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Tir Rune = Weapon"
  },
  {
    Description: "knockback weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Nef Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Nef Rune = Weapon"
  },
  {
    Description: "damage ac% weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Eth Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Eth Rune = Weapon"
  },
  {
    Description: "max damage weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Ith Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Ith Rune = Weapon"
  },
  {
    Description: "elemental damage weapon",
    Item: null,
    Input: "Weapon + Tal Rune + Ral Rune + Ort Rune + Thul Rune ",
    CubeRecipeDescription: "Weapon + Tal Rune + Ral Rune + Ort Rune + Thul Rune = Weapon"
  },
  {
    Description: "Lifeleech weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Amn Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Amn Rune = Weapon"
  },
  {
    Description: "min damage weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Sol Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Sol Rune = Weapon"
  },
  {
    Description: "normal damage weapon",
    Item: null,
    Input: "Weapon + 2 Ith Rune + 2 Sol Rune ",
    CubeRecipeDescription: "Weapon + 2 Ith Rune + 2 Sol Rune = Weapon"
  },
  {
    Description: "ias weapon",
    Item: null,
    Input: "Weapon + Magic Jewel + 2 Shael Rune ",
    CubeRecipeDescription: "Weapon + Magic Jewel + 2 Shael Rune = Weapon"
  },
  {
    Description: "Hit causes monster flee weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Dol Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Dol Rune = Weapon"
  },
  {
    Description: "Lighter weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Hel Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Hel Rune = Weapon"
  },
  {
    Description: "All attributes weapon",
    Item: null,
    Input: "Weapon + Io Rune + Lum Rune + Ko Rune + Fal Rune ",
    CubeRecipeDescription: "Weapon + Io Rune + Lum Rune + Ko Rune + Fal Rune = Weapon"
  },
  {
    Description: "gold weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Lem Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Lem Rune = Weapon"
  },
  {
    Description: "dmg to demon weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Pul Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Pul Rune = Weapon"
  },
  {
    Description: "open wounds weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Um Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Um Rune = Weapon"
  },
  {
    Description: "no heal weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Mal Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Mal Rune = Weapon"
  },
  {
    Description: "MF Weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Ist Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Ist Rune = Weapon"
  },
  {
    Description: "cheaper vendor weapons",
    Item: null,
    Input: "Weapon + Magic Jewel + 3 Lem Rune ",
    CubeRecipeDescription: "Weapon + Magic Jewel + 3 Lem Rune = Weapon"
  },
  {
    Description: "Att% Weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Gul Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Gul Rune = Weapon"
  },
  {
    Description: "Manaleech weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Vex Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Vex Rune = Weapon"
  },
  {
    Description: "duelleech weapon",
    Item: null,
    Input: "Weapon + 2 Amn Rune + 2 Vex Rune ",
    CubeRecipeDescription: "Weapon + 2 Amn Rune + 2 Vex Rune = Weapon"
  },
  {
    Description: "dmg/lvl weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Ohm Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Ohm Rune = Weapon"
  },
  {
    Description: "Deadly Strike weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Lo Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Lo Rune = Weapon"
  },
  {
    Description: "hit blinds weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Sur Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Sur Rune = Weapon"
  },
  {
    Description: "Crushing blow weapon",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Ber Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Ber Rune = Weapon"
  },
  {
    Description: "ignore ac",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Jah Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Jah Rune = Weapon"
  },
  {
    Description: "Freeze Target",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Cham Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Cham Rune = Weapon"
  },
  {
    Description: "-10 Level requirements",
    Item: null,
    Input: "Weapon + 3 Magic Jewel + Zod Rune ",
    CubeRecipeDescription: "Weapon + 3 Magic Jewel + Zod Rune = Weapon"
  },
  {
    Description: "-10 Level requirements",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Zod Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Zod Rune = Any Armor"
  },
  {
    Description: "-10 Level requirements",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Zod Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Zod Rune = Any Shield"
  },
  {
    Description: "-10 Level requirements",
    Item: null,
    Input: "Ring + 3 Magic Jewel + Zod Rune ",
    CubeRecipeDescription: "Ring + 3 Magic Jewel + Zod Rune = "
  },
  {
    Description: "-10 Level requirements",
    Item: null,
    Input: "Amulet + 3 Magic Jewel + Zod Rune ",
    CubeRecipeDescription: "Amulet + 3 Magic Jewel + Zod Rune = "
  },
  {
    Description: "light armors",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + El Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + El Rune = Any Armor"
  },
  {
    Description: "stamina armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Eld Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Eld Rune = Armor"
  },
  {
    Description: "stamina armor",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Eld Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Eld Rune = Belt"
  },
  {
    Description: "stamina armor",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Eld Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Eld Rune = Boots"
  },
  {
    Description: "stamina armor",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Eld Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Eld Rune = Gloves"
  },
  {
    Description: "stamina armor",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Eld Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Eld Rune = Merc Equip"
  },
  {
    Description: "mana kill armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Tir Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Tir Rune = Armor"
  },
  {
    Description: "mana kill Belt",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Tir Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Tir Rune = Belt"
  },
  {
    Description: "mana kill boots",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Tir Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Tir Rune = Boots"
  },
  {
    Description: "mana kill gloves",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Tir Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Tir Rune = Gloves"
  },
  {
    Description: "mana kill helm",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Tir Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Tir Rune = Merc Equip"
  },
  {
    Description: "defense armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Nef Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Nef Rune = Armor"
  },
  {
    Description: "defense armor",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Nef Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Nef Rune = Belt"
  },
  {
    Description: "defense armor",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Nef Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Nef Rune = Boots"
  },
  {
    Description: "defense armor",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Nef Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Nef Rune = Gloves"
  },
  {
    Description: "defense armor",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Nef Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Nef Rune = Merc Equip"
  },
  {
    Description: "regen mana armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Eth Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Eth Rune = Armor"
  },
  {
    Description: "regen mana belt",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Eth Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Eth Rune = Boots"
  },
  {
    Description: "regen mana boots",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Eth Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Eth Rune = Belt"
  },
  {
    Description: "regen mana gloves",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Eth Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Eth Rune = Gloves"
  },
  {
    Description: "regen mana hellm",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Eth Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Eth Rune = Merc Equip"
  },
  {
    Description: "damage to mana armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Ith Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Ith Rune = Armor"
  },
  {
    Description: "dmg to mana belt",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Ith Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Ith Rune = Belt"
  },
  {
    Description: "dmg to mana boots",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Ith Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Ith Rune = Boots"
  },
  {
    Description: "resist all armor",
    Item: null,
    Input: "Armor + Tal Rune + Ral Rune + Ort Rune + Thul Rune ",
    CubeRecipeDescription: "Armor + Tal Rune + Ral Rune + Ort Rune + Thul Rune = Armor"
  },
  {
    Description: "resist all belt",
    Item: null,
    Input: "Belt + Tal Rune + Ral Rune + Ort Rune + Thul Rune ",
    CubeRecipeDescription: "Belt + Tal Rune + Ral Rune + Ort Rune + Thul Rune = Belt"
  },
  {
    Description: "resist all boot",
    Item: null,
    Input: "Boots + Tal Rune + Ral Rune + Ort Rune + Thul Rune ",
    CubeRecipeDescription: "Boots + Tal Rune + Ral Rune + Ort Rune + Thul Rune = Boots"
  },
  {
    Description: "resist all glove",
    Item: null,
    Input: "Gloves + Tal Rune + Ral Rune + Ort Rune + Thul Rune ",
    CubeRecipeDescription: "Gloves + Tal Rune + Ral Rune + Ort Rune + Thul Rune = Gloves"
  },
  {
    Description: "resist all helm",
    Item: null,
    Input: "Merc Equip + Tal Rune + Ral Rune + Ort Rune + Thul Rune ",
    CubeRecipeDescription: "Merc Equip + Tal Rune + Ral Rune + Ort Rune + Thul Rune = Merc Equip"
  },
  {
    Description: "regen armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Amn Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Amn Rune = Armor"
  },
  {
    Description: "regen belt",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Amn Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Amn Rune = Belt"
  },
  {
    Description: "regen boot",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Amn Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Amn Rune = Boots"
  },
  {
    Description: "regen glove",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Amn Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Amn Rune = Gloves"
  },
  {
    Description: "regen helm",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Amn Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Amn Rune = Merc Equip"
  },
  {
    Description: "red dmg armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Sol Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Sol Rune = Armor"
  },
  {
    Description: "red dmg belt",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Sol Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Sol Rune = Belt"
  },
  {
    Description: "red dmg boot",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Sol Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Sol Rune = Boots"
  },
  {
    Description: "red dmg glove",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Sol Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Sol Rune = Gloves"
  },
  {
    Description: "red dmg helm",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Sol Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Sol Rune = Merc Equip"
  },
  {
    Description: "fast hit recovery armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Shael Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Shael Rune = Armor"
  },
  {
    Description: "fast hit recovery armor",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Shael Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Shael Rune = Belt"
  },
  {
    Description: "fast hit recovery armor",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Shael Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Shael Rune = Boots"
  },
  {
    Description: "fast hit recovery armor",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Shael Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Shael Rune = Gloves"
  },
  {
    Description: "fast hit recovery armor",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Shael Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Shael Rune = Merc Equip"
  },
  {
    Description: "reduce mag dmg armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Dol Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Dol Rune = Armor"
  },
  {
    Description: "reduce mag dmg armor",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Dol Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Dol Rune = Belt"
  },
  {
    Description: "reduce mag dmg armor",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Dol Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Dol Rune = Boots"
  },
  {
    Description: "reduce mag dmg armor",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Dol Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Dol Rune = Gloves"
  },
  {
    Description: "reduce mag dmg armor",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Dol Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Dol Rune = Merc Equip"
  },
  {
    Description: "-requirements armors",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Hel Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Hel Rune = Any Armor"
  },
  {
    Description: "resist all armor",
    Item: null,
    Input: "Armor + Io Rune + Lum Rune + Ko Rune + Fal Rune ",
    CubeRecipeDescription: "Armor + Io Rune + Lum Rune + Ko Rune + Fal Rune = Armor"
  },
  {
    Description: "resist all belt",
    Item: null,
    Input: "Belt + Io Rune + Lum Rune + Ko Rune + Fal Rune ",
    CubeRecipeDescription: "Belt + Io Rune + Lum Rune + Ko Rune + Fal Rune = Belt"
  },
  {
    Description: "resist all boot",
    Item: null,
    Input: "Boots + Io Rune + Lum Rune + Ko Rune + Fal Rune ",
    CubeRecipeDescription: "Boots + Io Rune + Lum Rune + Ko Rune + Fal Rune = Boots"
  },
  {
    Description: "resist all glove",
    Item: null,
    Input: "Gloves + Io Rune + Lum Rune + Ko Rune + Fal Rune ",
    CubeRecipeDescription: "Gloves + Io Rune + Lum Rune + Ko Rune + Fal Rune = Gloves"
  },
  {
    Description: "resist all helm",
    Item: null,
    Input: "Merc Equip + Io Rune + Lum Rune + Ko Rune + Fal Rune ",
    CubeRecipeDescription: "Merc Equip + Io Rune + Lum Rune + Ko Rune + Fal Rune = Merc Equip"
  },
  {
    Description: "10% Extra Gold",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Lem Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Lem Rune = Armor"
  },
  {
    Description: "10% Extra Gold",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Lem Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Lem Rune = Belt"
  },
  {
    Description: "10% Extra Gold",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Lem Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Lem Rune = Boots"
  },
  {
    Description: "10% Extra Gold",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Lem Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Lem Rune = Gloves"
  },
  {
    Description: "10% Extra Gold",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Lem Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Lem Rune = Merc Equip"
  },
  {
    Description: "-4% Vendor armor",
    Item: null,
    Input: "Any Armor + Magic Jewel + 3 Lem Rune ",
    CubeRecipeDescription: "Any Armor + Magic Jewel + 3 Lem Rune = Any Armor"
  },
  {
    Description: "enhanced defense Armor",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Pul Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Pul Rune = Any Armor"
  },
  {
    Description: "+1% Added Experience",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Um Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Um Rune = Any Armor"
  },
  {
    Description: "reduce magic dmg armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Mal Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Mal Rune = Armor"
  },
  {
    Description: "reduce magic dmg armor",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Mal Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Mal Rune = Gloves"
  },
  {
    Description: "reduce magic dmg armor",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Mal Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Mal Rune = Belt"
  },
  {
    Description: "reduce magic dmg armor",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Mal Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Mal Rune = Boots"
  },
  {
    Description: "reduce magic dmg armor",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Mal Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Mal Rune = Merc Equip"
  },
  {
    Description: "30% mf Armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Ist Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Ist Rune = Armor"
  },
  {
    Description: "30% mf Armor",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Ist Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Ist Rune = Belt"
  },
  {
    Description: "30% mf Armor",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Ist Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Ist Rune = Boots"
  },
  {
    Description: "30% mf Armor",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Ist Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Ist Rune = Gloves"
  },
  {
    Description: "30% mf Armor",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Ist Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Ist Rune = Merc Equip"
  },
  {
    Description: "res-all-max armor",
    Item: null,
    Input: "Any Armor + Gul Rune + Vex Rune + Ohm Rune + Lo Rune ",
    CubeRecipeDescription: "Any Armor + Gul Rune + Vex Rune + Ohm Rune + Lo Rune = Any Armor"
  },
  {
    Description: "5% mana Armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Sur Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Sur Rune = Armor"
  },
  {
    Description: "4% mana Armor",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Sur Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Sur Rune = Belt"
  },
  {
    Description: "4% mana Armor",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Sur Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Sur Rune = Boots"
  },
  {
    Description: "4% mana Armor",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Sur Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Sur Rune = Gloves"
  },
  {
    Description: "4% mana Armor",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Sur Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Sur Rune = Merc Equip"
  },
  {
    Description: "5% dmg reduced armor",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Ber Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Ber Rune = Any Armor"
  },
  {
    Description: "5% mana Armor",
    Item: null,
    Input: "Armor + 3 Magic Jewel + Jah Rune ",
    CubeRecipeDescription: "Armor + 3 Magic Jewel + Jah Rune = Armor"
  },
  {
    Description: "4% mana Armor",
    Item: null,
    Input: "Belt + 3 Magic Jewel + Jah Rune ",
    CubeRecipeDescription: "Belt + 3 Magic Jewel + Jah Rune = Belt"
  },
  {
    Description: "4% mana Armor",
    Item: null,
    Input: "Boots + 3 Magic Jewel + Jah Rune ",
    CubeRecipeDescription: "Boots + 3 Magic Jewel + Jah Rune = Boots"
  },
  {
    Description: "4% mana Armor",
    Item: null,
    Input: "Gloves + 3 Magic Jewel + Jah Rune ",
    CubeRecipeDescription: "Gloves + 3 Magic Jewel + Jah Rune = Gloves"
  },
  {
    Description: "4% mana Armor",
    Item: null,
    Input: "Merc Equip + 3 Magic Jewel + Jah Rune ",
    CubeRecipeDescription: "Merc Equip + 3 Magic Jewel + Jah Rune = Merc Equip"
  },
  {
    Description: "Nofreeze armors",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Cham Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Cham Rune = Any Armor"
  },
  {
    Description: "light shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + El Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + El Rune = Any Shield"
  },
  {
    Description: "Increased Block shields",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Eld Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Eld Rune = Any Shield"
  },
  {
    Description: "mana-kill Shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Tir Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Tir Rune = Any Shield"
  },
  {
    Description: "defense Shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Nef Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Nef Rune = Any Shield"
  },
  {
    Description: "mana regen Shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Eth Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Eth Rune = Any Shield"
  },
  {
    Description: "all resist shield",
    Item: null,
    Input: "Any Shield + Tal Rune + Ral Rune + Ort Rune + Thul Rune ",
    CubeRecipeDescription: "Any Shield + Tal Rune + Ral Rune + Ort Rune + Thul Rune = Any Shield"
  },
  {
    Description: "thorns Shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Amn Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Amn Rune = Any Shield"
  },
  {
    Description: "reduce damage shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Sol Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Sol Rune = Any Shield"
  },
  {
    Description: "faster block rate shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Shael Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Shael Rune = Any Shield"
  },
  {
    Description: "regen life shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Dol Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Dol Rune = Any Shield"
  },
  {
    Description: "-requirements shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Hel Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Hel Rune = Any Shield"
  },
  {
    Description: "all attributes shields",
    Item: null,
    Input: "Any Shield + Io Rune + Lum Rune + Ko Rune + Fal Rune ",
    CubeRecipeDescription: "Any Shield + Io Rune + Lum Rune + Ko Rune + Fal Rune = Any Shield"
  },
  {
    Description: "extra gold shields",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Lem Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Lem Rune = Any Shield"
  },
  {
    Description: "lower vendor prices shield",
    Item: null,
    Input: "Any Shield + Magic Jewel + 3 Lem Rune ",
    CubeRecipeDescription: "Any Shield + Magic Jewel + 3 Lem Rune = Any Shield"
  },
  {
    Description: "defense shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Pul Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Pul Rune = Any Shield"
  },
  {
    Description: "added experience shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Um Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Um Rune = Any Shield"
  },
  {
    Description: "reduce magic shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Mal Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Mal Rune = Any Shield"
  },
  {
    Description: "mf shield ",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Ist Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Ist Rune = Any Armor"
  },
  {
    Description: "res pois max shld",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Gul Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Gul Rune = Any Shield"
  },
  {
    Description: "res fire max shld",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Vex Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Vex Rune = Any Shield"
  },
  {
    Description: "res-cold max shld",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Ohm Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Ohm Rune = Any Shield"
  },
  {
    Description: "res ltng max shld",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Lo Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Lo Rune = Any Shield"
  },
  {
    Description: "res all max shld",
    Item: null,
    Input: "Any Shield + Gul Rune + Vex Rune + Ohm Rune + Lo Rune ",
    CubeRecipeDescription: "Any Shield + Gul Rune + Vex Rune + Ohm Rune + Lo Rune = Any Shield"
  },
  {
    Description: "Mana shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Sur Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Sur Rune = Any Shield"
  },
  {
    Description: "dmg reduced shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Ber Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Ber Rune = Any Shield"
  },
  {
    Description: "life shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Jah Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Jah Rune = Any Shield"
  },
  {
    Description: "no freeze shield",
    Item: null,
    Input: "Any Shield + 3 Magic Jewel + Cham Rune ",
    CubeRecipeDescription: "Any Shield + 3 Magic Jewel + Cham Rune = Any Shield"
  },
  {
    Description: "res pois max shld",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Gul Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Gul Rune = Any Armor"
  },
  {
    Description: "res fire max shld",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Vex Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Vex Rune = Any Armor"
  },
  {
    Description: "res-cold max shld",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Ohm Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Ohm Rune = Any Armor"
  },
  {
    Description: "res ltng max shld",
    Item: null,
    Input: "Any Armor + 3 Magic Jewel + Lo Rune ",
    CubeRecipeDescription: "Any Armor + 3 Magic Jewel + Lo Rune = Any Armor"
  },
  {
    Description: "crafted hp charm",
    Item: null,
    Input: "Magic Grand Charm + Unique Jewel + 3 Io Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + Unique Jewel + 3 Io Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted mana charm",
    Item: null,
    Input: "Magic Grand Charm + Unique Jewel + 3 Lum Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + Unique Jewel + 3 Lum Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted dex charm",
    Item: null,
    Input: "Magic Grand Charm + Unique Jewel + 3 Ko Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + Unique Jewel + 3 Ko Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted dex charm",
    Item: null,
    Input: "Magic Grand Charm + Unique Jewel + 3 Fal Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + Unique Jewel + 3 Fal Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted def charm",
    Item: null,
    Input: "Magic Grand Charm + 2 Unique Jewel + 2 Pul Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + 2 Unique Jewel + 2 Pul Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted resist charm",
    Item: null,
    Input: "Magic Grand Charm + 2 Unique Jewel + 2 Um Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + 2 Unique Jewel + 2 Um Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted mf charm",
    Item: null,
    Input: "Magic Grand Charm + 2 Unique Jewel + 2 Ist Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + 2 Unique Jewel + 2 Ist Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted added xp charm",
    Item: null,
    Input: "Magic Grand Charm + 2 Unique Jewel + 2 Ohm Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + 2 Unique Jewel + 2 Ohm Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted mf charm",
    Item: null,
    Input: "Magic Grand Charm + 3 Unique Jewel + Zod Rune + El Rune ",
    CubeRecipeDescription: "Magic Grand Charm + 3 Unique Jewel + Zod Rune + El Rune = Magic Grand Charm"
  },
  {
    Description: "crafted barb amulet",
    Item: null,
    Input: "Unique Amulet + 4 Unique Jewel + Mal Rune ",
    CubeRecipeDescription: "Unique Amulet + 4 Unique Jewel + Mal Rune = Unique Amulet"
  },
  {
    Description: "crafted sorc amulet",
    Item: null,
    Input: "Unique Amulet + 4 Unique Jewel + Mal Rune ",
    CubeRecipeDescription: "Unique Amulet + 4 Unique Jewel + Mal Rune = Unique Amulet"
  },
  {
    Description: "crafted ama amulet",
    Item: null,
    Input: "Unique Amulet + 4 Unique Jewel + Mal Rune ",
    CubeRecipeDescription: "Unique Amulet + 4 Unique Jewel + Mal Rune = Unique Amulet"
  },
  {
    Description: "crafted necro amulet",
    Item: null,
    Input: "Unique Amulet + 4 Unique Jewel + Mal Rune ",
    CubeRecipeDescription: "Unique Amulet + 4 Unique Jewel + Mal Rune = Unique Amulet"
  },
  {
    Description: "crafted pally amulet",
    Item: null,
    Input: "Unique Amulet + 4 Unique Jewel + Mal Rune ",
    CubeRecipeDescription: "Unique Amulet + 4 Unique Jewel + Mal Rune = Unique Amulet"
  },
  {
    Description: "crafted druid amulet",
    Item: null,
    Input: "Unique Amulet + 4 Unique Jewel + Mal Rune ",
    CubeRecipeDescription: "Unique Amulet + 4 Unique Jewel + Mal Rune = Unique Amulet"
  },
  {
    Description: "crafted assassin amulet",
    Item: null,
    Input: "Unique Amulet + 4 Unique Jewel + Mal Rune ",
    CubeRecipeDescription: "Unique Amulet + 4 Unique Jewel + Mal Rune = Unique Amulet"
  },
  {
    Description: "crafted resist ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Um Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Um Rune = Unique Ring"
  },
  {
    Description: "crafted xp ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Mal Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Mal Rune = Unique Ring"
  },
  {
    Description: "crafted mf ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Ist Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Ist Rune = Unique Ring"
  },
  {
    Description: "crafted att% ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Gul Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Gul Rune = Unique Ring"
  },
  {
    Description: "crafted d-l ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Vex Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Vex Rune = Unique Ring"
  },
  {
    Description: "crafted dmg% ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Ohm Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Ohm Rune = Unique Ring"
  },
  {
    Description: "crafted ias ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Lo Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Lo Rune = Unique Ring"
  },
  {
    Description: "crafted hp ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Sur Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Sur Rune = Unique Ring"
  },
  {
    Description: "crafted dmg reduced ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Ber Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Ber Rune = Unique Ring"
  },
  {
    Description: "crafted mana ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Jah Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Jah Rune = Unique Ring"
  },
  {
    Description: "crafted absorb ring",
    Item: null,
    Input: "Unique Ring + 3 Unique Jewel + Cham Rune ",
    CubeRecipeDescription: "Unique Ring + 3 Unique Jewel + Cham Rune = Unique Ring"
  },
  {
    Description: "chipped weapon",
    Item: null,
    Input: "Weapon + Chipped Amethyst ",
    CubeRecipeDescription: "Weapon + Chipped Amethyst = Weapon"
  },
  {
    Description: "chipped weapon",
    Item: null,
    Input: "Weapon + Chipped Sapphire ",
    CubeRecipeDescription: "Weapon + Chipped Sapphire = Weapon"
  },
  {
    Description: "chipped weapon",
    Item: null,
    Input: "Weapon + Chipped Emerald ",
    CubeRecipeDescription: "Weapon + Chipped Emerald = Weapon"
  },
  {
    Description: "chipped weapon",
    Item: null,
    Input: "Weapon + Chipped Ruby ",
    CubeRecipeDescription: "Weapon + Chipped Ruby = Weapon"
  },
  {
    Description: "chipped weapon",
    Item: null,
    Input: "Weapon + Chipped Diamond ",
    CubeRecipeDescription: "Weapon + Chipped Diamond = Weapon"
  },
  {
    Description: "chipped weapon",
    Item: null,
    Input: "Weapon + Chipped Topaz ",
    CubeRecipeDescription: "Weapon + Chipped Topaz = Weapon"
  },
  {
    Description: "chipped weapon",
    Item: null,
    Input: "Weapon + Chipped Skull ",
    CubeRecipeDescription: "Weapon + Chipped Skull = Weapon"
  },
  {
    Description: "Flawed weapon",
    Item: null,
    Input: "Weapon + Flawed Amethyst ",
    CubeRecipeDescription: "Weapon + Flawed Amethyst = Weapon"
  },
  {
    Description: "flawed weapon",
    Item: null,
    Input: "Weapon + Flawed Sapphire ",
    CubeRecipeDescription: "Weapon + Flawed Sapphire = Weapon"
  },
  {
    Description: "flawed weapon",
    Item: null,
    Input: "Weapon + Flawed Emerald ",
    CubeRecipeDescription: "Weapon + Flawed Emerald = Weapon"
  },
  {
    Description: "flawed weapon",
    Item: null,
    Input: "Weapon + Flawed Ruby ",
    CubeRecipeDescription: "Weapon + Flawed Ruby = Weapon"
  },
  {
    Description: "flawed weapon",
    Item: null,
    Input: "Weapon + Flawed Diamond ",
    CubeRecipeDescription: "Weapon + Flawed Diamond = Weapon"
  },
  {
    Description: "flawed weapon",
    Item: null,
    Input: "Weapon + Flawed Topaz ",
    CubeRecipeDescription: "Weapon + Flawed Topaz = Weapon"
  },
  {
    Description: "flawed weapon",
    Item: null,
    Input: "Weapon + Flawed Skull ",
    CubeRecipeDescription: "Weapon + Flawed Skull = Weapon"
  },
  {
    Description: "normal weapon",
    Item: null,
    Input: "Weapon + Amethyst ",
    CubeRecipeDescription: "Weapon + Amethyst = Weapon"
  },
  {
    Description: "normal weapon",
    Item: null,
    Input: "Weapon + Sapphire ",
    CubeRecipeDescription: "Weapon + Sapphire = Weapon"
  },
  {
    Description: "normal weapon",
    Item: null,
    Input: "Weapon + Emerald ",
    CubeRecipeDescription: "Weapon + Emerald = Weapon"
  },
  {
    Description: "normal weapon",
    Item: null,
    Input: "Weapon + Ruby ",
    CubeRecipeDescription: "Weapon + Ruby = Weapon"
  },
  {
    Description: "normal weapon",
    Item: null,
    Input: "Weapon + Diamond ",
    CubeRecipeDescription: "Weapon + Diamond = Weapon"
  },
  {
    Description: "normal weapon",
    Item: null,
    Input: "Weapon + Topaz ",
    CubeRecipeDescription: "Weapon + Topaz = Weapon"
  },
  {
    Description: "normal weapon",
    Item: null,
    Input: "Weapon + Skull ",
    CubeRecipeDescription: "Weapon + Skull = Weapon"
  },
  {
    Description: "flawless weapon",
    Item: null,
    Input: "Weapon + Flawless Amethyst ",
    CubeRecipeDescription: "Weapon + Flawless Amethyst = Weapon"
  },
  {
    Description: "flawless weapon",
    Item: null,
    Input: "Weapon + Flawless Sapphire ",
    CubeRecipeDescription: "Weapon + Flawless Sapphire = Weapon"
  },
  {
    Description: "flawless weapon",
    Item: null,
    Input: "Weapon + Flawless Emerald ",
    CubeRecipeDescription: "Weapon + Flawless Emerald = Weapon"
  },
  {
    Description: "flawless weapon",
    Item: null,
    Input: "Weapon + Flawless Ruby ",
    CubeRecipeDescription: "Weapon + Flawless Ruby = Weapon"
  },
  {
    Description: "flawless weapon",
    Item: null,
    Input: "Weapon + Flawless Diamond ",
    CubeRecipeDescription: "Weapon + Flawless Diamond = Weapon"
  },
  {
    Description: "Flawless weapon",
    Item: null,
    Input: "Weapon + Flawless Topaz ",
    CubeRecipeDescription: "Weapon + Flawless Topaz = Weapon"
  },
  {
    Description: "Flawless weapon",
    Item: null,
    Input: "Weapon + Flawless Skull ",
    CubeRecipeDescription: "Weapon + Flawless Skull = Weapon"
  },
  {
    Description: "crafted all skills amulet",
    Item: null,
    Input: "Unique Amulet + 3 Unique Jewel + Ohm Rune + Jah Rune ",
    CubeRecipeDescription: "Unique Amulet + 3 Unique Jewel + Ohm Rune + Jah Rune = Unique Amulet"
  },
  {
    Description: "crafted level 10 amulet",
    Item: null,
    Input: "Magic Amulet + 2 Magic Jewel + El Rune ",
    CubeRecipeDescription: "Magic Amulet + 2 Magic Jewel + El Rune = Magic Amulet"
  },
  {
    Description: "crafted level 25 amulet",
    Item: null,
    Input: "Magic Amulet + 2 Magic Jewel + Amn Rune ",
    CubeRecipeDescription: "Magic Amulet + 2 Magic Jewel + Amn Rune = Magic Amulet"
  },
  {
    Description: "crafted level 35 amulet",
    Item: null,
    Input: "Rare Amulet + 2 Rare Jewel + Lum Rune ",
    CubeRecipeDescription: "Rare Amulet + 2 Rare Jewel + Lum Rune = Rare Amulet"
  },
  {
    Description: "crafted lvl 13 weapon",
    Item: null,
    Input: "Rare Weapon + Magic Jewel + Chipped Diamond ",
    CubeRecipeDescription: "Rare Weapon + Magic Jewel + Chipped Diamond = Weapon"
  },
  {
    Description: "crafted lvl 20 weapon",
    Item: null,
    Input: "Rare Weapon + Magic Jewel + Diamond + Ith Rune ",
    CubeRecipeDescription: "Rare Weapon + Magic Jewel + Diamond + Ith Rune = Weapon"
  },
  {
    Description: "crafted lvl 31 weapon",
    Item: null,
    Input: "Rare Weapon + 2 Magic Jewel + Flawless Diamond + Shael Rune ",
    CubeRecipeDescription: "Rare Weapon + 2 Magic Jewel + Flawless Diamond + Shael Rune = Weapon"
  },
  {
    Description: "crafted lvl 44 weapon",
    Item: null,
    Input: "Rare Weapon + 2 Rare Jewel + Fal Rune + Shael Rune ",
    CubeRecipeDescription: "Rare Weapon + 2 Rare Jewel + Fal Rune + Shael Rune = Weapon"
  },
  {
    Description: "crafted lvl 57 weapon",
    Item: null,
    Input: "Rare Weapon + 2 Rare Jewel + Amn Rune + Vex Rune ",
    CubeRecipeDescription: "Rare Weapon + 2 Rare Jewel + Amn Rune + Vex Rune = Weapon"
  },
  {
    Description: "crafted lvl 69 weapon",
    Item: null,
    Input: "Rare Weapon + 2 Unique Jewel + Ohm Rune + Sur Rune ",
    CubeRecipeDescription: "Rare Weapon + 2 Unique Jewel + Ohm Rune + Sur Rune = Weapon"
  },
  {
    Description: "crafted lvl 78 weapon",
    Item: null,
    Input: "Rare Weapon + 2 Unique Jewel + Ber Rune + Cham Rune + Zod Rune ",
    CubeRecipeDescription: "Rare Weapon + 2 Unique Jewel + Ber Rune + Cham Rune + Zod Rune = Weapon"
  },
  {
    Description: "crafted arrows",
    Item: null,
    Input: "Normal Arrows + Thul Rune + Rare Jewel ",
    CubeRecipeDescription: "Normal Arrows + Thul Rune + Rare Jewel = Normal Arrows"
  },
  {
    Description: "crafted arrows",
    Item: null,
    Input: "Normal Arrows + Sol Rune + Rare Jewel ",
    CubeRecipeDescription: "Normal Arrows + Sol Rune + Rare Jewel = Normal Arrows"
  },
  {
    Description: "crafted arrows",
    Item: null,
    Input: "Normal Arrows + Dol Rune + Rare Jewel ",
    CubeRecipeDescription: "Normal Arrows + Dol Rune + Rare Jewel = Normal Arrows"
  },
  {
    Description: "crafted arrows",
    Item: null,
    Input: "Normal Arrows + Io Rune + Rare Jewel ",
    CubeRecipeDescription: "Normal Arrows + Io Rune + Rare Jewel = Normal Arrows"
  },
  {
    Description: "crafted arrows",
    Item: null,
    Input: "Normal Arrows + Ko Rune + Rare Jewel ",
    CubeRecipeDescription: "Normal Arrows + Ko Rune + Rare Jewel = Normal Arrows"
  },
  {
    Description: "crafted arrows",
    Item: null,
    Input: "Normal Arrows + Lem Rune + Rare Jewel ",
    CubeRecipeDescription: "Normal Arrows + Lem Rune + Rare Jewel = Normal Arrows"
  },
  {
    Description: "crafted lvl 12 armor",
    Item: null,
    Input: "Rare Armor + Magic Jewel + Chipped Ruby ",
    CubeRecipeDescription: "Rare Armor + Magic Jewel + Chipped Ruby = Armor"
  },
  {
    Description: "crafted lvl 19 armor",
    Item: null,
    Input: "Rare Armor + Magic Jewel + Ruby ",
    CubeRecipeDescription: "Rare Armor + Magic Jewel + Ruby = Armor"
  },
  {
    Description: "crafted lvl 30 armor",
    Item: null,
    Input: "Rare Armor + Rare Jewel + Ral Rune + Thul Rune ",
    CubeRecipeDescription: "Rare Armor + Rare Jewel + Ral Rune + Thul Rune = Armor"
  },
  {
    Description: "crafted lvl 43 armor",
    Item: null,
    Input: "Rare Armor + Rare Jewel + Dol Rune + Fal Rune ",
    CubeRecipeDescription: "Rare Armor + Rare Jewel + Dol Rune + Fal Rune = Armor"
  },
  {
    Description: "crafted lvl 57 armor",
    Item: null,
    Input: "Rare Armor + Unique Jewel + Pul Rune + Ist Rune ",
    CubeRecipeDescription: "Rare Armor + Unique Jewel + Pul Rune + Ist Rune = Armor"
  },
  {
    Description: "crafted lvl 69 armor",
    Item: null,
    Input: "Rare Armor + Unique Jewel + Lo Rune + Gul Rune ",
    CubeRecipeDescription: "Rare Armor + Unique Jewel + Lo Rune + Gul Rune = Armor"
  },
  {
    Description: "crafted lvl 80 armor",
    Item: null,
    Input: "Rare Armor + Unique Jewel + Sur Rune + Jah Rune ",
    CubeRecipeDescription: "Rare Armor + Unique Jewel + Sur Rune + Jah Rune = Armor"
  },
  {
    Description: "crafted lvl 10 gloves",
    Item: null,
    Input: "Rare Gloves + Magic Jewel + Chipped Amethyst ",
    CubeRecipeDescription: "Rare Gloves + Magic Jewel + Chipped Amethyst = Gloves"
  },
  {
    Description: "crafted lvl 20 gloves",
    Item: null,
    Input: "Rare Gloves + Magic Jewel + Amethyst ",
    CubeRecipeDescription: "Rare Gloves + Magic Jewel + Amethyst = Gloves"
  },
  {
    Description: "crafted lvl 30 gloves",
    Item: null,
    Input: "Rare Gloves + Rare Jewel + Ith Rune + Hel Rune ",
    CubeRecipeDescription: "Rare Gloves + Rare Jewel + Ith Rune + Hel Rune = Gloves"
  },
  {
    Description: "crafted lvl 50 gloves",
    Item: null,
    Input: "Rare Gloves + Unique Jewel + Lem Rune + Ist Rune ",
    CubeRecipeDescription: "Rare Gloves + Unique Jewel + Lem Rune + Ist Rune = Gloves"
  },
  {
    Description: "crafted lvl 70 gloves",
    Item: null,
    Input: "Rare Gloves + 2 Unique Jewel + Ber Rune + Jah Rune ",
    CubeRecipeDescription: "Rare Gloves + 2 Unique Jewel + Ber Rune + Jah Rune = Gloves"
  },
  {
    Description: "crafted lvl 10 belts",
    Item: null,
    Input: "Rare Belt + Magic Jewel + Chipped Emerald ",
    CubeRecipeDescription: "Rare Belt + Magic Jewel + Chipped Emerald = Belt"
  },
  {
    Description: "crafted lvl 20 belts",
    Item: null,
    Input: "Rare Belt + Magic Jewel + Emerald ",
    CubeRecipeDescription: "Rare Belt + Magic Jewel + Emerald = Belt"
  },
  {
    Description: "crafted lvl 30 belts",
    Item: null,
    Input: "Rare Belt + Rare Jewel + Ral Rune + Io Rune ",
    CubeRecipeDescription: "Rare Belt + Rare Jewel + Ral Rune + Io Rune = Belt"
  },
  {
    Description: "crafted lvl 50 belts",
    Item: null,
    Input: "Rare Belt + Unique Jewel + Lum Rune + Ohm Rune ",
    CubeRecipeDescription: "Rare Belt + Unique Jewel + Lum Rune + Ohm Rune = Belt"
  },
  {
    Description: "crafted lvl 70 belts",
    Item: null,
    Input: "Rare Belt + 2 Unique Jewel + Ist Rune + Cham Rune ",
    CubeRecipeDescription: "Rare Belt + 2 Unique Jewel + Ist Rune + Cham Rune = Belt"
  },
  {
    Description: "crafted lvl 10 boots",
    Item: null,
    Input: "Rare Boots + Magic Jewel + Chipped Sapphire ",
    CubeRecipeDescription: "Rare Boots + Magic Jewel + Chipped Sapphire = Boots"
  },
  {
    Description: "crafted lvl 20 boots",
    Item: null,
    Input: "Rare Boots + Magic Jewel + Sapphire ",
    CubeRecipeDescription: "Rare Boots + Magic Jewel + Sapphire = Boots"
  },
  {
    Description: "crafted lvl 30 boots",
    Item: null,
    Input: "Rare Boots + Rare Jewel + Eth Rune + Sol Rune ",
    CubeRecipeDescription: "Rare Boots + Rare Jewel + Eth Rune + Sol Rune = Boots"
  },
  {
    Description: "crafted lvl 50 boots",
    Item: null,
    Input: "Rare Boots + Unique Jewel + Ko Rune + Um Rune ",
    CubeRecipeDescription: "Rare Boots + Unique Jewel + Ko Rune + Um Rune = Boots"
  },
  {
    Description: "crafted lvl 70 boots",
    Item: null,
    Input: "Rare Boots + 2 Unique Jewel + Lo Rune + Ber Rune ",
    CubeRecipeDescription: "Rare Boots + 2 Unique Jewel + Lo Rune + Ber Rune = Boots"
  },
  {
    Description: "crafted lvl 10 helms",
    Item: null,
    Input: "Rare Merc Equip + Magic Jewel + Chipped Topaz ",
    CubeRecipeDescription: "Rare Merc Equip + Magic Jewel + Chipped Topaz = Merc Equip"
  },
  {
    Description: "crafted lvl 20 helms",
    Item: null,
    Input: "Rare Merc Equip + Magic Jewel + Topaz ",
    CubeRecipeDescription: "Rare Merc Equip + Magic Jewel + Topaz = Merc Equip"
  },
  {
    Description: "crafted lvl 30 helms",
    Item: null,
    Input: "Rare Merc Equip + Rare Jewel + Tal Rune + Amn Rune ",
    CubeRecipeDescription: "Rare Merc Equip + Rare Jewel + Tal Rune + Amn Rune = Merc Equip"
  },
  {
    Description: "crafted lvl 50 helms",
    Item: null,
    Input: "Rare Merc Equip + Unique Jewel + Lum Rune + Mal Rune ",
    CubeRecipeDescription: "Rare Merc Equip + Unique Jewel + Lum Rune + Mal Rune = Merc Equip"
  },
  {
    Description: "crafted lvl 70 helms",
    Item: null,
    Input: "Rare Merc Equip + 2 Unique Jewel + Ohm Rune + Cham Rune ",
    CubeRecipeDescription: "Rare Merc Equip + 2 Unique Jewel + Ohm Rune + Cham Rune = Merc Equip"
  },
  {
    Description: "crafted lvl 10 shields",
    Item: null,
    Input: "Rare Any Shield + Magic Jewel + Chipped Skull ",
    CubeRecipeDescription: "Rare Any Shield + Magic Jewel + Chipped Skull = Any Shield"
  },
  {
    Description: "crafted lvl 20 shields",
    Item: null,
    Input: "Rare Any Shield + Magic Jewel + Skull ",
    CubeRecipeDescription: "Rare Any Shield + Magic Jewel + Skull = Any Shield"
  },
  {
    Description: "crafted lvl 30 shields",
    Item: null,
    Input: "Rare Any Shield + Rare Jewel + Thul Rune + Dol Rune ",
    CubeRecipeDescription: "Rare Any Shield + Rare Jewel + Thul Rune + Dol Rune = Any Shield"
  },
  {
    Description: "crafted lvl 50 shields",
    Item: null,
    Input: "Rare Any Shield + Unique Jewel + Hel Rune + Pul Rune ",
    CubeRecipeDescription: "Rare Any Shield + Unique Jewel + Hel Rune + Pul Rune = Any Shield"
  },
  {
    Description: "crafted lvl 70 shields",
    Item: null,
    Input: "Rare Any Shield + 2 Unique Jewel + Vex Rune + Sur Rune ",
    CubeRecipeDescription: "Rare Any Shield + 2 Unique Jewel + Vex Rune + Sur Rune = Any Shield"
  },
  {
    Description: "repair eth item",
    Item: null,
    Input: "Etheral Weapon + 2 Unique Jewel + Pul Rune ",
    CubeRecipeDescription: "Etheral Weapon + 2 Unique Jewel + Pul Rune = Weapon Repair Durability"
  },
  {
    Description: "repair eth item",
    Item: null,
    Input: "Etheral Any Armor + 2 Unique Jewel + Pul Rune ",
    CubeRecipeDescription: "Etheral Any Armor + 2 Unique Jewel + Pul Rune = Any Armor Repair Durability"
  },
  {
    Description: "repair eth item",
    Item: null,
    Input: "Etheral Any Shield + 2 Unique Jewel + Pul Rune ",
    CubeRecipeDescription: "Etheral Any Shield + 2 Unique Jewel + Pul Rune = Any Shield Repair Durability"
  },
  {
    Description: "forces item ethereal",
    Item: null,
    Input: "Weapon + 2 Unique Jewel + Ohm Rune ",
    CubeRecipeDescription: "Weapon + 2 Unique Jewel + Ohm Rune = Etheral Weapon"
  },
  {
    Description: "forces item ethereal",
    Item: null,
    Input: "Any Armor + 2 Unique Jewel + Ohm Rune ",
    CubeRecipeDescription: "Any Armor + 2 Unique Jewel + Ohm Rune = Etheral Any Armor"
  },
  {
    Description: "forces item ethereal",
    Item: null,
    Input: "Any Shield + 2 Unique Jewel + Ohm Rune ",
    CubeRecipeDescription: "Any Shield + 2 Unique Jewel + Ohm Rune = Etheral Any Shield"
  },
  {
    Description: "Flawed Amethyst Downgrade",
    Item: null,
    Input: "Flawed Amethyst ",
    CubeRecipeDescription: "Flawed Amethyst = Chipped Amethyst"
  },
  {
    Description: "Standard Amethyst Downgrade",
    Item: null,
    Input: "Amethyst ",
    CubeRecipeDescription: "Amethyst = Flawed Amethyst"
  },
  {
    Description: "Flaweless Amethyst Downgrade",
    Item: null,
    Input: "Flawless Amethyst ",
    CubeRecipeDescription: "Flawless Amethyst = Amethyst"
  },
  {
    Description: "Perfect Amethyst Downgrade",
    Item: null,
    Input: "Perfect Amethyst ",
    CubeRecipeDescription: "Perfect Amethyst = Flawless Amethyst"
  },
  {
    Description: "Flawed Ruby Downgrade",
    Item: null,
    Input: "Flawed Ruby ",
    CubeRecipeDescription: "Flawed Ruby = Chipped Ruby"
  },
  {
    Description: "Standard Ruby Downgrade",
    Item: null,
    Input: "Ruby ",
    CubeRecipeDescription: "Ruby = Flawed Ruby"
  },
  {
    Description: "Flawless Ruby Downgrade",
    Item: null,
    Input: "Flawless Ruby ",
    CubeRecipeDescription: "Flawless Ruby = Ruby"
  },
  {
    Description: "Perfect Ruby Downgrade",
    Item: null,
    Input: "Perfect Ruby ",
    CubeRecipeDescription: "Perfect Ruby = Flawless Ruby"
  },
  {
    Description: "Flawed Sapphire Downgrade",
    Item: null,
    Input: "Flawed Sapphire ",
    CubeRecipeDescription: "Flawed Sapphire = Chipped Sapphire"
  },
  {
    Description: "Standard Sapphire Downgrade",
    Item: null,
    Input: "Sapphire ",
    CubeRecipeDescription: "Sapphire = Flawed Sapphire"
  },
  {
    Description: "Flawless Sapphire Downgrade",
    Item: null,
    Input: "Flawless Sapphire ",
    CubeRecipeDescription: "Flawless Sapphire = Sapphire"
  },
  {
    Description: "Perfect Sapphire Downgrade",
    Item: null,
    Input: "Perfect Sapphire ",
    CubeRecipeDescription: "Perfect Sapphire = Flawless Sapphire"
  },
  {
    Description: "Flawed Topaz Downgrade",
    Item: null,
    Input: "Flawed Topaz ",
    CubeRecipeDescription: "Flawed Topaz = Chipped Topaz"
  },
  {
    Description: "Standard Topaz Downgrade",
    Item: null,
    Input: "Topaz ",
    CubeRecipeDescription: "Topaz = Flawed Topaz"
  },
  {
    Description: "Flawless Topaz Downgrade",
    Item: null,
    Input: "Flawless Topaz ",
    CubeRecipeDescription: "Flawless Topaz = Topaz"
  },
  {
    Description: "Perfect Topaz Downgrade",
    Item: null,
    Input: "Perfect Topaz ",
    CubeRecipeDescription: "Perfect Topaz = Flawless Topaz"
  },
  {
    Description: "Flawed Emerald Downgrade",
    Item: null,
    Input: "Flawed Emerald ",
    CubeRecipeDescription: "Flawed Emerald = Chipped Emerald"
  },
  {
    Description: "Standard Emerald Downgrade",
    Item: null,
    Input: "Emerald ",
    CubeRecipeDescription: "Emerald = Flawed Emerald"
  },
  {
    Description: "Flawless Emerald Downgrade",
    Item: null,
    Input: "Flawless Emerald ",
    CubeRecipeDescription: "Flawless Emerald = Emerald"
  },
  {
    Description: "Perfect Emerald Downgrade",
    Item: null,
    Input: "Perfect Emerald ",
    CubeRecipeDescription: "Perfect Emerald = Flawless Emerald"
  },
  {
    Description: "Flawed Diamond Downgrade",
    Item: null,
    Input: "Flawed Diamond ",
    CubeRecipeDescription: "Flawed Diamond = Chipped Diamond"
  },
  {
    Description: "Standard Diamond Downgrade",
    Item: null,
    Input: "Diamond ",
    CubeRecipeDescription: "Diamond = Flawed Diamond"
  },
  {
    Description: "Flawless Diamond Downgrade",
    Item: null,
    Input: "Flawless Diamond ",
    CubeRecipeDescription: "Flawless Diamond = Diamond"
  },
  {
    Description: "Perfect Diamond Downgrade",
    Item: null,
    Input: "Perfect Diamond ",
    CubeRecipeDescription: "Perfect Diamond = Flawless Diamond"
  },
  {
    Description: "Flawed Skull Downgrade",
    Item: null,
    Input: "Flawed Skull ",
    CubeRecipeDescription: "Flawed Skull = Chipped Skull"
  },
  {
    Description: "Standard Skull Downgrade",
    Item: null,
    Input: "Skull ",
    CubeRecipeDescription: "Skull = Flawed Skull"
  },
  {
    Description: "Flawless Skull Downgrade",
    Item: null,
    Input: "Flawless Skull ",
    CubeRecipeDescription: "Flawless Skull = Skull"
  },
  {
    Description: "Perfect Skull Downgrade",
    Item: null,
    Input: "Perfect Skull ",
    CubeRecipeDescription: "Perfect Skull = Flawless Skull"
  },
  {
    Description: "el + hel + any armor -> normal armor",
    Item: null,
    Input: "Any Armor + r1 + Hel Rune ",
    CubeRecipeDescription: "Any Armor + R1 + Hel Rune = Normal Any Armor"
  },
  {
    Description: "el + hel + any weapon -> normal weapon",
    Item: null,
    Input: "Weapon + r1 + Hel Rune ",
    CubeRecipeDescription: "Weapon + R1 + Hel Rune = Normal Weapon"
  },
  {
    Description: "Stack of 2 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 1 Miscellaneous"
  },
  {
    Description: "Stack of 3 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 2 Miscellaneous"
  },
  {
    Description: "Stack of 4 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 3 Miscellaneous"
  },
  {
    Description: "Stack of 5 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 4 Miscellaneous"
  },
  {
    Description: "Stack of 6 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 5 Miscellaneous"
  },
  {
    Description: "Stack of 7 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 6 Miscellaneous"
  },
  {
    Description: "Stack of 8 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 7 Miscellaneous"
  },
  {
    Description: "Stack of 9 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 8 Miscellaneous"
  },
  {
    Description: "Stack of 10 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 9 Miscellaneous"
  },
  {
    Description: "Stack of 11 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 10 Miscellaneous"
  },
  {
    Description: "Stack of 12 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 11 Miscellaneous"
  },
  {
    Description: "Stack of 13 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 12 Miscellaneous"
  },
  {
    Description: "Stack of 14 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 13 Miscellaneous"
  },
  {
    Description: "Stack of 15 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 14 Miscellaneous"
  },
  {
    Description: "Stack of 16 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 15 Miscellaneous"
  },
  {
    Description: "Stack of 17 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 16 Miscellaneous"
  },
  {
    Description: "Stack of 18 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 17 Miscellaneous"
  },
  {
    Description: "Stack of 19 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 18 Miscellaneous"
  },
  {
    Description: "Stack of 20 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 19 Miscellaneous"
  },
  {
    Description: "Stack of 21 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 20 Miscellaneous"
  },
  {
    Description: "Stack of 22 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 21 Miscellaneous"
  },
  {
    Description: "Stack of 23 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 22 Miscellaneous"
  },
  {
    Description: "Stack of 24 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 23 Miscellaneous"
  },
  {
    Description: "Stack of 25 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 24 Miscellaneous"
  },
  {
    Description: "Stack of 26 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 25 Miscellaneous"
  },
  {
    Description: "Stack of 27 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 26 Miscellaneous"
  },
  {
    Description: "Stack of 28 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 27 Miscellaneous"
  },
  {
    Description: "Stack of 29 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 28 Miscellaneous"
  },
  {
    Description: "Stack of 30 Misc (any) -> Stack-1 + Single Misc",
    Item: null,
    Input: "Miscellaneous ",
    CubeRecipeDescription: "Miscellaneous = 29 Miscellaneous"
  },
  {
    Description: "3 Perfect Amethyst -> 3x Stacked Perfect Amethyst",
    Item: null,
    Input: "3 Perfect Amethyst ",
    CubeRecipeDescription: "3 Perfect Amethyst = 3 Perfect Amethyst Stack"
  },
  {
    Description: "1 Stacked Perfect Amethyst -> 1 Unstacked Perfect Amethyst",
    Item: null,
    Input: "Perfect Amethyst Stack ",
    CubeRecipeDescription: "Perfect Amethyst Stack = Perfect Amethyst"
  },
  {
    Description: "3 Flawless Amethyst -> 3x Stacked Flawless Amethyst",
    Item: null,
    Input: "3 Flawless Amethyst ",
    CubeRecipeDescription: "3 Flawless Amethyst = 3 Flawless Amethyst Stack"
  },
  {
    Description: "1 Stacked Flawless Amethyst -> 1 Unstacked Flawless Amethyst",
    Item: null,
    Input: "Flawless Amethyst Stack ",
    CubeRecipeDescription: "Flawless Amethyst Stack = Flawless Amethyst"
  },
  {
    Description: "3 Amethyst -> 3x Stacked Amethyst",
    Item: null,
    Input: "3 Amethyst ",
    CubeRecipeDescription: "3 Amethyst = 3 Amethyst Stack"
  },
  {
    Description: "1 Stacked Amethyst -> 1 Unstacked Amethyst",
    Item: null,
    Input: "Amethyst Stack ",
    CubeRecipeDescription: "Amethyst Stack = Amethyst"
  },
  {
    Description: "3 Flawed Amethyst -> 3x Stacked Flawed Amethyst",
    Item: null,
    Input: "3 Flawed Amethyst ",
    CubeRecipeDescription: "3 Flawed Amethyst = 3 Flawed Amethyst Stack"
  },
  {
    Description: "1 Stacked Flawed Amethyst -> 1 Unstacked Flawed Amethyst",
    Item: null,
    Input: "Flawed Amethyst Stack ",
    CubeRecipeDescription: "Flawed Amethyst Stack = Flawed Amethyst"
  },
  {
    Description: "3 Chipped Amethyst -> 3x Stacked Chipped Amethyst",
    Item: null,
    Input: "3 Chipped Amethyst ",
    CubeRecipeDescription: "3 Chipped Amethyst = 3 Chipped Amethyst Stack"
  },
  {
    Description: "1 Stacked Chipped Amethyst -> 1 Unstacked Chipped Amethyst",
    Item: null,
    Input: "Chipped Amethyst Stack ",
    CubeRecipeDescription: "Chipped Amethyst Stack = Chipped Amethyst"
  },
  {
    Description: "3 Perfect Topaz -> 3x Stacked Perfect Topaz",
    Item: null,
    Input: "3 Perfect Topaz ",
    CubeRecipeDescription: "3 Perfect Topaz = 3 Perfect Topaz Stack"
  },
  {
    Description: "1 Stacked Perfect Topaz-> 1 Unstacked Perfect Topaz",
    Item: null,
    Input: "Perfect Topaz Stack ",
    CubeRecipeDescription: "Perfect Topaz Stack = Perfect Topaz"
  },
  {
    Description: "3 Flawless Topaz -> 3x Stacked Flawless Topaz",
    Item: null,
    Input: "3 Flawless Topaz ",
    CubeRecipeDescription: "3 Flawless Topaz = 3 Flawless Topaz Stack"
  },
  {
    Description: "1 Stacked Flawless Topaz -> 1 Unstacked Flawless Topaz",
    Item: null,
    Input: "Flawless Topaz Stack ",
    CubeRecipeDescription: "Flawless Topaz Stack = Flawless Topaz"
  },
  {
    Description: "3 Topaz -> 3x Stacked Topaz",
    Item: null,
    Input: "3 Topaz ",
    CubeRecipeDescription: "3 Topaz = 3 Topaz Stack"
  },
  {
    Description: "1 Stacked Topaz -> 1 Unstacked Topaz",
    Item: null,
    Input: "Topaz Stack ",
    CubeRecipeDescription: "Topaz Stack = Topaz"
  },
  {
    Description: "3 Flawed Topaz -> 3x Stacked Flawed Topaz",
    Item: null,
    Input: "3 Flawed Topaz ",
    CubeRecipeDescription: "3 Flawed Topaz = 3 Flawed Topaz Stack"
  },
  {
    Description: "1 Stacked Flawed Topaz -> 1 Unstacked Flawed Topaz",
    Item: null,
    Input: "Flawed Topaz Stack ",
    CubeRecipeDescription: "Flawed Topaz Stack = Flawed Topaz"
  },
  {
    Description: "3 Chipped Topaz -> 3x Stacked Chipped Topaz",
    Item: null,
    Input: "3 Chipped Topaz ",
    CubeRecipeDescription: "3 Chipped Topaz = 3 Chipped Topaz Stack"
  },
  {
    Description: "1 Stacked Chipped Topaz -> 1 Unstacked Chipped Topaz",
    Item: null,
    Input: "Chipped Topaz Stack ",
    CubeRecipeDescription: "Chipped Topaz Stack = Chipped Topaz"
  },
  {
    Description: "3 Perfect Sapphire -> 3x Stacked Perfect Sapphire",
    Item: null,
    Input: "3 Perfect Sapphire ",
    CubeRecipeDescription: "3 Perfect Sapphire = 3 Perfect Sapphire Stack"
  },
  {
    Description: "1 Stacked Perfect Sapphire -> 1 Unstacked Perfect Sapphire",
    Item: null,
    Input: "Perfect Sapphire Stack ",
    CubeRecipeDescription: "Perfect Sapphire Stack = Perfect Sapphire"
  },
  {
    Description: "3 Flawless Sapphire -> 3x Stacked Flawless Sapphire",
    Item: null,
    Input: "3 Flawless Sapphire ",
    CubeRecipeDescription: "3 Flawless Sapphire = 3 Flawless Sapphire Stack"
  },
  {
    Description: "1 Stacked Flawless Sapphire -> 1 Unstacked Flawless Sapphire",
    Item: null,
    Input: "Flawless Sapphire Stack ",
    CubeRecipeDescription: "Flawless Sapphire Stack = Flawless Sapphire"
  },
  {
    Description: "3 Sapphire -> 3x Stacked Sapphire",
    Item: null,
    Input: "3 Sapphire ",
    CubeRecipeDescription: "3 Sapphire = 3 Amethyst Stack"
  },
  {
    Description: "1 Stacked Sapphire -> 1 Unstacked Sapphire",
    Item: null,
    Input: "Sapphire Stack ",
    CubeRecipeDescription: "Sapphire Stack = Sapphire"
  },
  {
    Description: "3 Flawed Sapphire -> 3x Stacked Flawed Sapphire",
    Item: null,
    Input: "3 Flawed Sapphire ",
    CubeRecipeDescription: "3 Flawed Sapphire = 3 Flawed Sapphire Stack"
  },
  {
    Description: "1 Stacked Flawed Sapphire -> 1 Unstacked Flawed Sapphire",
    Item: null,
    Input: "Flawed Sapphire Stack ",
    CubeRecipeDescription: "Flawed Sapphire Stack = Flawed Sapphire"
  },
  {
    Description: "3 Chipped Sapphire -> 3x Stacked Chipped Sapphire",
    Item: null,
    Input: "3 Chipped Sapphire ",
    CubeRecipeDescription: "3 Chipped Sapphire = 3 Chipped Sapphire Stack"
  },
  {
    Description: "1 Stacked Chipped Sapphire -> 1 Unstacked Chipped Sapphire",
    Item: null,
    Input: "Chipped Sapphire Stack ",
    CubeRecipeDescription: "Chipped Sapphire Stack = Chipped Sapphire"
  },
  {
    Description: "3 Perfect Emerald-> 3x Stacked Perfect Emerald",
    Item: null,
    Input: "3 Perfect Emerald ",
    CubeRecipeDescription: "3 Perfect Emerald = 3 Perfect Emerald Stack"
  },
  {
    Description: "1 Stacked Perfect Emerald -> 1 Unstacked Perfect Emerald",
    Item: null,
    Input: "Perfect Emerald Stack ",
    CubeRecipeDescription: "Perfect Emerald Stack = Perfect Emerald"
  },
  {
    Description: "3 Flawless Emerald -> 3x Stacked Flawless Emerald",
    Item: null,
    Input: "3 Flawless Emerald ",
    CubeRecipeDescription: "3 Flawless Emerald = 3 Flawless Emerald Stack"
  },
  {
    Description: "1 Stacked Flawless Emerald -> 1 Unstacked Flawless Emerald",
    Item: null,
    Input: "Flawless Emerald Stack ",
    CubeRecipeDescription: "Flawless Emerald Stack = Flawless Emerald"
  },
  {
    Description: "3 Emerald -> 3x Stacked Emerald",
    Item: null,
    Input: "3 Emerald ",
    CubeRecipeDescription: "3 Emerald = 3 Emerald Stack"
  },
  {
    Description: "1 Stacked Emerald -> 1 Unstacked Emerald",
    Item: null,
    Input: "Emerald Stack ",
    CubeRecipeDescription: "Emerald Stack = Emerald"
  },
  {
    Description: "3 Flawed Emerald -> 3x Stacked Flawed Emerald",
    Item: null,
    Input: "3 Flawed Emerald ",
    CubeRecipeDescription: "3 Flawed Emerald = 3 Flawed Emerald Stack"
  },
  {
    Description: "1 Stacked Flawed Emerald -> 1 Unstacked Flawed Emerald",
    Item: null,
    Input: "Flawed Emerald Stack ",
    CubeRecipeDescription: "Flawed Emerald Stack = Flawed Emerald"
  },
  {
    Description: "3 Chipped Emerald-> 3x Stacked Chipped Emerald",
    Item: null,
    Input: "3 Chipped Emerald ",
    CubeRecipeDescription: "3 Chipped Emerald = 3 Chipped Emerald Stack"
  },
  {
    Description: "1 Stacked Chipped Emerald -> 1 Unstacked Chipped Emerald",
    Item: null,
    Input: "Chipped Emerald Stack ",
    CubeRecipeDescription: "Chipped Emerald Stack = Chipped Emerald"
  },
  {
    Description: "3 Perfect Ruby -> 3x Stacked Perfect Ruby",
    Item: null,
    Input: "3 Perfect Ruby ",
    CubeRecipeDescription: "3 Perfect Ruby = 3 Perfect Ruby Stack"
  },
  {
    Description: "1 Stacked Perfect Ruby -> 1 Unstacked Perfect Ruby",
    Item: null,
    Input: "Perfect Ruby Stack ",
    CubeRecipeDescription: "Perfect Ruby Stack = Perfect Ruby"
  },
  {
    Description: "3 Flawless Ruby -> 3x Stacked Flawless Ruby",
    Item: null,
    Input: "3 Flawless Ruby ",
    CubeRecipeDescription: "3 Flawless Ruby = 3 Flawless Ruby Stack"
  },
  {
    Description: "1 Stacked Flawless Ruby -> 1 Unstacked Flawless Ruby",
    Item: null,
    Input: "Flawless Ruby Stack ",
    CubeRecipeDescription: "Flawless Ruby Stack = Flawless Ruby"
  },
  {
    Description: "3 Ruby-> 3x Stacked Ruby",
    Item: null,
    Input: "3 Ruby ",
    CubeRecipeDescription: "3 Ruby = 3 Ruby Stack"
  },
  {
    Description: "1 Stacked Ruby -> 1 Unstacked Ruby",
    Item: null,
    Input: "Ruby Stack ",
    CubeRecipeDescription: "Ruby Stack = Ruby"
  },
  {
    Description: "3 Flawed Ruby -> 3x Stacked Flawed Ruby",
    Item: null,
    Input: "3 Flawed Ruby ",
    CubeRecipeDescription: "3 Flawed Ruby = 3 Flawed Ruby Stack"
  },
  {
    Description: "1 Stacked Flawed Ruby -> 1 Unstacked Flawed Ruby",
    Item: null,
    Input: "Flawed Ruby Stack ",
    CubeRecipeDescription: "Flawed Ruby Stack = Flawed Ruby"
  },
  {
    Description: "3 Chipped Ruby -> 3x Stacked Chipped Ruby",
    Item: null,
    Input: "3 Chipped Ruby ",
    CubeRecipeDescription: "3 Chipped Ruby = 3 Chipped Ruby Stack"
  },
  {
    Description: "1 Stacked Chipped Ruby -> 1 Unstacked Chipped Ruby",
    Item: null,
    Input: "Chipped Ruby Stack ",
    CubeRecipeDescription: "Chipped Ruby Stack = Chipped Ruby"
  },
  {
    Description: "3 Perfect Diamond -> 3x Stacked Perfect Diamond",
    Item: null,
    Input: "3 Perfect Diamond ",
    CubeRecipeDescription: "3 Perfect Diamond = 3 Perfect Diamond Stack"
  },
  {
    Description: "1 Stacked Perfect Diamond -> 1 Unstacked Perfect Diamond",
    Item: null,
    Input: "Perfect Diamond Stack ",
    CubeRecipeDescription: "Perfect Diamond Stack = Perfect Diamond"
  },
  {
    Description: "3 Flawless Diamond -> 3x Stacked Flawless Diamond",
    Item: null,
    Input: "3 Flawless Diamond ",
    CubeRecipeDescription: "3 Flawless Diamond = 3 Flawless Diamond Stack"
  },
  {
    Description: "1 Stacked Flawless Diamond -> 1 Unstacked Flawless Diamond",
    Item: null,
    Input: "Flawless Diamond Stack ",
    CubeRecipeDescription: "Flawless Diamond Stack = Flawless Diamond"
  },
  {
    Description: "3 Diamond -> 3x Stacked Diamons",
    Item: null,
    Input: "3 Diamond ",
    CubeRecipeDescription: "3 Diamond = 3 Diamond Stack"
  },
  {
    Description: "1 Stacked Diamond -> 1 Unstacked Diamond",
    Item: null,
    Input: "Diamond Stack ",
    CubeRecipeDescription: "Diamond Stack = Diamond"
  },
  {
    Description: "3 Flawed Diamond -> 3x Stacked Flawed Diamond",
    Item: null,
    Input: "3 Flawed Diamond ",
    CubeRecipeDescription: "3 Flawed Diamond = 3 Flawed Diamond Stack"
  },
  {
    Description: "1 Stacked Flawed Diamond -> 1 Unstacked Flawed Diamond",
    Item: null,
    Input: "Flawed Diamond Stack ",
    CubeRecipeDescription: "Flawed Diamond Stack = Flawed Diamond"
  },
  {
    Description: "3 Chipped Diamond -> 3x Stacked Chipped Diamond",
    Item: null,
    Input: "3 Chipped Diamond ",
    CubeRecipeDescription: "3 Chipped Diamond = 3 Chipped Diamond Stack"
  },
  {
    Description: "1 Stacked Chipped Diamond -> 1 Unstacked Chipped Diamond",
    Item: null,
    Input: "Chipped Diamond Stack ",
    CubeRecipeDescription: "Chipped Diamond Stack = Chipped Diamond"
  },
  {
    Description: "3 Perfect Skull -> 3x Stacked Perfect Skull",
    Item: null,
    Input: "3 Perfect Skull ",
    CubeRecipeDescription: "3 Perfect Skull = 3 Perfect Skull Stack"
  },
  {
    Description: "1 Stacked Perfect Skull -> 1 Unstacked Perfect Skull",
    Item: null,
    Input: "Perfect Skull Stack ",
    CubeRecipeDescription: "Perfect Skull Stack = Perfect Skull"
  },
  {
    Description: "3 Flawless Skull -> 3x Stacked Flawless Skull",
    Item: null,
    Input: "3 Flawless Skull ",
    CubeRecipeDescription: "3 Flawless Skull = 3 Flawless Skull Stack"
  },
  {
    Description: "1 Stacked Flawless Skull -> 1 Unstacked Flawless Skull",
    Item: null,
    Input: "Flawless Skull Stack ",
    CubeRecipeDescription: "Flawless Skull Stack = Flawless Skull"
  },
  {
    Description: "3 Skull-> 3x Stacked Skull",
    Item: null,
    Input: "3 Skull ",
    CubeRecipeDescription: "3 Skull = 3 Skull Stack"
  },
  {
    Description: "1 Stacked Skull -> 1 Unstacked Skull",
    Item: null,
    Input: "Skull Stack ",
    CubeRecipeDescription: "Skull Stack = Skull"
  },
  {
    Description: "3 Flawed Skull -> 3x Stacked Flawed Skull",
    Item: null,
    Input: "3 Flawed Skull ",
    CubeRecipeDescription: "3 Flawed Skull = 3 Flawed Skull Stack"
  },
  {
    Description: "1 Stacked Flawed Skull -> 1 Unstacked Flawed Skull",
    Item: null,
    Input: "Flawed Skull Stack ",
    CubeRecipeDescription: "Flawed Skull Stack = Flawed Skull"
  },
  {
    Description: "3 Chipped Skull -> 3x Stacked Chipped Skull",
    Item: null,
    Input: "3 Chipped Skull ",
    CubeRecipeDescription: "3 Chipped Skull = 3 Chipped Skull Stack"
  },
  {
    Description: "1 Stacked Chipped Skull-> 1 Unstacked Chipped Skull",
    Item: null,
    Input: "Chipped Skull Stack ",
    CubeRecipeDescription: "Chipped Skull Stack = Chipped Skull"
  },
  {
    Description: "1 Stacked El Rune -> 1 El Rune",
    Item: null,
    Input: "El Rune Stack ",
    CubeRecipeDescription: "El Rune Stack = El Rune"
  },
  {
    Description: "3 El Rune -> 3 Stacked El Rune",
    Item: null,
    Input: "3 El Rune ",
    CubeRecipeDescription: "3 El Rune = 3 El Rune Stack"
  },
  {
    Description: "1 Stacked Eld Rune -> 1 Eld Rune",
    Item: null,
    Input: "Eld Rune Stack ",
    CubeRecipeDescription: "Eld Rune Stack = Eld Rune"
  },
  {
    Description: "3 Eld Rune -> 3 Stacked Eld Rune",
    Item: null,
    Input: "3 Eld Rune ",
    CubeRecipeDescription: "3 Eld Rune = 3 Eld Rune Stack"
  },
  {
    Description: "1 Stacked Tir Rune -> 1 Tir Rune",
    Item: null,
    Input: "Tir Rune Stack ",
    CubeRecipeDescription: "Tir Rune Stack = Tir Rune"
  },
  {
    Description: "3 Tir Rune -> 3 Stacked Tir Rune",
    Item: null,
    Input: "3 Tir Rune ",
    CubeRecipeDescription: "3 Tir Rune = 3 Tir Rune Stack"
  },
  {
    Description: "1 Stacked Nef Rune -> 1 Nef Rune",
    Item: null,
    Input: "Nef Rune Stack ",
    CubeRecipeDescription: "Nef Rune Stack = Nef Rune"
  },
  {
    Description: "3 Nef Rune -> 3 Stacked Nef Rune",
    Item: null,
    Input: "3 Nef Rune ",
    CubeRecipeDescription: "3 Nef Rune = 3 Nef Rune Stack"
  },
  {
    Description: "1 Stacked Eth Rune -> 1 Eth Rune",
    Item: null,
    Input: "Eth Rune Stack ",
    CubeRecipeDescription: "Eth Rune Stack = Eth Rune"
  },
  {
    Description: "3 Eth Rune -> 3 Stacked Eth Rune",
    Item: null,
    Input: "3 Eth Rune ",
    CubeRecipeDescription: "3 Eth Rune = 3 Eth Rune Stack"
  },
  {
    Description: "1 Stacked Ith Rune -> 1 Ith Rune",
    Item: null,
    Input: "Ith Rune Stack ",
    CubeRecipeDescription: "Ith Rune Stack = Ith Rune"
  },
  {
    Description: "3 Ith Rune -> 3 Stacked Ith Rune",
    Item: null,
    Input: "3 Ith Rune ",
    CubeRecipeDescription: "3 Ith Rune = 3 Ith Rune Stack"
  },
  {
    Description: "1 Stacked Tal Rune -> 1 Tal Rune",
    Item: null,
    Input: "Tal Rune Stack ",
    CubeRecipeDescription: "Tal Rune Stack = Tal Rune"
  },
  {
    Description: "3 Tal Rune -> 3 Stacked Tal Rune",
    Item: null,
    Input: "3 Tal Rune ",
    CubeRecipeDescription: "3 Tal Rune = 3 Tal Rune Stack"
  },
  {
    Description: "1 Stacked Ral Rune -> 1 Ral Rune",
    Item: null,
    Input: "Ral Rune Stack ",
    CubeRecipeDescription: "Ral Rune Stack = Ral Rune"
  },
  {
    Description: "3 Ral Rune -> 3 Stacked Ral Rune",
    Item: null,
    Input: "3 Ral Rune ",
    CubeRecipeDescription: "3 Ral Rune = 3 Ral Rune Stack"
  },
  {
    Description: "1 Stacked Ort Rune -> 1 Ort Rune",
    Item: null,
    Input: "Ort Rune Stack ",
    CubeRecipeDescription: "Ort Rune Stack = Ort Rune"
  },
  {
    Description: "3 Ort Rune -> 3 Stacked Ort Rune",
    Item: null,
    Input: "3 Ort Rune ",
    CubeRecipeDescription: "3 Ort Rune = 3 Ort Rune Stack"
  },
  {
    Description: "1 Stacked Thul Rune -> 1 Thul Rune",
    Item: null,
    Input: "Thul Rune Stack ",
    CubeRecipeDescription: "Thul Rune Stack = Thul Rune"
  },
  {
    Description: "3 Thul Rune -> 3 Stacked Thul Rune",
    Item: null,
    Input: "3 Thul Rune ",
    CubeRecipeDescription: "3 Thul Rune = 3 Thul Rune Stack"
  },
  {
    Description: "1 Stacked Amn Rune -> 1 Amn Rune",
    Item: null,
    Input: "Amn Rune Stack ",
    CubeRecipeDescription: "Amn Rune Stack = Amn Rune"
  },
  {
    Description: "3 Amn Rune -> 3 Stacked Amn Rune",
    Item: null,
    Input: "3 Amn Rune ",
    CubeRecipeDescription: "3 Amn Rune = 3 Amn Rune Stack"
  },
  {
    Description: "1 Stacked Sol Rune -> 1 Sol Rune",
    Item: null,
    Input: "Sol Rune Stack ",
    CubeRecipeDescription: "Sol Rune Stack = Sol Rune"
  },
  {
    Description: "3 Sol Rune -> 3 Stacked Sol Rune",
    Item: null,
    Input: "3 Sol Rune ",
    CubeRecipeDescription: "3 Sol Rune = 3 Sol Rune Stack"
  },
  {
    Description: "1 Stacked Shael Rune -> 1 Shael Rune",
    Item: null,
    Input: "Shael Rune Stack ",
    CubeRecipeDescription: "Shael Rune Stack = Shael Rune"
  },
  {
    Description: "3 Shael Rune -> 3 Stacked Shael Rune",
    Item: null,
    Input: "3 Shael Rune ",
    CubeRecipeDescription: "3 Shael Rune = 3 Shael Rune Stack"
  },
  {
    Description: "1 Stacked Dol Rune -> 1 Dol Rune",
    Item: null,
    Input: "Dol Rune Stack ",
    CubeRecipeDescription: "Dol Rune Stack = Dol Rune"
  },
  {
    Description: "3 Dol Rune -> 3 Stacked Dol Rune",
    Item: null,
    Input: "3 Dol Rune ",
    CubeRecipeDescription: "3 Dol Rune = 3 Dol Rune Stack"
  },
  {
    Description: "1 Stacked Hel Rune -> 1 Hel Rune",
    Item: null,
    Input: "Hel Rune Stack ",
    CubeRecipeDescription: "Hel Rune Stack = Hel Rune"
  },
  {
    Description: "3 Hel Rune -> 3 Stacked Hel Rune",
    Item: null,
    Input: "3 Hel Rune ",
    CubeRecipeDescription: "3 Hel Rune = 3 Hel Rune Stack"
  },
  {
    Description: "1 Stacked Io Rune -> 1 Io Rune",
    Item: null,
    Input: "Io Rune Stack ",
    CubeRecipeDescription: "Io Rune Stack = Io Rune"
  },
  {
    Description: "3 Io Rune -> 3 Stacked Io Rune",
    Item: null,
    Input: "3 Io Rune ",
    CubeRecipeDescription: "3 Io Rune = 3 Io Rune Stack"
  },
  {
    Description: "1 Stacked Lum Rune -> 1 Lum Rune",
    Item: null,
    Input: "Lum Rune Stack ",
    CubeRecipeDescription: "Lum Rune Stack = Lum Rune"
  },
  {
    Description: "3 Lum Rune -> 3 Stacked Lum Rune",
    Item: null,
    Input: "3 Lum Rune ",
    CubeRecipeDescription: "3 Lum Rune = 3 Lum Rune Stack"
  },
  {
    Description: "1 Stacked Ko Rune -> 1 Ko Rune",
    Item: null,
    Input: "Ko Rune Stack ",
    CubeRecipeDescription: "Ko Rune Stack = Ko Rune"
  },
  {
    Description: "3 Ko Rune -> 3 Stacked Ko Rune",
    Item: null,
    Input: "3 Ko Rune ",
    CubeRecipeDescription: "3 Ko Rune = 3 Ko Rune Stack"
  },
  {
    Description: "1 Stacked Fal Rune -> 1 Fal Rune",
    Item: null,
    Input: "Fal Rune Stack ",
    CubeRecipeDescription: "Fal Rune Stack = Fal Rune"
  },
  {
    Description: "3 Fal Rune -> 3 Stacked Fal Rune",
    Item: null,
    Input: "3 Fal Rune ",
    CubeRecipeDescription: "3 Fal Rune = 3 Fal Rune Stack"
  },
  {
    Description: "1 Stacked Lem Rune -> 1 Lem Rune",
    Item: null,
    Input: "Lem Rune Stack ",
    CubeRecipeDescription: "Lem Rune Stack = Lem Rune"
  },
  {
    Description: "3 Lem Rune -> 3 Stacked Lem Rune",
    Item: null,
    Input: "3 Lem Rune ",
    CubeRecipeDescription: "3 Lem Rune = 3 Lem Rune Stack"
  },
  {
    Description: "1 Stacked Pul Rune -> 1 Pul Rune",
    Item: null,
    Input: "Pul Rune Stack ",
    CubeRecipeDescription: "Pul Rune Stack = Pul Rune"
  },
  {
    Description: "3 Pul Rune -> 3 Stacked Pul Rune",
    Item: null,
    Input: "3 Pul Rune ",
    CubeRecipeDescription: "3 Pul Rune = 3 Pul Rune Stack"
  },
  {
    Description: "1 Stacked Um Rune -> 1 Um Rune",
    Item: null,
    Input: "Um Rune Stack ",
    CubeRecipeDescription: "Um Rune Stack = Um Rune"
  },
  {
    Description: "3 Um Rune -> 3 Stacked Um Rune",
    Item: null,
    Input: "3 Um Rune ",
    CubeRecipeDescription: "3 Um Rune = 3 Um Rune Stack"
  },
  {
    Description: "1 Stacked Mal Rune -> 1 Mal Rune",
    Item: null,
    Input: "Mal Rune Stack ",
    CubeRecipeDescription: "Mal Rune Stack = Mal Rune"
  },
  {
    Description: "3 Mal Rune -> 3 Stacked Mal Rune",
    Item: null,
    Input: "3 Mal Rune ",
    CubeRecipeDescription: "3 Mal Rune = 3 Mal Rune Stack"
  },
  {
    Description: "1 Stacked Ist Rune -> 1 Ist Rune",
    Item: null,
    Input: "Ist Rune Stack ",
    CubeRecipeDescription: "Ist Rune Stack = Ist Rune"
  },
  {
    Description: "3 Ist Rune -> 3 Stacked Ist Rune",
    Item: null,
    Input: "3 Ist Rune ",
    CubeRecipeDescription: "3 Ist Rune = 3 Ist Rune Stack"
  },
  {
    Description: "1 Stacked Gul Rune -> 1 Gul Rune",
    Item: null,
    Input: "Gul Rune Stack ",
    CubeRecipeDescription: "Gul Rune Stack = Gul Rune"
  },
  {
    Description: "3 Gul Rune -> 3 Stacked Gul Rune",
    Item: null,
    Input: "3 Gul Rune ",
    CubeRecipeDescription: "3 Gul Rune = 3 Gul Rune Stack"
  },
  {
    Description: "1 Stacked Vex Rune -> 1 Vex Rune",
    Item: null,
    Input: "Vex Rune Stack ",
    CubeRecipeDescription: "Vex Rune Stack = Vex Rune"
  },
  {
    Description: "3 Vex Rune -> 3 Stacked Vex Rune",
    Item: null,
    Input: "3 Vex Rune ",
    CubeRecipeDescription: "3 Vex Rune = 3 Vex Rune Stack"
  },
  {
    Description: "1 Stacked Ohm Rune -> 1 Ohm Rune",
    Item: null,
    Input: "Ohm Rune Stack ",
    CubeRecipeDescription: "Ohm Rune Stack = Ohm Rune"
  },
  {
    Description: "3 Ohm Rune -> 3 Stacked Ohm Rune",
    Item: null,
    Input: "3 Ohm Rune ",
    CubeRecipeDescription: "3 Ohm Rune = 3 Ohm Rune Stack"
  },
  {
    Description: "1 Stacked Lo Rune -> 1 Lo Rune",
    Item: null,
    Input: "Lo Rune Stack ",
    CubeRecipeDescription: "Lo Rune Stack = Lo Rune"
  },
  {
    Description: "3 Lo Rune -> 3 Stacked Lo Rune",
    Item: null,
    Input: "3 Lo Rune ",
    CubeRecipeDescription: "3 Lo Rune = 3 Lo Rune Stack"
  },
  {
    Description: "1 Stacked Sur Rune -> 1 Sur Rune",
    Item: null,
    Input: "Sur Rune Stack ",
    CubeRecipeDescription: "Sur Rune Stack = Sur Rune"
  },
  {
    Description: "3 Sur Rune -> 3 Stacked Sur Rune",
    Item: null,
    Input: "3 Sur Rune ",
    CubeRecipeDescription: "3 Sur Rune = 3 Sur Rune Stack"
  },
  {
    Description: "1 Stacked Ber Rune -> 1 Ber Rune",
    Item: null,
    Input: "Ber Rune Stack ",
    CubeRecipeDescription: "Ber Rune Stack = Ber Rune"
  },
  {
    Description: "3 Ber Rune -> 3 Stacked Ber Rune",
    Item: null,
    Input: "3 Ber Rune ",
    CubeRecipeDescription: "3 Ber Rune = 3 Ber Rune Stack"
  },
  {
    Description: "1 Stacked Jah Rune -> 1 Jah Rune",
    Item: null,
    Input: "Jah Rune Stack ",
    CubeRecipeDescription: "Jah Rune Stack = Jah Rune"
  },
  {
    Description: "3 Jah Rune -> 3 Stacked Jah Rune",
    Item: null,
    Input: "3 Jah Rune ",
    CubeRecipeDescription: "3 Jah Rune = 3 Jah Rune Stack"
  },
  {
    Description: "1 Stacked Cham Rune -> 1 Cham Rune",
    Item: null,
    Input: "Cham Rune Stack ",
    CubeRecipeDescription: "Cham Rune Stack = Cham Rune"
  },
  {
    Description: "3 Cham Rune -> 3 Stacked Cham Rune",
    Item: null,
    Input: "3 Cham Rune ",
    CubeRecipeDescription: "3 Cham Rune = 3 Cham Rune Stack"
  },
  {
    Description: "1 Stacked Zod Rune -> 1 Zod Rune",
    Item: null,
    Input: "Zod Rune Stack ",
    CubeRecipeDescription: "Zod Rune Stack = Zod Rune"
  },
  {
    Description: "3 Zod Rune -> 3 Stacked Zod Rune",
    Item: null,
    Input: "3 Zod Rune ",
    CubeRecipeDescription: "3 Zod Rune = 3 Zod Rune Stack"
  },
  {
    Description: "Town Portal Scroll -> Snapchip's Soul + Perfect Skull -> Pitzilla Red Portal",
    Item: null,
    Input: "Perfect Skull + Scroll of Town Portal + Snapchip's Soul ",
    CubeRecipeDescription: "Perfect Skull + Scroll Of Town Portal + Snapchip's Soul = 137 Red Portal"
  },
  {
    Description: "Town Portal Scroll -> Snapchip's Soul + Stacked Perfect Skull -> Pitzilla Red Portal",
    Item: null,
    Input: "Perfect Skull Stack + Scroll of Town Portal + Snapchip's Soul ",
    CubeRecipeDescription: "Perfect Skull Stack + Scroll Of Town Portal + Snapchip's Soul = 137 Red Portal"
  },
  {
    Description: "Terror Key + Hate Key + Destruction Key + ID Scroll -> Keychain",
    Item: null,
    Input: "Key of Terror + Key of Hate + Key of Destruction + Scroll of Identify ",
    CubeRecipeDescription: "Key Of Terror + Key Of Hate + Key Of Destruction + Scroll Of Identify = Storage For Keys"
  },
  {
    Description: "Keychain + Terror Key -> Increment +1 to Terror Key Quantity",
    Item: null,
    Input: "Storage for Keys + Key of Terror ",
    CubeRecipeDescription: "Storage For Keys + Key Of Terror = "
  },
  {
    Description: "Keychain + Hate Key -> Increment +1 to Hate Key Quantity",
    Item: null,
    Input: "Storage for Keys + Key of Hate ",
    CubeRecipeDescription: "Storage For Keys + Key Of Hate = "
  },
  {
    Description: "Keychain + Destruction Key -> Increment +1 to Destruction Key Quantity",
    Item: null,
    Input: "Storage for Keys + Key of Destruction ",
    CubeRecipeDescription: "Storage For Keys + Key Of Destruction = "
  },
  {
    Description: "Keychain + 2x Terror Key -> Increment +2 to Terror Key Quantity",
    Item: null,
    Input: "Storage for Keys + 2 Key of Terror ",
    CubeRecipeDescription: "Storage For Keys + 2 Key Of Terror = Storage For Keys"
  },
  {
    Description: "Keychain + 2x Hate Key -> Increment +2 to Hate Key Quantity",
    Item: null,
    Input: "Storage for Keys + 2 Key of Hate ",
    CubeRecipeDescription: "Storage For Keys + 2 Key Of Hate = Storage For Keys"
  },
  {
    Description: "Keychain + 2x Destruction Key -> Increment +2 to Destruction Key Quantity",
    Item: null,
    Input: "Storage for Keys + 2 Key of Destruction ",
    CubeRecipeDescription: "Storage For Keys + 2 Key Of Destruction = Storage For Keys"
  },
  {
    Description: "Keychain + 3x Terror Key -> Increment +3 to Terror Key Quantity",
    Item: null,
    Input: "Storage for Keys + 3 Key of Terror ",
    CubeRecipeDescription: "Storage For Keys + 3 Key Of Terror = Storage For Keys"
  },
  {
    Description: "Keychain + 3x Hate Key -> Increment +3 to Hate Key Quantity",
    Item: null,
    Input: "Storage for Keys + 3 Key of Hate ",
    CubeRecipeDescription: "Storage For Keys + 3 Key Of Hate = Storage For Keys"
  },
  {
    Description: "Keychain + 3x Destruction Key -> Increment +3 to Destruction Key Quantity",
    Item: null,
    Input: "Storage for Keys + 3 Key of Destruction ",
    CubeRecipeDescription: "Storage For Keys + 3 Key Of Destruction = Storage For Keys"
  },
  {
    Description: "Keychain + Terror Key Grabber -> Descrease 1 to Terror Key Quantity + 1 Terror Key",
    Item: null,
    Input: "Storage for Keys + Terror Key Grabber ",
    CubeRecipeDescription: "Storage For Keys + Terror Key Grabber = Storage For Keys"
  },
  {
    Description: "Keychain + Hate Key Grabber -> Descrease 1 to Hate Key Quantity + 1 Hate Key",
    Item: null,
    Input: "Storage for Keys + Hate Key Grabber ",
    CubeRecipeDescription: "Storage For Keys + Hate Key Grabber = Storage For Keys"
  },
  {
    Description: "Keychain + Destruction Key Grabber -> Descrease 1 to Destruction Key Quantity + 1 Destruction Key",
    Item: null,
    Input: "Storage for Keys + Desctruction Key Grabber ",
    CubeRecipeDescription: "Storage For Keys + Desctruction Key Grabber = Storage For Keys"
  },
  {
    Description: "Terror Key Grabber -> Hate Key Grabber",
    Item: null,
    Input: "Terror Key Grabber ",
    CubeRecipeDescription: "Terror Key Grabber = Hate Key Grabber"
  },
  {
    Description: "Hate Key Grabber -> Destruction Key Grabber",
    Item: null,
    Input: "Hate Key Grabber ",
    CubeRecipeDescription: "Hate Key Grabber = Desctruction Key Grabber"
  },
  {
    Description: "Desctruction Key Grabber -> Terror Key Grabber",
    Item: null,
    Input: "Desctruction Key Grabber ",
    CubeRecipeDescription: "Desctruction Key Grabber = Terror Key Grabber"
  },
  {
    Description: "Perfect Topaz + Gem Bag -> +16 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + Perfect Topaz ",
    CubeRecipeDescription: "Gem Bag + Perfect Topaz = Gem Bag"
  },
  {
    Description: "2x Perfect Topaz + Gem Bag -> +32 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 2 Perfect Topaz ",
    CubeRecipeDescription: "Gem Bag + 2 Perfect Topaz = Gem Bag"
  },
  {
    Description: "3x Perfect Topaz + Gem Bag -> +48 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 3 Perfect Topaz ",
    CubeRecipeDescription: "Gem Bag + 3 Perfect Topaz = Gem Bag"
  },
  {
    Description: "4x Perfect Topaz + Gem Bag -> +64 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 4 Perfect Topaz ",
    CubeRecipeDescription: "Gem Bag + 4 Perfect Topaz = Gem Bag"
  },
  {
    Description: "Perfect Amethyst + Gem Bag -> +16 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + Perfect Amethyst ",
    CubeRecipeDescription: "Gem Bag + Perfect Amethyst = Gem Bag"
  },
  {
    Description: "2x Perfect Amethyst + Gem Bag -> +32 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 2 Perfect Amethyst ",
    CubeRecipeDescription: "Gem Bag + 2 Perfect Amethyst = Gem Bag"
  },
  {
    Description: "3x Perfect Amethyst + Gem Bag -> +48 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 3 Perfect Amethyst ",
    CubeRecipeDescription: "Gem Bag + 3 Perfect Amethyst = Gem Bag"
  },
  {
    Description: "4x Perfect Amethyst + Gem Bag -> +64 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 4 Perfect Amethyst ",
    CubeRecipeDescription: "Gem Bag + 4 Perfect Amethyst = Gem Bag"
  },
  {
    Description: "Perfect Diamond + Gem Bag -> +16 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + Perfect Diamond ",
    CubeRecipeDescription: "Gem Bag + Perfect Diamond = Gem Bag"
  },
  {
    Description: "2x Perfect Diamond + Gem Bag -> +32 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 2 Perfect Diamond ",
    CubeRecipeDescription: "Gem Bag + 2 Perfect Diamond = Gem Bag"
  },
  {
    Description: "3x Perfect Diamond + Gem Bag -> +48 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 3 Perfect Diamond ",
    CubeRecipeDescription: "Gem Bag + 3 Perfect Diamond = Gem Bag"
  },
  {
    Description: "4x Perfect Diamond + Gem Bag -> +64 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 4 Perfect Diamond ",
    CubeRecipeDescription: "Gem Bag + 4 Perfect Diamond = Gem Bag"
  },
  {
    Description: "Perfect Emerald + Gem Bag -> +16 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + Perfect Emerald ",
    CubeRecipeDescription: "Gem Bag + Perfect Emerald = Gem Bag"
  },
  {
    Description: "2x Perfect Emerald + Gem Bag -> +32 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 2 Perfect Emerald ",
    CubeRecipeDescription: "Gem Bag + 2 Perfect Emerald = Gem Bag"
  },
  {
    Description: "3x Perfect Emerald + Gem Bag -> +48 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 3 Perfect Emerald ",
    CubeRecipeDescription: "Gem Bag + 3 Perfect Emerald = Gem Bag"
  },
  {
    Description: "4x Perfect Emerald + Gem Bag -> +64 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 4 Perfect Emerald ",
    CubeRecipeDescription: "Gem Bag + 4 Perfect Emerald = Gem Bag"
  },
  {
    Description: "Perfect Ruby + Gem Bag -> +16 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + Perfect Ruby ",
    CubeRecipeDescription: "Gem Bag + Perfect Ruby = Gem Bag"
  },
  {
    Description: "2x Perfect Ruby + Gem Bag -> +32 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 2 Perfect Ruby ",
    CubeRecipeDescription: "Gem Bag + 2 Perfect Ruby = Gem Bag"
  },
  {
    Description: "3x Perfect Ruby + Gem Bag -> +48 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 3 Perfect Ruby ",
    CubeRecipeDescription: "Gem Bag + 3 Perfect Ruby = Gem Bag"
  },
  {
    Description: "4x Perfect Ruby + Gem Bag -> +64 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 4 Perfect Ruby ",
    CubeRecipeDescription: "Gem Bag + 4 Perfect Ruby = Gem Bag"
  },
  {
    Description: "Perfect Skull + Gem Bag -> +16 to Skull Credits",
    Item: null,
    Input: "Gem Bag + Perfect Skull ",
    CubeRecipeDescription: "Gem Bag + Perfect Skull = Gem Bag"
  },
  {
    Description: "2x Perfect Skull + Gem Bag -> +32 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 2 Perfect Skull ",
    CubeRecipeDescription: "Gem Bag + 2 Perfect Skull = Gem Bag"
  },
  {
    Description: "3x Perfect Skull + Gem Bag -> +48 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 3 Perfect Skull ",
    CubeRecipeDescription: "Gem Bag + 3 Perfect Skull = Gem Bag"
  },
  {
    Description: "4x Perfect Skull + Gem Bag -> +64 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 4 Perfect Skull ",
    CubeRecipeDescription: "Gem Bag + 4 Perfect Skull = Gem Bag"
  },
  {
    Description: "Perfect Sapphire + Gem Bag -> +16 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + Perfect Sapphire ",
    CubeRecipeDescription: "Gem Bag + Perfect Sapphire = Gem Bag"
  },
  {
    Description: "2x Perfect Sapphire + Gem Bag -> +32 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 2 Perfect Sapphire ",
    CubeRecipeDescription: "Gem Bag + 2 Perfect Sapphire = Gem Bag"
  },
  {
    Description: "3x Perfect Sapphire + Gem Bag -> +48 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 3 Perfect Sapphire ",
    CubeRecipeDescription: "Gem Bag + 3 Perfect Sapphire = Gem Bag"
  },
  {
    Description: "4x Perfect Sapphire + Gem Bag -> +64 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 4 Perfect Sapphire ",
    CubeRecipeDescription: "Gem Bag + 4 Perfect Sapphire = Gem Bag"
  },
  {
    Description: "Flawless Topaz + Gem Bag -> +8 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + Flawless Topaz ",
    CubeRecipeDescription: "Gem Bag + Flawless Topaz = Gem Bag"
  },
  {
    Description: "2x Flawless Topaz + Gem Bag -> +16 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawless Topaz ",
    CubeRecipeDescription: "Gem Bag + 2 Flawless Topaz = Gem Bag"
  },
  {
    Description: "3x Flawless Topaz + Gem Bag -> +24 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawless Topaz ",
    CubeRecipeDescription: "Gem Bag + 3 Flawless Topaz = Gem Bag"
  },
  {
    Description: "4x Flawless Topaz + Gem Bag -> +32 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawless Topaz ",
    CubeRecipeDescription: "Gem Bag + 4 Flawless Topaz = Gem Bag"
  },
  {
    Description: "Flawless Amethyst + Gem Bag -> +8 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + Flawless Amethyst ",
    CubeRecipeDescription: "Gem Bag + Flawless Amethyst = Gem Bag"
  },
  {
    Description: "2x Flawless Amethyst + Gem Bag -> +16 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawless Amethyst ",
    CubeRecipeDescription: "Gem Bag + 2 Flawless Amethyst = Gem Bag"
  },
  {
    Description: "3x Flawless Amethyst + Gem Bag -> +24 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawless Amethyst ",
    CubeRecipeDescription: "Gem Bag + 3 Flawless Amethyst = Gem Bag"
  },
  {
    Description: "4x Flawless Amethyst + Gem Bag -> +32 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawless Amethyst ",
    CubeRecipeDescription: "Gem Bag + 4 Flawless Amethyst = Gem Bag"
  },
  {
    Description: "Flawless Diamond + Gem Bag -> +8 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + Flawless Diamond ",
    CubeRecipeDescription: "Gem Bag + Flawless Diamond = Gem Bag"
  },
  {
    Description: "2x Flawless Diamond + Gem Bag -> +16 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawless Diamond ",
    CubeRecipeDescription: "Gem Bag + 2 Flawless Diamond = Gem Bag"
  },
  {
    Description: "3x Flawless Diamond + Gem Bag -> +24 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawless Diamond ",
    CubeRecipeDescription: "Gem Bag + 3 Flawless Diamond = Gem Bag"
  },
  {
    Description: "4x Flawless Diamond + Gem Bag -> +32 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawless Diamond ",
    CubeRecipeDescription: "Gem Bag + 4 Flawless Diamond = Gem Bag"
  },
  {
    Description: "Flawless Emerald + Gem Bag -> +8 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + Flawless Emerald ",
    CubeRecipeDescription: "Gem Bag + Flawless Emerald = Gem Bag"
  },
  {
    Description: "2x Flawless Emerald + Gem Bag -> +16 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawless Emerald ",
    CubeRecipeDescription: "Gem Bag + 2 Flawless Emerald = Gem Bag"
  },
  {
    Description: "3x Flawless Emerald + Gem Bag -> +24 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawless Emerald ",
    CubeRecipeDescription: "Gem Bag + 3 Flawless Emerald = Gem Bag"
  },
  {
    Description: "4x Flawless Emerald + Gem Bag -> +32 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawless Emerald ",
    CubeRecipeDescription: "Gem Bag + 4 Flawless Emerald = Gem Bag"
  },
  {
    Description: "Flawless Ruby + Gem Bag -> +8 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + Flawless Ruby ",
    CubeRecipeDescription: "Gem Bag + Flawless Ruby = Gem Bag"
  },
  {
    Description: "2x Flawless Ruby + Gem Bag -> +16 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawless Ruby ",
    CubeRecipeDescription: "Gem Bag + 2 Flawless Ruby = Gem Bag"
  },
  {
    Description: "3x Flawless Ruby + Gem Bag -> +24 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawless Ruby ",
    CubeRecipeDescription: "Gem Bag + 3 Flawless Ruby = Gem Bag"
  },
  {
    Description: "4x Flawless Ruby + Gem Bag -> +32 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawless Ruby ",
    CubeRecipeDescription: "Gem Bag + 4 Flawless Ruby = Gem Bag"
  },
  {
    Description: "Flawless Skull + Gem Bag -> +8 to Skull Credits",
    Item: null,
    Input: "Gem Bag + Flawless Skull ",
    CubeRecipeDescription: "Gem Bag + Flawless Skull = Gem Bag"
  },
  {
    Description: "2x Flawless Skull + Gem Bag -> +16 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawless Skull ",
    CubeRecipeDescription: "Gem Bag + 2 Flawless Skull = Gem Bag"
  },
  {
    Description: "3x Flawless Skull + Gem Bag -> +24 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawless Skull ",
    CubeRecipeDescription: "Gem Bag + 3 Flawless Skull = Gem Bag"
  },
  {
    Description: "4x Flawless Skull + Gem Bag -> +32 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawless Skull ",
    CubeRecipeDescription: "Gem Bag + 4 Flawless Skull = Gem Bag"
  },
  {
    Description: "Flawless Sapphire + Gem Bag -> +8 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + Flawless Sapphire ",
    CubeRecipeDescription: "Gem Bag + Flawless Sapphire = Gem Bag"
  },
  {
    Description: "2x Flawless Sapphire + Gem Bag -> +16 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawless Sapphire ",
    CubeRecipeDescription: "Gem Bag + 2 Flawless Sapphire = Gem Bag"
  },
  {
    Description: "3x Flawless Sapphire + Gem Bag -> +24 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawless Sapphire ",
    CubeRecipeDescription: "Gem Bag + 3 Flawless Sapphire = Gem Bag"
  },
  {
    Description: "4x Flawless Sapphire + Gem Bag -> +32 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawless Sapphire ",
    CubeRecipeDescription: "Gem Bag + 4 Flawless Sapphire = Gem Bag"
  },
  {
    Description: "Topaz + Gem Bag -> +4 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + Topaz ",
    CubeRecipeDescription: "Gem Bag + Topaz = Gem Bag"
  },
  {
    Description: "2x Topaz + Gem Bag -> +8 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 2 Topaz ",
    CubeRecipeDescription: "Gem Bag + 2 Topaz = Gem Bag"
  },
  {
    Description: "3x Topaz + Gem Bag -> +12 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 3 Topaz ",
    CubeRecipeDescription: "Gem Bag + 3 Topaz = Gem Bag"
  },
  {
    Description: "4x Topaz + Gem Bag -> +16 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 4 Topaz ",
    CubeRecipeDescription: "Gem Bag + 4 Topaz = Gem Bag"
  },
  {
    Description: "Amethyst + Gem Bag -> +4 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + Amethyst ",
    CubeRecipeDescription: "Gem Bag + Amethyst = Gem Bag"
  },
  {
    Description: "2x Amethyst + Gem Bag -> +8 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 2 Amethyst ",
    CubeRecipeDescription: "Gem Bag + 2 Amethyst = Gem Bag"
  },
  {
    Description: "3x Amethyst + Gem Bag -> +12 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 3 Amethyst ",
    CubeRecipeDescription: "Gem Bag + 3 Amethyst = Gem Bag"
  },
  {
    Description: "4x Amethyst + Gem Bag -> +16 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 4 Amethyst ",
    CubeRecipeDescription: "Gem Bag + 4 Amethyst = Gem Bag"
  },
  {
    Description: "Diamond + Gem Bag -> +4 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + Diamond ",
    CubeRecipeDescription: "Gem Bag + Diamond = Gem Bag"
  },
  {
    Description: "2x Diamond + Gem Bag -> +8 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 2 Diamond ",
    CubeRecipeDescription: "Gem Bag + 2 Diamond = Gem Bag"
  },
  {
    Description: "3x Diamond + Gem Bag -> +12 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 3 Diamond ",
    CubeRecipeDescription: "Gem Bag + 3 Diamond = Gem Bag"
  },
  {
    Description: "4x Diamond + Gem Bag -> +16 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 4 Diamond ",
    CubeRecipeDescription: "Gem Bag + 4 Diamond = Gem Bag"
  },
  {
    Description: "Emerald + Gem Bag -> +4 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + Emerald ",
    CubeRecipeDescription: "Gem Bag + Emerald = Gem Bag"
  },
  {
    Description: "2x Emerald + Gem Bag -> +8 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 2 Emerald ",
    CubeRecipeDescription: "Gem Bag + 2 Emerald = Gem Bag"
  },
  {
    Description: "3x Emerald + Gem Bag -> +12 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 3 Emerald ",
    CubeRecipeDescription: "Gem Bag + 3 Emerald = Gem Bag"
  },
  {
    Description: "4x Emerald + Gem Bag -> +16 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 4 Emerald ",
    CubeRecipeDescription: "Gem Bag + 4 Emerald = Gem Bag"
  },
  {
    Description: "Ruby + Gem Bag -> +4 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + Ruby ",
    CubeRecipeDescription: "Gem Bag + Ruby = Gem Bag"
  },
  {
    Description: "2x Ruby + Gem Bag -> +8 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 2 Ruby ",
    CubeRecipeDescription: "Gem Bag + 2 Ruby = Gem Bag"
  },
  {
    Description: "3x Ruby + Gem Bag -> +12 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 3 Ruby ",
    CubeRecipeDescription: "Gem Bag + 3 Ruby = Gem Bag"
  },
  {
    Description: "4x Ruby + Gem Bag -> +16 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 4 Ruby ",
    CubeRecipeDescription: "Gem Bag + 4 Ruby = Gem Bag"
  },
  {
    Description: "Skull + Gem Bag -> +4 to Skull Credits",
    Item: null,
    Input: "Gem Bag + Skull ",
    CubeRecipeDescription: "Gem Bag + Skull = Gem Bag"
  },
  {
    Description: "2x Skull + Gem Bag -> +8 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 2 Skull ",
    CubeRecipeDescription: "Gem Bag + 2 Skull = Gem Bag"
  },
  {
    Description: "3x Skull + Gem Bag -> +12 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 3 Skull ",
    CubeRecipeDescription: "Gem Bag + 3 Skull = Gem Bag"
  },
  {
    Description: "4x Skull + Gem Bag -> +16 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 4 Skull ",
    CubeRecipeDescription: "Gem Bag + 4 Skull = Gem Bag"
  },
  {
    Description: "Sapphire + Gem Bag -> +4 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + Sapphire ",
    CubeRecipeDescription: "Gem Bag + Sapphire = Gem Bag"
  },
  {
    Description: "2x Sapphire + Gem Bag -> +8 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 2 Sapphire ",
    CubeRecipeDescription: "Gem Bag + 2 Sapphire = Gem Bag"
  },
  {
    Description: "3x Sapphire + Gem Bag -> +12 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 3 Sapphire ",
    CubeRecipeDescription: "Gem Bag + 3 Sapphire = Gem Bag"
  },
  {
    Description: "4x Sapphire + Gem Bag -> +16 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 4 Sapphire ",
    CubeRecipeDescription: "Gem Bag + 4 Sapphire = Gem Bag"
  },
  {
    Description: "Flawed Topaz + Gem Bag -> +2 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + Flawed Topaz ",
    CubeRecipeDescription: "Gem Bag + Flawed Topaz = Gem Bag"
  },
  {
    Description: "2x Flawed Topaz + Gem Bag -> +4 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawed Topaz ",
    CubeRecipeDescription: "Gem Bag + 2 Flawed Topaz = Gem Bag"
  },
  {
    Description: "3x Flawed Topaz + Gem Bag -> +6 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawed Topaz ",
    CubeRecipeDescription: "Gem Bag + 3 Flawed Topaz = Gem Bag"
  },
  {
    Description: "4x Flawed Topaz + Gem Bag -> +8 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawed Topaz ",
    CubeRecipeDescription: "Gem Bag + 4 Flawed Topaz = Gem Bag"
  },
  {
    Description: "Flawed Amethyst + Gem Bag -> +2 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + Flawed Amethyst ",
    CubeRecipeDescription: "Gem Bag + Flawed Amethyst = Gem Bag"
  },
  {
    Description: "2x Flawed Amethyst + Gem Bag -> +4 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawed Amethyst ",
    CubeRecipeDescription: "Gem Bag + 2 Flawed Amethyst = Gem Bag"
  },
  {
    Description: "3x Flawed Amethyst + Gem Bag -> +6 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawed Amethyst ",
    CubeRecipeDescription: "Gem Bag + 3 Flawed Amethyst = Gem Bag"
  },
  {
    Description: "4x Flawed Amethyst + Gem Bag -> +8 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawed Amethyst ",
    CubeRecipeDescription: "Gem Bag + 4 Flawed Amethyst = Gem Bag"
  },
  {
    Description: "Flawed Diamond + Gem Bag -> +2 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + Flawed Diamond ",
    CubeRecipeDescription: "Gem Bag + Flawed Diamond = Gem Bag"
  },
  {
    Description: "2x Flawed Diamond + Gem Bag -> +4 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawed Diamond ",
    CubeRecipeDescription: "Gem Bag + 2 Flawed Diamond = Gem Bag"
  },
  {
    Description: "3x Flawed Diamond + Gem Bag -> +6 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawed Diamond ",
    CubeRecipeDescription: "Gem Bag + 3 Flawed Diamond = Gem Bag"
  },
  {
    Description: "4x Flawed Diamond + Gem Bag -> +8 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawed Diamond ",
    CubeRecipeDescription: "Gem Bag + 4 Flawed Diamond = Gem Bag"
  },
  {
    Description: "Flawed Emerald + Gem Bag -> +2 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + Flawed Emerald ",
    CubeRecipeDescription: "Gem Bag + Flawed Emerald = Gem Bag"
  },
  {
    Description: "2x Flawed Emerald + Gem Bag -> +4 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawed Emerald ",
    CubeRecipeDescription: "Gem Bag + 2 Flawed Emerald = Gem Bag"
  },
  {
    Description: "3x Flawed Emerald + Gem Bag -> +6 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawed Emerald ",
    CubeRecipeDescription: "Gem Bag + 3 Flawed Emerald = Gem Bag"
  },
  {
    Description: "4x Flawed Emerald + Gem Bag -> +8 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawed Emerald ",
    CubeRecipeDescription: "Gem Bag + 4 Flawed Emerald = Gem Bag"
  },
  {
    Description: "Flawed Ruby + Gem Bag -> +2 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + Flawed Ruby ",
    CubeRecipeDescription: "Gem Bag + Flawed Ruby = Gem Bag"
  },
  {
    Description: "2x Flawed Ruby + Gem Bag -> +4 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawed Ruby ",
    CubeRecipeDescription: "Gem Bag + 2 Flawed Ruby = Gem Bag"
  },
  {
    Description: "3x Flawed Ruby + Gem Bag -> +6 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawed Ruby ",
    CubeRecipeDescription: "Gem Bag + 3 Flawed Ruby = Gem Bag"
  },
  {
    Description: "4x Flawed Ruby + Gem Bag -> +8 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawed Ruby ",
    CubeRecipeDescription: "Gem Bag + 4 Flawed Ruby = Gem Bag"
  },
  {
    Description: "Flawed Skull + Gem Bag -> +2 to Skull Credits",
    Item: null,
    Input: "Gem Bag + Flawed Skull ",
    CubeRecipeDescription: "Gem Bag + Flawed Skull = Gem Bag"
  },
  {
    Description: "2x Flawed Skull + Gem Bag -> +4 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawed Skull ",
    CubeRecipeDescription: "Gem Bag + 2 Flawed Skull = Gem Bag"
  },
  {
    Description: "3x Flawed Skull + Gem Bag -> +6 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawed Skull ",
    CubeRecipeDescription: "Gem Bag + 3 Flawed Skull = Gem Bag"
  },
  {
    Description: "4x Flawed Skull + Gem Bag -> +8 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawed Skull ",
    CubeRecipeDescription: "Gem Bag + 4 Flawed Skull = Gem Bag"
  },
  {
    Description: "Flawed Sapphire + Gem Bag -> +2 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + Flawed Sapphire ",
    CubeRecipeDescription: "Gem Bag + Flawed Sapphire = Gem Bag"
  },
  {
    Description: "2x Flawed Sapphire + Gem Bag -> +4 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 2 Flawed Sapphire ",
    CubeRecipeDescription: "Gem Bag + 2 Flawed Sapphire = Gem Bag"
  },
  {
    Description: "3x Flawed Sapphire + Gem Bag -> +6 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 3 Flawed Sapphire ",
    CubeRecipeDescription: "Gem Bag + 3 Flawed Sapphire = Gem Bag"
  },
  {
    Description: "4x Flawed Sapphire + Gem Bag -> +8 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 4 Flawed Sapphire ",
    CubeRecipeDescription: "Gem Bag + 4 Flawed Sapphire = Gem Bag"
  },
  {
    Description: "Chipped Topaz + Gem Bag -> +1 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + Chipped Topaz ",
    CubeRecipeDescription: "Gem Bag + Chipped Topaz = Gem Bag"
  },
  {
    Description: "2x Chipped Topaz + Gem Bag -> +2 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 2 Chipped Topaz ",
    CubeRecipeDescription: "Gem Bag + 2 Chipped Topaz = Gem Bag"
  },
  {
    Description: "3x Chipped Topaz + Gem Bag -> +3 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 3 Chipped Topaz ",
    CubeRecipeDescription: "Gem Bag + 3 Chipped Topaz = Gem Bag"
  },
  {
    Description: "4x Chipped Topaz + Gem Bag -> +4 to Topaz Credits",
    Item: null,
    Input: "Gem Bag + 4 Chipped Topaz ",
    CubeRecipeDescription: "Gem Bag + 4 Chipped Topaz = Gem Bag"
  },
  {
    Description: "Chipped Amethyst + Gem Bag -> +1 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + Chipped Amethyst ",
    CubeRecipeDescription: "Gem Bag + Chipped Amethyst = Gem Bag"
  },
  {
    Description: "2x Chipped Amethyst + Gem Bag -> +2 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 2 Chipped Amethyst ",
    CubeRecipeDescription: "Gem Bag + 2 Chipped Amethyst = Gem Bag"
  },
  {
    Description: "3x Chipped Amethyst + Gem Bag -> +3 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 3 Chipped Amethyst ",
    CubeRecipeDescription: "Gem Bag + 3 Chipped Amethyst = Gem Bag"
  },
  {
    Description: "4x Chipped Amethyst + Gem Bag -> +4 to Amethyst Credits",
    Item: null,
    Input: "Gem Bag + 4 Chipped Amethyst ",
    CubeRecipeDescription: "Gem Bag + 4 Chipped Amethyst = Gem Bag"
  },
  {
    Description: "Chipped Diamond + Gem Bag -> +1 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + Chipped Diamond ",
    CubeRecipeDescription: "Gem Bag + Chipped Diamond = Gem Bag"
  },
  {
    Description: "2x Chipped Diamond + Gem Bag -> +2 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 2 Chipped Diamond ",
    CubeRecipeDescription: "Gem Bag + 2 Chipped Diamond = Gem Bag"
  },
  {
    Description: "3x Chipped Diamond + Gem Bag -> +3 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 3 Chipped Diamond ",
    CubeRecipeDescription: "Gem Bag + 3 Chipped Diamond = Gem Bag"
  },
  {
    Description: "4x Chipped Diamond + Gem Bag -> +4 to Diamond Credits",
    Item: null,
    Input: "Gem Bag + 4 Chipped Diamond ",
    CubeRecipeDescription: "Gem Bag + 4 Chipped Diamond = Gem Bag"
  },
  {
    Description: "Chipped Emerald + Gem Bag -> +1 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + Chipped Emerald ",
    CubeRecipeDescription: "Gem Bag + Chipped Emerald = Gem Bag"
  },
  {
    Description: "2x Chipped Emerald + Gem Bag -> +2 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 2 Chipped Emerald ",
    CubeRecipeDescription: "Gem Bag + 2 Chipped Emerald = Gem Bag"
  },
  {
    Description: "3x Chipped Emerald + Gem Bag -> +3 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 3 Chipped Emerald ",
    CubeRecipeDescription: "Gem Bag + 3 Chipped Emerald = Gem Bag"
  },
  {
    Description: "4x Chipped Emerald + Gem Bag -> +4 to Emerald Credits",
    Item: null,
    Input: "Gem Bag + 4 Chipped Emerald ",
    CubeRecipeDescription: "Gem Bag + 4 Chipped Emerald = Gem Bag"
  },
  {
    Description: "Chipped Ruby + Gem Bag -> +1 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + Chipped Ruby ",
    CubeRecipeDescription: "Gem Bag + Chipped Ruby = Gem Bag"
  },
  {
    Description: "2x Chipped Ruby + Gem Bag -> +2 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 2 Chipped Ruby ",
    CubeRecipeDescription: "Gem Bag + 2 Chipped Ruby = Gem Bag"
  },
  {
    Description: "3x Chipped Ruby + Gem Bag -> +3 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 3 Chipped Ruby ",
    CubeRecipeDescription: "Gem Bag + 3 Chipped Ruby = Gem Bag"
  },
  {
    Description: "4x Chipped Ruby + Gem Bag -> +4 to Ruby Credits",
    Item: null,
    Input: "Gem Bag + 4 Chipped Ruby ",
    CubeRecipeDescription: "Gem Bag + 4 Chipped Ruby = Gem Bag"
  },
  {
    Description: "Chipped Skull + Gem Bag -> +1 to Skull Credits",
    Item: null,
    Input: "Gem Bag + Chipped Skull ",
    CubeRecipeDescription: "Gem Bag + Chipped Skull = Gem Bag"
  },
  {
    Description: "2x Chipped Skull + Gem Bag -> +2 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 2 Chipped Skull ",
    CubeRecipeDescription: "Gem Bag + 2 Chipped Skull = Gem Bag"
  },
  {
    Description: "3x Chipped Skull + Gem Bag -> +3 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 3 Chipped Skull ",
    CubeRecipeDescription: "Gem Bag + 3 Chipped Skull = Gem Bag"
  },
  {
    Description: "4x Chipped Skull + Gem Bag -> +4 to Skull Credits",
    Item: null,
    Input: "Gem Bag + 4 Chipped Skull ",
    CubeRecipeDescription: "Gem Bag + 4 Chipped Skull = Gem Bag"
  },
  {
    Description: "Chipped Sapphire + Gem Bag -> +1 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + Chipped Sapphire ",
    CubeRecipeDescription: "Gem Bag + Chipped Sapphire = Gem Bag"
  },
  {
    Description: "2x Chipped Sapphire + Gem Bag -> +2 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 2 Chipped Sapphire ",
    CubeRecipeDescription: "Gem Bag + 2 Chipped Sapphire = Gem Bag"
  },
  {
    Description: "3x Chipped Sapphire + Gem Bag -> +3 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 3 Chipped Sapphire ",
    CubeRecipeDescription: "Gem Bag + 3 Chipped Sapphire = Gem Bag"
  },
  {
    Description: "4x Chipped Sapphire + Gem Bag -> +4 to Sapphire Credits",
    Item: null,
    Input: "Gem Bag + 4 Chipped Sapphire ",
    CubeRecipeDescription: "Gem Bag + 4 Chipped Sapphire = Gem Bag"
  },
  {
    Description: "Gem Bag + Perfect Topaz Grabber = Perfect Topaz",
    Item: null,
    Input: "Gem Bag + Perfect Topaz Grabber ",
    CubeRecipeDescription: "Gem Bag + Perfect Topaz Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Perfect Amethyst Grabber = Perfect Amethyst",
    Item: null,
    Input: "Gem Bag + Perfect Amethyst Grabber ",
    CubeRecipeDescription: "Gem Bag + Perfect Amethyst Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Perfect Diamond Grabber = Perfect Diamond",
    Item: null,
    Input: "Gem Bag + Perfect Diamond Grabber ",
    CubeRecipeDescription: "Gem Bag + Perfect Diamond Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Perfect Emerald Grabber = Perfect Emerald",
    Item: null,
    Input: "Gem Bag + Perfect Emerald Grabber ",
    CubeRecipeDescription: "Gem Bag + Perfect Emerald Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Perfect Ruby Grabber = Perfect Ruby",
    Item: null,
    Input: "Gem Bag + Perfect Ruby Grabber ",
    CubeRecipeDescription: "Gem Bag + Perfect Ruby Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Perfect Skull Grabber = Perfect Skull",
    Item: null,
    Input: "Gem Bag + Perfect Skull Grabber ",
    CubeRecipeDescription: "Gem Bag + Perfect Skull Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Perfect Sapphire Grabber = Perfect Sapphire",
    Item: null,
    Input: "Gem Bag + Perfect Sapphire Grabber ",
    CubeRecipeDescription: "Gem Bag + Perfect Sapphire Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawless Topaz Grabber = Flawless Topaz",
    Item: null,
    Input: "Gem Bag + Flawless Topaz Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawless Topaz Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawless Amethyst Grabber = Flawless Amethyst",
    Item: null,
    Input: "Gem Bag + Flawless Amethyst Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawless Amethyst Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawless Diamond Grabber = Flawless Diamond",
    Item: null,
    Input: "Gem Bag + Flawless Diamond Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawless Diamond Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawless Emerald Grabber = Flawless Emerald",
    Item: null,
    Input: "Gem Bag + Flawless Emerald Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawless Emerald Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawless Ruby Grabber = Flawless Ruby",
    Item: null,
    Input: "Gem Bag + Flawless Ruby Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawless Ruby Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawless Skull Grabber = Flawless Skull",
    Item: null,
    Input: "Gem Bag + Flawless Skull Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawless Skull Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawless Sapphire Grabber = Flawless Sapphire",
    Item: null,
    Input: "Gem Bag + Flawless Sapphire Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawless Sapphire Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Topaz Grabber = Topaz",
    Item: null,
    Input: "Gem Bag + Topaz Grabber ",
    CubeRecipeDescription: "Gem Bag + Topaz Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Amethyst Grabber = Perfect Amethyst",
    Item: null,
    Input: "Gem Bag + Amethyst Grabber ",
    CubeRecipeDescription: "Gem Bag + Amethyst Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Diamond Grabber =  Diamond",
    Item: null,
    Input: "Gem Bag + Diamond Grabber ",
    CubeRecipeDescription: "Gem Bag + Diamond Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Emerald Grabber = Emerald",
    Item: null,
    Input: "Gem Bag + Emerald Grabber ",
    CubeRecipeDescription: "Gem Bag + Emerald Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Ruby Grabber = Ruby",
    Item: null,
    Input: "Gem Bag + Ruby Grabber ",
    CubeRecipeDescription: "Gem Bag + Ruby Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Skull Grabber = Skull",
    Item: null,
    Input: "Gem Bag + Skull Grabber ",
    CubeRecipeDescription: "Gem Bag + Skull Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Sapphire Grabber = Sapphire",
    Item: null,
    Input: "Gem Bag + Sapphire Grabber ",
    CubeRecipeDescription: "Gem Bag + Sapphire Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Topaz Grabber = Flawed Topaz",
    Item: null,
    Input: "Gem Bag + Flawed Topaz Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawed Topaz Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawed Amethyst Grabber = Flawed Amethyst",
    Item: null,
    Input: "Gem Bag + Flawed Amethyst Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawed Amethyst Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawed Diamond Grabber = Flawed Diamond",
    Item: null,
    Input: "Gem Bag + Flawed Diamond Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawed Diamond Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawed Emerald Grabber = Flawed Emerald",
    Item: null,
    Input: "Gem Bag + Flawed Emerald Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawed Emerald Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawed Ruby Grabber = Flawed Ruby",
    Item: null,
    Input: "Gem Bag + Flawed Ruby Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawed Ruby Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawed Skull Grabber = Flawed Skull",
    Item: null,
    Input: "Gem Bag + Flawed Skull Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawed Skull Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Flawed Sapphire Grabber = Flawed Sapphire",
    Item: null,
    Input: "Gem Bag + Flawed Sapphire Grabber ",
    CubeRecipeDescription: "Gem Bag + Flawed Sapphire Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Chipped Topaz Grabber = Chipped Topaz",
    Item: null,
    Input: "Gem Bag + Chipped Topaz Grabber ",
    CubeRecipeDescription: "Gem Bag + Chipped Topaz Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Chipped Amethyst Grabber = Chipped Amethyst",
    Item: null,
    Input: "Gem Bag + Chipped Amethyst Grabber ",
    CubeRecipeDescription: "Gem Bag + Chipped Amethyst Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Chipped Diamond Grabber = Chipped Diamond",
    Item: null,
    Input: "Gem Bag + Chipped Diamond Grabber ",
    CubeRecipeDescription: "Gem Bag + Chipped Diamond Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Chipped Emerald Grabber = Chipped Emerald",
    Item: null,
    Input: "Gem Bag + Chipped Emerald Grabber ",
    CubeRecipeDescription: "Gem Bag + Chipped Emerald Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Chipped Ruby Grabber = Chipped Ruby",
    Item: null,
    Input: "Gem Bag + Chipped Ruby Grabber ",
    CubeRecipeDescription: "Gem Bag + Chipped Ruby Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Chipped Skull Grabber = Chipped Skull",
    Item: null,
    Input: "Gem Bag + Chipped Skull Grabber ",
    CubeRecipeDescription: "Gem Bag + Chipped Skull Grabber = Gem Bag"
  },
  {
    Description: "Gem Bag + Chipped Sapphire Grabber = Chipped Sapphire",
    Item: null,
    Input: "Gem Bag + Chipped Sapphire Grabber ",
    CubeRecipeDescription: "Gem Bag + Chipped Sapphire Grabber = Gem Bag"
  },
  {
    Description: "All Chipped Gems = Gem Bag",
    Item: null,
    Input: "Chipped Topaz + Chipped Amethyst + Chipped Diamond + Chipped Emerald + Chipped Ruby + Chipped Skull + Chipped Sapphire ",
    CubeRecipeDescription: "Chipped Topaz + Chipped Amethyst + Chipped Diamond + Chipped Emerald + Chipped Ruby + Chipped Skull + Chipped Sapphire = Gem Bag"
  },
  {
    Description: "Chipped Topaz Grabber = Flawed Topaz Grabber",
    Item: null,
    Input: "Chipped Topaz Grabber ",
    CubeRecipeDescription: "Chipped Topaz Grabber = Flawed Topaz Grabber"
  },
  {
    Description: "Flawed Topaz Grabber = Topaz Grabber",
    Item: null,
    Input: "Flawed Topaz Grabber ",
    CubeRecipeDescription: "Flawed Topaz Grabber = Topaz Grabber"
  },
  {
    Description: "Topaz Grabber = Flawless Topaz Grabber",
    Item: null,
    Input: "Topaz Grabber ",
    CubeRecipeDescription: "Topaz Grabber = Flawless Topaz Grabber"
  },
  {
    Description: "Flawless Topaz Grabber = Perfect Topaz Grabber",
    Item: null,
    Input: "Flawless Topaz Grabber ",
    CubeRecipeDescription: "Flawless Topaz Grabber = Perfect Topaz Grabber"
  },
  {
    Description: "Perfect Topaz Grabber = Chipped Topaz Grabber",
    Item: null,
    Input: "Perfect Topaz Grabber ",
    CubeRecipeDescription: "Perfect Topaz Grabber = Chipped Topaz Grabber"
  },
  {
    Description: "Chipped Sapphire Grabber = Flawed Sapphire Grabber",
    Item: null,
    Input: "Chipped Sapphire Grabber ",
    CubeRecipeDescription: "Chipped Sapphire Grabber = Flawed Sapphire Grabber"
  },
  {
    Description: "Flawed Sapphire Grabber = Sapphire Grabber",
    Item: null,
    Input: "Flawed Sapphire Grabber ",
    CubeRecipeDescription: "Flawed Sapphire Grabber = Sapphire Grabber"
  },
  {
    Description: "Sapphire Grabber = Flawless Sapphire Grabber",
    Item: null,
    Input: "Sapphire Grabber ",
    CubeRecipeDescription: "Sapphire Grabber = Flawless Sapphire Grabber"
  },
  {
    Description: "Flawless Sapphire Grabber = Perfect Sapphire Grabber",
    Item: null,
    Input: "Flawless Sapphire Grabber ",
    CubeRecipeDescription: "Flawless Sapphire Grabber = Perfect Sapphire Grabber"
  },
  {
    Description: "Perfect Sapphire Grabber = Chipped Sapphire Grabber",
    Item: null,
    Input: "Perfect Sapphire Grabber ",
    CubeRecipeDescription: "Perfect Sapphire Grabber = Chipped Sapphire Grabber"
  },
  {
    Description: "Chipped Ruby Grabber = Flawed Ruby Grabber",
    Item: null,
    Input: "Chipped Ruby Grabber ",
    CubeRecipeDescription: "Chipped Ruby Grabber = Flawed Ruby Grabber"
  },
  {
    Description: "Flawed Ruby Grabber = Ruby Grabber",
    Item: null,
    Input: "Flawed Ruby Grabber ",
    CubeRecipeDescription: "Flawed Ruby Grabber = Ruby Grabber"
  },
  {
    Description: "Ruby Grabber = Flawless Ruby Grabber",
    Item: null,
    Input: "Ruby Grabber ",
    CubeRecipeDescription: "Ruby Grabber = Flawless Ruby Grabber"
  },
  {
    Description: "Flawless Ruby Grabber = Perfect Ruby Grabber",
    Item: null,
    Input: "Flawless Ruby Grabber ",
    CubeRecipeDescription: "Flawless Ruby Grabber = Perfect Ruby Grabber"
  },
  {
    Description: "Perfect Ruby Grabber = Chipped Ruby Grabber",
    Item: null,
    Input: "Perfect Ruby Grabber ",
    CubeRecipeDescription: "Perfect Ruby Grabber = Chipped Ruby Grabber"
  },
  {
    Description: "Chipped Emerald Grabber = Flawed Emerald Grabber",
    Item: null,
    Input: "Chipped Emerald Grabber ",
    CubeRecipeDescription: "Chipped Emerald Grabber = Flawed Emerald Grabber"
  },
  {
    Description: "Flawed Emerald Grabber = Emerald Grabber",
    Item: null,
    Input: "Flawed Emerald Grabber ",
    CubeRecipeDescription: "Flawed Emerald Grabber = Emerald Grabber"
  },
  {
    Description: "Emerald Grabber = Flawless Emerald Grabber",
    Item: null,
    Input: "Emerald Grabber ",
    CubeRecipeDescription: "Emerald Grabber = Flawless Emerald Grabber"
  },
  {
    Description: "Flawless Emerald Grabber = Perfect Emerald Grabber",
    Item: null,
    Input: "Flawless Emerald Grabber ",
    CubeRecipeDescription: "Flawless Emerald Grabber = Perfect Emerald Grabber"
  },
  {
    Description: "Perfect Emerald Grabber = Chipped Emerald Grabber",
    Item: null,
    Input: "Perfect Emerald Grabber ",
    CubeRecipeDescription: "Perfect Emerald Grabber = Chipped Emerald Grabber"
  },
  {
    Description: "Chipped Diamond Grabber = Flawed Diamond Grabber",
    Item: null,
    Input: "Chipped Diamond Grabber ",
    CubeRecipeDescription: "Chipped Diamond Grabber = Flawed Diamond Grabber"
  },
  {
    Description: "Flawed Diamond Grabber = Diamond Grabber",
    Item: null,
    Input: "Flawed Diamond Grabber ",
    CubeRecipeDescription: "Flawed Diamond Grabber = Diamond Grabber"
  },
  {
    Description: "Diamond Grabber = Flawless Diamond Grabber",
    Item: null,
    Input: "Diamond Grabber ",
    CubeRecipeDescription: "Diamond Grabber = Flawless Diamond Grabber"
  },
  {
    Description: "Flawless Diamond Grabber = Perfect Diamond Grabber",
    Item: null,
    Input: "Flawless Diamond Grabber ",
    CubeRecipeDescription: "Flawless Diamond Grabber = Perfect Diamond Grabber"
  },
  {
    Description: "Perfect Diamond Grabber = Chipped Diamond Grabber",
    Item: null,
    Input: "Perfect Diamond Grabber ",
    CubeRecipeDescription: "Perfect Diamond Grabber = Chipped Diamond Grabber"
  },
  {
    Description: "Chipped Skull Grabber = Flawed Skull Grabber",
    Item: null,
    Input: "Chipped Skull Grabber ",
    CubeRecipeDescription: "Chipped Skull Grabber = Flawed Skull Grabber"
  },
  {
    Description: "Flawed Skull Grabber = Skull Grabber",
    Item: null,
    Input: "Flawed Skull Grabber ",
    CubeRecipeDescription: "Flawed Skull Grabber = Skull Grabber"
  },
  {
    Description: "Skull Grabber = Flawless Skull Grabber",
    Item: null,
    Input: "Skull Grabber ",
    CubeRecipeDescription: "Skull Grabber = Flawless Skull Grabber"
  },
  {
    Description: "Flawless Skull Grabber = Perfect Skull Grabber",
    Item: null,
    Input: "Flawless Skull Grabber ",
    CubeRecipeDescription: "Flawless Skull Grabber = Perfect Skull Grabber"
  },
  {
    Description: "Perfect Skull Grabber = Chipped Skull Grabber",
    Item: null,
    Input: "Perfect Skull Grabber ",
    CubeRecipeDescription: "Perfect Skull Grabber = Chipped Skull Grabber"
  },
  {
    Description: "Chipped Amethyst Grabber = Flawed Amethyst Grabber",
    Item: null,
    Input: "Chipped Amethyst Grabber ",
    CubeRecipeDescription: "Chipped Amethyst Grabber = Flawed Amethyst Grabber"
  },
  {
    Description: "Flawed Amethyst Grabber = Amethyst Grabber",
    Item: null,
    Input: "Flawed Amethyst Grabber ",
    CubeRecipeDescription: "Flawed Amethyst Grabber = Amethyst Grabber"
  },
  {
    Description: "Amethyst Grabber = Flawless Amethyst Grabber",
    Item: null,
    Input: "Amethyst Grabber ",
    CubeRecipeDescription: "Amethyst Grabber = Flawless Amethyst Grabber"
  },
  {
    Description: "Flawless Amethyst Grabber = Perfect Amethyst Grabber",
    Item: null,
    Input: "Flawless Amethyst Grabber ",
    CubeRecipeDescription: "Flawless Amethyst Grabber = Perfect Amethyst Grabber"
  },
  {
    Description: "Perfect Amethyst Grabber = Chipped Amethyst Grabber",
    Item: null,
    Input: "Perfect Amethyst Grabber ",
    CubeRecipeDescription: "Perfect Amethyst Grabber = Chipped Amethyst Grabber"
  },
  {
    Description: "Chipped Topaz = Chipped Topaz Grabber",
    Item: null,
    Input: "Chipped Topaz ",
    CubeRecipeDescription: "Chipped Topaz = Chipped Topaz Grabber"
  },
  {
    Description: "Chipped Sapphire = Chipped Sapphire Grabber",
    Item: null,
    Input: "Chipped Sapphire ",
    CubeRecipeDescription: "Chipped Sapphire = Chipped Sapphire Grabber"
  },
  {
    Description: "Chipped Ruby = Chipped Ruby Grabber",
    Item: null,
    Input: "Chipped Ruby ",
    CubeRecipeDescription: "Chipped Ruby = Chipped Ruby Grabber"
  },
  {
    Description: "Chipped Skull = Chipped Skull Grabber",
    Item: null,
    Input: "Chipped Skull ",
    CubeRecipeDescription: "Chipped Skull = Chipped Skull Grabber"
  },
  {
    Description: "Chipped Emerald = Chipped Emerald Grabber",
    Item: null,
    Input: "Chipped Emerald ",
    CubeRecipeDescription: "Chipped Emerald = Chipped Emerald Grabber"
  },
  {
    Description: "Chipped Diamond = Chipped Diamond Grabber",
    Item: null,
    Input: "Chipped Diamond ",
    CubeRecipeDescription: "Chipped Diamond = Chipped Diamond Grabber"
  },
  {
    Description: "Chipped Amethyst = Chipped Amethyst Grabber",
    Item: null,
    Input: "Chipped Amethyst ",
    CubeRecipeDescription: "Chipped Amethyst = Chipped Amethyst Grabber"
  },
  {
    Description: "Occam's Razor + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Occam's Razor + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Occam's Razor + Scroll Of Identify + Scroll Of Town Portal = Occam's Razor"
  },
  {
    Description: "Curseweaver + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Curseweaver + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Curseweaver + Scroll Of Identify + Scroll Of Town Portal = Curseweaver"
  },
  {
    Description: "Eater of Souls + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Eater of Souls + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Eater Of Souls + Scroll Of Identify + Scroll Of Town Portal = Eater Of Souls"
  },
  {
    Description: "Stunhummer + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Stunhummer + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Stunhummer + Scroll Of Identify + Scroll Of Town Portal = Stunhummer"
  },
  {
    Description: "Spiritcrusher + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Spirit Crusher + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Spirit Crusher + Scroll Of Identify + Scroll Of Town Portal = Spirit Crusher"
  },
  {
    Description: "Readiness for War + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Readiness for War + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Readiness For War + Scroll Of Identify + Scroll Of Town Portal = Readiness For War"
  },
  {
    Description: "Shattered Dreams + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Shattered Dreams + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Shattered Dreams + Scroll Of Identify + Scroll Of Town Portal = Shattered Dreams"
  },
  {
    Description: "Ruemonger + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Ruemonger + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Ruemonger + Scroll Of Identify + Scroll Of Town Portal = Ruemonger"
  },
  {
    Description: "Jouster's Boast + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Jouster's Boast + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Jouster's Boast + Scroll Of Identify + Scroll Of Town Portal = Jouster's Boast"
  },
  {
    Description: "Cadin'Sor + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Cadin'Sor + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Cadin'sor + Scroll Of Identify + Scroll Of Town Portal = Cadin'sor"
  },
  {
    Description: "Gnomebane + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Gnomebane + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Gnomebane + Scroll Of Identify + Scroll Of Town Portal = Gnomebane"
  },
  {
    Description: "Shieldmaiden's Shield + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Shieldmaiden's Pavise + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Shieldmaiden's Pavise + Scroll Of Identify + Scroll Of Town Portal = Shieldmaiden's Pavise"
  },
  {
    Description: "Murder's Mistress + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Murder's Mistress + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Murder's Mistress + Scroll Of Identify + Scroll Of Town Portal = Murder's Mistress"
  },
  {
    Description: "Ravings of the Mad + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Ravings of the Mad + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Ravings Of The Mad + Scroll Of Identify + Scroll Of Town Portal = Ravings Of The Mad"
  },
  {
    Description: "Simpering Edge + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Simpering Edge + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Simpering Edge + Scroll Of Identify + Scroll Of Town Portal = Simpering Edge"
  },
  {
    Description: "Moonlight Edge + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Moonlight Edge + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Moonlight Edge + Scroll Of Identify + Scroll Of Town Portal = Moonlight Edge"
  },
  {
    Description: "Titan's Reach + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Titan's Reach + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Titan's Reach + Scroll Of Identify + Scroll Of Town Portal = Titan's Reach"
  },
  {
    Description: "Set12.2 + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Bound by Honor + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Bound By Honor + Scroll Of Identify + Scroll Of Town Portal = Bound By Honor"
  },
  {
    Description: "Set15.1 + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Holy Shroud of Amaunator + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Holy Shroud Of Amaunator + Scroll Of Identify + Scroll Of Town Portal = Holy Shroud Of Amaunator"
  },
  {
    Description: "Set16.4 + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Girdle of Kitthix + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Girdle Of Kitthix + Scroll Of Identify + Scroll Of Town Portal = Girdle Of Kitthix"
  },
  {
    Description: "Set16.5 + scroll of TP + scroll of ID = updated item",
    Item: null,
    Input: "Gauntlets of Quietus + Scroll of Identify + Scroll of Town Portal ",
    CubeRecipeDescription: "Gauntlets Of Quietus + Scroll Of Identify + Scroll Of Town Portal = Gauntlets Of Quietus"
  },
  {
    Description: "1 Ral Rune + 1 Sol Rune + 1 Perfect Emerald + 1 Normal Set Weapon -> Exceptional Set Weapon",
    Item: null,
    Input: "basic Set Weapon + Ral Rune + Sol Rune + Perfect Emerald ",
    CubeRecipeDescription: "Basic Set Weapon + Ral Rune + Sol Rune + Perfect Emerald = Exceptional Weapon"
  },
  {
    Description: "1 Tal Rune + 1 Shael Rune + 1 Perfect Diamond + 1 Normal Set Armor -> Exceptional Set Armor",
    Item: null,
    Input: "basic Set Any Armor + Tal Rune + Shael Rune + Perfect Diamond ",
    CubeRecipeDescription: "Basic Set Any Armor + Tal Rune + Shael Rune + Perfect Diamond = Exceptional Any Armor"
  },
  {
    Description: "1 Lum Rune + 1 Pul Rune + 1 Perfect Emerald + 1 Exceptional Set Weapon -> Elite Set Weapon",
    Item: null,
    Input: "exceptional Set Weapon + Lum Rune + Pul Rune + Perfect Emerald ",
    CubeRecipeDescription: "Exceptional Set Weapon + Lum Rune + Pul Rune + Perfect Emerald = Elite Weapon"
  },
  {
    Description: "1 Ko Rune + 1 Lem Rune + 1 Perfect Diamond + 1 Exceptional Set Armor -> Elite Set Armor",
    Item: null,
    Input: "exceptional Set Any Armor + Ko Rune + Lem Rune + Perfect Diamond ",
    CubeRecipeDescription: "Exceptional Set Any Armor + Ko Rune + Lem Rune + Perfect Diamond = Elite Any Armor"
  },
  {
    Description: "1 t1 Splash Charm + 1 any chipped gem = 1 t2 Splash Charm",
    Item: null,
    Input: "Collin's Might + Chipped Gem ",
    CubeRecipeDescription: "Collin's Might + Chipped Gem = Collin's Fury"
  },
  {
    Description: "1 t2 Splash Charm + 1 El-Rune + 1 any flawed gem  = 1 t3 Splash Charm",
    Item: null,
    Input: "Collin's Fury + El Rune + Flawed Gem ",
    CubeRecipeDescription: "Collin's Fury + El Rune + Flawed Gem = Collin's Devastation"
  },
  {
    Description: "1 t3 Splash Charm + 1 Ort-Rune + 1 any flawless gem = 1 t4 Splash Charm",
    Item: null,
    Input: "Collin's Devastation + Ort Rune + Flawless Gem ",
    CubeRecipeDescription: "Collin's Devastation + Ort Rune + Flawless Gem = Tier 4 Splash Charm"
  },
  {
    Description: "1 t4 Splash Charm + 1 Shael-Rune + 2 any perfect gem + 1 magic jewel = 1 t5 Splash Charm",
    Item: null,
    Input: "Tier 4 Splash Charm + Shael Rune + 2 Perfect Gem Stack + Magic Jewel ",
    CubeRecipeDescription: "Tier 4 Splash Charm + Shael Rune + 2 Perfect Gem Stack + Magic Jewel = Tier 5 Splash Charm"
  },
  {
    Description: "1 t5 Splash Charm + 1 Io-Rune + 3 any perfect gem + 2 magic jewels = 1 t6 Splash Charm",
    Item: null,
    Input: "Tier 5 Splash Charm + Io Rune + 3 Perfect Gem Stack + 2 Magic Jewel ",
    CubeRecipeDescription: "Tier 5 Splash Charm + Io Rune + 3 Perfect Gem Stack + 2 Magic Jewel = Tier 6 Splash Charm"
  }
];
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name2, symbol) => (symbol = Symbol[name2]) ? symbol : Symbol.for("Symbol." + name2);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create(null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name2, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name: name2, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name2, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name2]() {
    return __privateGet(this, extra);
  }, set [name2](x) {
    return __privateSet(this, extra, x);
  } }, name2));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name2) : __name(target, name2);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name2, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name2 in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name2];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name2] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name2, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _search_dec, _CubeRecipes_decorators, _init;
_CubeRecipes_decorators = [customElement(__au2ViewDef)], _search_dec = [bindable];
class CubeRecipes {
  constructor() {
    __publicField(this, "recipes", [...json]);
    __publicField(this, "search", __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
  }
  searchChanged() {
    if (!this.search) {
      this.recipes = json;
      return;
    }
    const found = [];
    for (const recipe of json) {
      if (recipe.CubeRecipeDescription.toLowerCase().includes(this.search.toLowerCase()) || recipe.Output.toLowerCase().includes(this.search.toLowerCase()) || recipe.Description.toLowerCase().includes(this.search.toLowerCase())) {
        found.push(recipe);
      }
    }
    this.recipes = found;
  }
}
_init = __decoratorStart();
__decorateElement(_init, 5, "search", _search_dec, CubeRecipes);
CubeRecipes = __decorateElement(_init, 0, "CubeRecipes", _CubeRecipes_decorators, CubeRecipes);
__runInitializers(_init, 1, CubeRecipes);
export {
  CubeRecipes
};
