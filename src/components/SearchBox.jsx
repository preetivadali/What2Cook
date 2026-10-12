import { useState } from "react";
import { Search } from "lucide-react";

function SearchBox() {

    const [ingredient, setIngredient] = useState("");

  function handleSearch() {
    if (ingredient.trim() === "") {
      return;
    }

    const ingredients = ingredient
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    console.log(ingredients);
  }



    return (
        <div className="flex max-w-xl mx-auto mt-8">
            <input
                type="text"
                value={ingredient}
                onChange={(event) => setIngredient(event.target.value)}
                placeholder="What ingredients do you have?"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 outline-none focus:border-green-500"
            />
<button
 
    onClick={handleSearch}
  
  className="bg-green-600 text-white px-5 rounded-r-lg"
>
  <Search size={20} />
</button>
        </div>
    );
}

export default SearchBox;

