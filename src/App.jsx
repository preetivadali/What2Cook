import Navbar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import RecipeCard from "./components/RecipeCard";
import Loading from "./components/Loading";
function App() {
  return (
    <>
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-green-600">
          What2Cook 🍳
        </h1>

        <SearchBox />
        <Loading />
      </div>
    </>
  );
}

export default App;
