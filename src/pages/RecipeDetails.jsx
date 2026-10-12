
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function RecipeDetails() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/recipes"
            className="mb-8 inline-flex items-center gap-2 text-green-700 hover:text-green-800"
          >
            <ArrowLeft size={18} />
            Back to recipes
          </Link>

          <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="flex min-h-64 items-center justify-center bg-green-100 p-8">
              <ChefHat size={64} className="text-green-600" />
            </div>

            <div className="p-6 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                Recipe details
              </p>

              <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Your selected recipe
              </h1>

              <p className="mt-4 text-gray-600">
                The recipe photo, name, and details will appear here when you
                select a recipe.
              </p>

              <div className="mt-6 flex flex-wrap gap-6 border-y border-gray-100 py-5 text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-green-600" />
                  Cooking time
                </div>

                <div className="flex items-center gap-2">
                  <Users size={20} className="text-green-600" />
                  Servings
                </div>
              </div>

              <div className="mt-8 grid gap-10 md:grid-cols-2">
                <section>
                  <h2 className="text-xl font-bold text-gray-900">
                    Ingredients
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Ingredients and measurements will appear here.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900">
                    Instructions
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Step-by-step cooking instructions will appear here.
                  </p>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default RecipeDetails;
