import { Search } from "lucide-react";

function SearchBox() {
  return (
    <div className="flex max-w-xl mx-auto mt-8">
      <input
        type="text"
        placeholder="What ingredients do you have?"
        className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 outline-none focus:border-green-500"
      />

      <button className="bg-green-600 text-white px-5 rounded-r-lg hover:bg-green-700">
        <Search size={20} />
      </button>
    </div>
  );
}

export default SearchBox;