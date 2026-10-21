
import { Link } from "react-router-dom";
import { Bookmark, Clock, Users, ArrowUpRight } from "lucide-react";
import { isRecipeSaved, toggleSavedRecipe } from "../utils/savedRecipe";

function getFoodType(recipe) {
  const tags = (recipe.dietary_tags ?? []).map((tag) =>
    String(tag).toLowerCase().trim()
  );

  const ingredients = recipe.ingredients ?? [];

  const ingredientNames = ingredients
    .map((item) =>
      String(item.name ?? item.ingredient ?? "").toLowerCase()
    )
    .filter(Boolean);

  const hasIngredientData = ingredientNames.length > 0;

  const nonVegPattern =
    /\b(chicken|turkey|duck|beef|pork|bacon|ham|lamb|mutton|veal|venison|goat|sausage|pepperoni|salami|anchov(?:y|ies)|fish|salmon|tuna|cod|sardine|prawn|shrimp|crab|lobster|mussel|oyster|clam|squid|octopus|seafood)\b/i;

  if (
    tags.some((tag) =>
      ["non-vegetarian", "non vegetarian", "non-veg", "nonveg"].includes(tag)
    ) ||
    ingredientNames.some((name) => nonVegPattern.test(name))
  ) {
    return "non-veg";
  }

  const explicitlyVegetarian = tags.some((tag) =>
    ["vegetarian", "vegan", "veg"].includes(tag)
  );

  if (explicitlyVegetarian || hasIngredientData) {
    return "veg";
  }

  return "unknown";
}

function RecipeCard({ recipe }) {
  const prepTime = Number(recipe.prep_time ?? 0);
  const cookTime = Number(recipe.cook_time ?? 0);
  const ingredients = recipe.ingredients ?? [];
  const foodType = getFoodType(recipe);

  return (
    <Link
      to={`/recipe/${recipe.id}`}
      state={{ recipe }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
    >
      {/* Botanical illustration */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#F2F3E9]">
        <div className="absolute h-36 w-36 rounded-full bg-[#E5E9D9] transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute h-28 w-28 rounded-full border border-[#D1D9C3]" />

        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#D7DDCA] bg-[#FAFAF4] shadow-sm transition-transform duration-500 group-hover:rotate-3">
          <svg viewBox="0 0 100 100" className="h-20 w-20" aria-hidden="true">
            <path
              d="M50 74 C27 60 31 35 50 22 C69 35 73 60 50 74Z"
              fill="#91A77C"
              className="origin-center animate-[gentleSway_5s_ease-in-out_infinite]"
            />
            <path
              d="M50 69 Q49 46 50 27"
              stroke="#EAF0DF"
              strokeWidth="1.5"
              fill="none"
            />
            <ellipse cx="35" cy="49" rx="8" ry="14" fill="#B7C69F" transform="rotate(-38 35 49)" />
            <ellipse cx="65" cy="52" rx="8" ry="14" fill="#789668" transform="rotate(38 65 52)" />
            <circle cx="35" cy="72" r="4" fill="#D99B82" />
            <circle cx="67" cy="31" r="3" fill="#D99B82" />
          </svg>
        </div>

        <span className="absolute left-[24%] top-[28%] text-sm text-[#B6A976] transition-transform duration-500 group-hover:-translate-y-1">
          ✦
        </span>
        <span className="absolute bottom-[25%] right-[24%] text-xs text-[#B6A976] transition-transform duration-500 group-hover:translate-y-1">
          ✧
        </span>

        <div className="absolute bottom-3 text-[10px] font-medium tracking-[0.18em] text-[#78856D]">
          MADE FOR YOUR TABLE
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-xs font-semibold text-green-800 shadow-sm">
          Recipe
        </div>

        {foodType !== "unknown" && (
          <span
            className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-sm ${
              foodType === "veg" ? "text-green-800" : "text-red-700"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                foodType === "veg" ? "bg-green-600" : "bg-red-600"
              }`}
            />
            {foodType === "veg" ? "Veg" : "Non-Veg"}
          </span>
        )}
      </div>

      {/* Recipe information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="text-xl font-bold leading-snug tracking-tight text-stone-900 transition-colors group-hover:text-green-800">
          {recipe.name}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">
          {recipe.description || "A delicious recipe to try at home."}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-stone-50 p-3">
          <div className="min-w-0">
            <Clock size={17} className="mb-1 text-green-700" />
            <p className="text-xs text-stone-500">Prep</p>
            <p className="mt-0.5 text-sm font-semibold text-stone-800">
              {prepTime} min
            </p>
          </div>

          <div className="min-w-0 border-x border-stone-200 px-2">
            <Clock size={17} className="mb-1 text-green-700" />
            <p className="text-xs text-stone-500">Total</p>
            <p className="mt-0.5 text-sm font-semibold text-stone-800">
              {prepTime + cookTime} min
            </p>
          </div>

          <div className="min-w-0">
            <Users size={17} className="mb-1 text-green-700" />
            <p className="text-xs text-stone-500">Serves</p>
            <p className="mt-0.5 text-sm font-semibold text-stone-800">
              {recipe.servings ?? "—"}
            </p>
          </div>
        </div>

        {/* Ingredients preview */}
        <div className="mt-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-stone-900">Ingredients</h3>
            <span className="text-xs text-stone-400">
              {ingredients.length} items
            </span>
          </div>

          {ingredients.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {ingredients.slice(0, 4).map((item, index) => (
                <li
                  key={item.id ?? index}
                  className="flex items-start gap-2 text-sm text-stone-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  <span className="line-clamp-1">
                    {item.quantity != null ? `${item.quantity} ` : ""}
                    {item.unit ? `${item.unit} ` : ""}
                    {item.name ?? item.ingredient ?? ""}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-stone-500">
              Ingredient details unavailable.
            </p>
          )}

          {ingredients.length > 4 && (
            <p className="mt-2 text-xs font-medium text-green-700">
              + {ingredients.length - 4} more ingredients
            </p>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-5">
          <span className="text-sm font-semibold text-green-800">
            View recipe
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-800 transition-all group-hover:bg-green-700 group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes gentleSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[gentleSway_5s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </Link>
  );
}

export default RecipeCard;
