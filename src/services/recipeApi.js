const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001";

export async function searchRecipes(
  ingredients,
  foodPreference = "vegetarian"
) {
  const params = new URLSearchParams({
    ingredients: ingredients.join(","),
    preference: foodPreference,
  });

  const response = await fetch(
    `${API_BASE_URL}/api/recipes?${params.toString()}`
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error || "Failed to fetch recipes."
    );
  }

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