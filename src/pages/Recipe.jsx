
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeLists";
import Loading from "../components/Loading";
import { searchRecipes } from "../services/recipeApi";

function Recipe() {
  const location = useLocation();
  const ingredients = location.state?.ingredients || [];

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadRecipes() {
      if (ingredients.length === 0) {
        setRecipes([]);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const results = await searchRecipes(ingredients);

        if (!cancelled) {
          setRecipes(Array.isArray(results) ? results : []);
        }
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError("Could not load recipes. Please try again.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadRecipes();

    return () => {
      cancelled = true;
    };
  }, [location.state]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-10 sm:px-8">
        <section className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-900">
            Recipes
          </h1>

          {ingredients.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full bg-green-100 px-3 py-2 text-sm text-green-800"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          )}

          {loading && <Loading />}

          {error && (
            <p className="mt-6 text-red-600">{error}</p>
          )}

          {!loading && !error && recipes.length > 0 && (
            <RecipeList recipes={recipes} />
          )}

          {!loading && !error && ingredients.length > 0 && recipes.length === 0 && (
            <p className="mt-6 text-gray-600">
              No recipes found. Try different ingredients.
            </p>
          )}

          {ingredients.length === 0 && (
            <p className="mt-6 text-gray-600">
              Go back to Home and enter ingredients to find recipes.
            </p>
          )}
        </section>
      </main>
    </>
  );
}

export default Recipe;
