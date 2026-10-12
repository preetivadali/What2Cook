
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import RecipeList from "../components/RecipeLists";

const sampleRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    readyInMinutes: 25,
    vegetarian: true,
  },
  {
    id: 2,
    title: "Fresh Garden Salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    readyInMinutes: 15,
    vegetarian: true,
  },
  {
    id: 3,
    title: "Chicken Rice Bowl",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    readyInMinutes: 35,
    vegetarian: false,
  },
];

function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-16 sm:px-8">
        <section className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            Less waste, more delicious meals 🌱
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            What can you cook{" "}
            <span className="text-green-600">today?</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Tell us what ingredients you have at home, and discover
            delicious recipes you can make.
          </p>

          <SearchBox />

          <p className="mt-4 text-sm text-gray-500">
            Start with ingredients like eggs, rice, or tomatoes.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-6xl">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                A little inspiration
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Recipes to get you started
              </h2>
            </div>

            <p className="text-sm text-gray-500">
              Simple ideas for your next meal
            </p>
          </div>

          <RecipeList recipes={sampleRecipes} />
        </section>
      </main>
    </>
  );
}

export default Home;
