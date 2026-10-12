const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

async function getRecipesByIngredient(ingredient) {
  const response = await fetch(
    `${BASE_URL}/filter.php?i=${ingredient}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await response.json();

  return (data.meals || []).map((meal) => ({
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
  }));
}

export { getRecipesByIngredient };