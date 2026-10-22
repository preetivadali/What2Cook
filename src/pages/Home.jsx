import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

function Home() {
  const [foodPreference, setFoodPreference] = useState("vegetarian");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-green-600 sm:text-5xl">
            What2Cook 🍳
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Find delicious recipes, save your favorites, and cook something amazing.
          </p>

          <div className="mx-auto mt-8 max-w-md text-left">
            <label
              htmlFor="food-preference"
              className="mb-2 block font-medium text-gray-700"
            >
              What would you like to eat?
            </label>

            <select
              id="food-preference"
              value={foodPreference}
              onChange={(event) =>
                setFoodPreference(event.target.value)
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
            >
              <option value="vegetarian">🥦 Vegetarian</option>
              <option value="non-vegetarian">🍗 Non-vegetarian</option>
              <option value="all">🍽️ All recipes</option>
            </select>
          </div>

          <SearchBox foodPreference={foodPreference} />
        </section>
      </main>
    </>
  );
}

export default Home;