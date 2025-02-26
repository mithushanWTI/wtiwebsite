import { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon
import { FaMapMarkerAlt } from "react-icons/fa"; // Import location icon

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center w-[300px] sm:w-[450px] ">
      <div className="flex flex-col w-full">
        <label className="text-gray-700 text-sm mb-1">Where are you going?</label>
        <div className="relative flex items-center">
          {/* Location Icon */}
          <FaMapMarkerAlt className="absolute left-3 text-red-400" />
          <input
            type="text"
            placeholder="Destination"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-50 sm:w-full p-2 pl-10 border rounded-lg outline-none text-gray-600 bg-transparent focus:ring-1 focus:ring-blue-950 focus:border-blue-950 transition-all duration-300"
          />
        </div>
      </div>
      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="ml-4 sm:ml-4 mt-6 w-30 bg-red-500 text-white p-3 rounded-lg flex items-center justify-center shadow-md hover:bg-red-600 transition-all duration-300 focus:ring-2 focus:ring-red-300"
      >
        <FiSearch size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
