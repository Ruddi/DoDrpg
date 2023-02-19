export const DoDrpg = {};

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
 DoDrpg.abilities = {
  "str": "DoDrpg.AbilityStr",
  "siz": "DoDrpg.AbilitySiz",
  "dex": "DoDrpg.AbilityDex",
  "con": "DoDrpg.AbilityCon",
  "int": "DoDrpg.AbilityInt",
  "wis": "DoDrpg.AbilityWis",
  "cha": "DoDrpg.AbilityCha"
};

DoDrpg.abilityAbbreviations = {
  "str": "DoDrpg.AbilityStrAbbr",
  "siz": "DoDrpg.AbilitySizAbbr",
  "dex": "DoDrpg.AbilityDexAbbr",
  "con": "DoDrpg.AbilityConAbbr",
  "int": "DoDrpg.AbilityIntAbbr",
  "wis": "DoDrpg.AbilityWisAbbr",
  "cha": "DoDrpg.AbilityChaAbbr"
};

/**
 * The set of Saving Throws used within the sytem.
 * @type {Object}
 */
DoDrpg.saves = {
  "death": "DoDrpg.SaveDeath",
  "wands": "DoDrpg.SaveWands",
  "paralysis": "DoDrpg.SaveParalysis",
  "breath": "DoDrpg.SaveBreath",
  "spells": "DoDrpg.SaveSpells"
};

/**
 * Money used within the sytem.
 * @type {Object}
 */
DoDrpg.money = {
  "pp": "DoDrpg.Platinum",
  "gp": "DoDrpg.Gold",
  "ep": "DoDrpg.Electrum",
  "sp": "DoDrpg.Silver",
  "cp": "DoDrpg.Copper"
};
