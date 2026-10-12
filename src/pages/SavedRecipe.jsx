
import { Link } from "react-router-dom";
import { Bookmark, Search } from "lucide-react";
import Navbar from "../components/Navbar";

function SavedRecipes() {
  // We'll connect this page to the user's saved recipes later.
  const savedRecipes = [];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-12 sm:px-8">
        <section className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <Bookmark size={28} className="text-green-600" />

              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Saved Recipes
              </h1>
            </div>

            <p className="text-gray-600">
              Your favourite recipes, all in one place.
            </p>
          </div>

          {savedRecipes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Bookmark size={30} className="text-green-600" />
              </div>

              <h2 className="text-xl font-semibold text-gray-900">
                No saved recipes yet
              </h2>

              <p className="mx-auto mt-3 max-w-md text-gray-600">
                When you find a recipe you love, save it here so you can
                easily find it again.
              </p>

              <Link
                to="/recipes"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
              >
                <Search size={18} />
                Explore recipes
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* We'll display the saved recipe cards here. */}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default SavedRecipes;