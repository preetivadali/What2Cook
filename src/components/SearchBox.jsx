
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

function SearchBox() {
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    const ingredients = ingredient
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (ingredients.length === 0) {
      return;
    }

    navigate("/recipes", { state: { ingredients } });
  }

  return (
    <div className="mx-auto mt-8 flex max-w-xl">
      <input
        type="text"
        value={ingredient}
        onChange={(event) => setIngredient(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="What ingredients do you have?"
        className="flex-1 rounded-l-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
      />

      <button
        type="button"
        onClick={handleSearch}
        aria-label="Search recipes"
        className="rounded-r-lg bg-green-600 px-5 text-white hover:bg-green-700"
      >
        <Search size={20} />
      </button>
    </div>
  );
}

export default SearchBox;
