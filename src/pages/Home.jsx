
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

function Home() {
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

          <SearchBox />
        </section>
      </main>
    </>
  );
}

export default Home;