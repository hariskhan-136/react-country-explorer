import { useContext } from "react";
import { FilterContext, type Filter } from "../context/filter-context";
import { ThemeContext } from "../context/ThemeContext";

function RegionFilter() {
  const { region, setRegion } = useContext(FilterContext);
  const { theme } = useContext(ThemeContext);

  const regions: Filter[] = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {regions.map((item) => (
        <button
          key={item}
          onClick={() => setRegion(item)}
          className={`rounded-full px-5 py-2 font-medium transition-all duration-300
          ${
            region === item
              ? "bg-blue-600 text-white shadow-lg"
              : theme === "dark"
                ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                : "bg-white text-gray-700 shadow hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default RegionFilter;
