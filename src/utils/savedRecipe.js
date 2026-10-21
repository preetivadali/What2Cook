
const STORAGE_KEY = "what2cook-saved-recipes";

export function getSavedRecipes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function isRecipeSaved(id) {
  return getSavedRecipes().some(
    (recipe) => String(recipe.id) === String(id)
  );
}

export function toggleSavedRecipe(recipe) {
  const saved = getSavedRecipes();

  const exists = saved.some(
    (item) => String(item.id) === String(recipe.id)
  );

  const updated = exists
    ? saved.filter((item) => String(item.id) !== String(recipe.id))
    : [...saved, recipe];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return updated;
}
