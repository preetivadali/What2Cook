import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

function SearchBox({ foodPreference = "vegetarian" }) {
  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const ingredients = ingredient
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (ingredients.length === 0) {
      setError("Please enter at least one ingredient.");
      return;
    }

    setError("");

    navigate("/recipes", {
      state: {
        ingredients,
        foodPreference,
      },
    });
  }

  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto mt-8 max-w-xl"
    >
      <div className="flex">
        <input
          type="text"
          value={ingredient}
          onChange={(event) => {
            setIngredient(event.target.value);
            setError("");
          }}
          placeholder="What ingredients do you have?"
          aria-label="Enter ingredients separated by commas"
          className="min-w-0 flex-1 rounded-l-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
        />

        <button
          type="submit"
          aria-label="Search recipes"
          className="rounded-r-lg bg-green-600 px-5 text-white hover:bg-green-700"
        >
          <Search size={20} />
        </button>
      </div>

      {error && (
        <p className="mt-2 text-left text-sm text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}

export default SearchBox;