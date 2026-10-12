
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeLists";

function Recipes() {
  const recipes = [];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-12 sm:px-8">
        <section className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-900">
            Recipes
          </h1>

          <p className="mt-3 text-gray-600">
            Your matching recipes will appear here.
          </p>

          {recipes.length === 0 ? (
            <p className="mt-8 text-gray-500">
              Search with your ingredients to find recipes.
            </p>
          ) : (
            <RecipeList recipes={recipes} />
          )}
        </section>
      </main>
    </>
  );
}

export default Recipes;
