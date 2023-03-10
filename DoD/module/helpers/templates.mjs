/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/DoD/templates/actor/parts/actor-combat.html",
    "systems/DoD/templates/actor/parts/actor-description.html",
    "systems/DoD/templates/actor/parts/actor-items.html",
    "systems/DoD/templates/actor/parts/actor-spells.html",
    "systems/DoD/templates/actor/parts/actor-features.html",
  ]);
};
