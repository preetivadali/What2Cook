
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="block max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {recipe.title}
        </h2>

        <p className="mt-3 flex items-center gap-2 text-gray-600">
          <Clock size={18} />
          {recipe.readyInMinutes} minutes
        </p>

        <p className="mt-3">
          {recipe.vegetarian ? "🟢 Vegetarian" : "🔴 Non-Vegetarian"}
        </p>
      </div>
    </Link>
  );
}

export default RecipeCard;
