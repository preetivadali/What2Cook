import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipe";
import RecipeDetails from "./pages/RecipeDetails";
import SavedRecipes from "./pages/SavedRecipe";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/saved" element={<SavedRecipes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;