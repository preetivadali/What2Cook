
const API_BASE_URL = "http://localhost:3001";

export async function searchRecipes(ingredients) {
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return [];
  }

  const query = ingredients.join(",");

  const response = await fetch(
    `${API_BASE_URL}/api/recipes?ingredients=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch recipes: HTTP ${response.status}`);
  }

  const result = await response.json();

  // Support either an array or an object containing a data array.
  const recipes = Array.isArray(result) ? result : result.data;

  if (!Array.isArray(recipes)) {
    throw new Error("The API response does not contain a recipe array.");
  }

  return recipes;
}
