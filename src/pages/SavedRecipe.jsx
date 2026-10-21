
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeLists";
import { getSavedRecipes } from "../utils/savedRecipe";


function SavedRecipe() {
  const [recipes, setRecipes] = useState(() => getSavedRecipes());

  useEffect(() => {
    function refreshSavedRecipes() {
      setRecipes(getSavedRecipes());
    }

    window.addEventListener("focus", refreshSavedRecipes);

    return () => {
      window.removeEventListener("focus", refreshSavedRecipes);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-10 sm:px-8">
        <section className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-800">
            Saved Recipes
          </h1>

          {recipes.length > 0 ? (
            <RecipeList recipes={recipes} />
          ) : (
            <p className="mt-4 text-gray-600">
              No saved recipes yet. Browse recipes and click the bookmark
              icon to save your favorites.
            </p>
          )}
        </section>
      </main>
    </>
  );
}

export default SavedRecipe;