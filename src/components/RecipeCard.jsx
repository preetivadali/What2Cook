import { Clock } from "lucide-react";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {recipe.title}
        </h2>

        <p className="flex items-center gap-2 mt-3 text-gray-600">
          <Clock size={18} />
          {recipe.readyInMinutes} minutes
        </p>

        <p className="mt-3">
          {recipe.vegetarian ? "🟢 Vegetarian" : "🔴 Non-Vegetarian"}
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;