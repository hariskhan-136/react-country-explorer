import { useContext } from "react";
import { FilterContext } from "../context/filter-context";
import { ThemeContext } from "../context/ThemeContext";

function SearchBar() {
  const { search, setSearch } = useContext(FilterContext);
  const { theme } = useContext(ThemeContext);

  return (
    <input
      type="text"
      placeholder="🔍 Search countries..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      className={`w-full rounded-xl border p-4 text-lg outline-none transition-all
      ${
        theme === "dark"
          ? "border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
          : "border-gray-300 bg-white text-gray-900 focus:border-blue-500"
      }`}
    />
  );
}

export default SearchBar;
