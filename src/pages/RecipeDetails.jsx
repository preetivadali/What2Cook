
import { useState } from "react";
import {
  Clock,
  Users,
  ArrowLeft,
  Bookmark,
  Check,
  Trash2,
} from "lucide-react";
import {
  Link,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import {
  isRecipeSaved,
  toggleSavedRecipe,
} from "../utils/savedRecipe";

function RecipeDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = state?.recipe;

  const [saved, setSaved] = useState(() =>
    recipe ? isRecipeSaved(recipe.id) : false
  );

  function handleSaveRecipe() {
    if (!recipe) return;

    toggleSavedRecipe(recipe);
    setSaved(isRecipeSaved(recipe.id));
  }

  function handleDeleteRecipe() {
    if (!recipe) return;

    // Remove the recipe from saved recipes
    if (isRecipeSaved(recipe.id)) {
      toggleSavedRecipe(recipe);
    }

    setSaved(false);

    // Redirect immediately after deleting
   navigate("/saved", { replace: true });
  }

  if (!recipe || String(recipe.id) !== String(id)) {
    return (
      <>
        <Navbar />

        <main className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Recipe not available
          </h1>

          <p className="mt-3 text-gray-500">
            Please go back and select a recipe to view its details.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <ArrowLeft size={18} />
            Back to recipes
          </Link>
        </main>
      </>
    );
  }

  const ingredients = recipe.ingredients || [];
  const instructions = recipe.instructions || recipe.steps || [];

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-green-700"
        >
          <ArrowLeft size={18} />
          Back to recipes
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.title || recipe.name || "Recipe"}
              className="h-64 w-full object-cover sm:h-96"
            />
          )}

          <div className="p-6 sm:p-10">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {recipe.title || recipe.name}
            </h1>

            {recipe.description && (
              <p className="mt-4 leading-7 text-gray-600">
                {recipe.description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-600">
              {recipe.readyInMinutes != null && (
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-green-600" />
                  <span>{recipe.readyInMinutes} minutes</span>
                </div>
              )}

              {recipe.servings != null && (
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-green-600" />
                  <span>{recipe.servings} servings</span>
                </div>
              )}
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <section>
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Ingredients
                </h2>

                {ingredients.length > 0 ? (
                  <ul className="space-y-3">
                    {ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                        <span>
                          {typeof ingredient === "string"
                            ? ingredient
                            : ingredient.original ||
                              ingredient.name ||
                              ingredient.ingredient ||
                              ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    No ingredients available.
                  </p>
                )}
              </section>

              <section>
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Instructions
                </h2>

                {instructions.length > 0 ? (
                  <ol className="space-y-4">
                    {instructions.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                          {index + 1}
                        </span>
                        <span>
                          {typeof step === "string"
                            ? step
                            : step.step || step.instruction || ""}
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-500">
                    No instructions available.
                  </p>
                )}
              </section>
            </div>

            {/* Save and delete controls */}
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={handleSaveRecipe}
                aria-pressed={saved}
                className={`flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold transition ${
                  saved
                    ? "bg-green-100 text-green-800 hover:bg-green-200"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {saved ? <Check size={20} /> : <Bookmark size={20} />}
                {saved ? "Recipe Saved" : "Save Recipe"}
              </button>

              {saved && (
                <button
                  type="button"
                  onClick={handleDeleteRecipe}
                  aria-label="Delete saved recipe"
                  title="Delete saved recipe"
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-red-200 text-red-600 transition hover:bg-red-50 hover:text-red-700"
                >
                  <Trash2 size={22} />
                </button>
              )}
            </div>

            <p className="mt-3 text-sm text-gray-500">
              {saved
                ? "This recipe is saved. Click the trash icon to remove it."
                : "Save this recipe to find it easily later."}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default RecipeDetails;
