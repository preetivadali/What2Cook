import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-600">
        What2Cook 🍳
      </Link>

      <div className="flex gap-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-green-600"
        >
          Home
        </Link>

        <Link
          to="/recipes"
          className="text-gray-700 hover:text-green-600"
        >
          Recipes
        </Link>

        <Link
          to="/saved"
          className="text-gray-700 hover:text-green-600"
        >
          Saved
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;