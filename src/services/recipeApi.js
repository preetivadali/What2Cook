export async function searchRecipes(
  ingredients,
  foodPreference = "vegetarian"
) {
  const params = new URLSearchParams({
    ingredients: ingredients.join(","),
    preference: foodPreference,
  });

  const response = await fetch(
    `http://localhost:3001/api/recipes?${params.toString()}`
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error || "Failed to fetch recipes."
    );
  }

  // Support either an array response or an object containing data.
  if (Array.isArray(result)) {
    return result;
  }

  if (Array.isArray(result.data)) {
    return result.data;
  }

  if (Array.isArray(result.recipes)) {
    return result.recipes;
  }

  return [];
}