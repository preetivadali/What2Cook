
import { Leaf, Heart, CookingPot } from "lucide-react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf5] px-5 py-16 sm:px-8">
        <section className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
            <CookingPot size={32} className="text-green-600" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
            About us
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Good food starts with
            <span className="text-green-600"> what you have.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            What2Cook helps you discover recipes using the ingredients
            already in your kitchen. Spend less time wondering what to cook
            and more time enjoying delicious meals.
          </p>
        </section>

        <section className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
              <Leaf size={25} className="text-green-600" />
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Reduce food waste
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Make better use of the ingredients you already have instead
              of letting them go to waste.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
              <Heart size={25} className="text-green-600" />
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Make cooking easier
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Find recipe ideas, explore ingredients, and save your
              favourite meals for another day.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl bg-green-600 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to find your next meal?
          </h2>

          <p className="mt-3 leading-7 text-green-50">
            Start with the ingredients you have and discover what you can cook.
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Find recipes
          </a>
        </section>
      </main>
    </>
  );
}

export default About;
