
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeLists";
import {
  getSavedRecipes,
  toggleSavedRecipe,
} from "../utils/savedRecipe";

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

  function handleDelete(recipe) {
    toggleSavedRecipe(recipe);
    setRecipes(getSavedRecipes());
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-10 sm:px-8">
        <section className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-800">
            Saved Recipes
          </h1>

          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="relative">
                  <RecipeList recipes={[recipe]} />

                  <button
                    type="button"
                    aria-label="Delete saved recipe"
                    onClick={() => handleDelete(recipe)}
                    className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-600 shadow-md hover:bg-red-50"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-gray-600">
              No saved recipes yet. Browse recipes and save your favorites.
            </p>
          )}

          <Link
            to="/"
            className="mt-8 inline-block font-semibold text-green-700 hover:text-green-900"
          >
            Browse more recipes
          </Link>
        </section>
      </main>
    </>
  );
}

export default SavedRecipe;
