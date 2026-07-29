import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="mb-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-blue-600 p-8 text-white shadow-2xl md:flex-row">
      <div>
        <h1 className="text-5xl font-extrabold">🌍 Country Explorer</h1>

        <p className="mt-3 text-blue-100">
          Explore countries, capitals, regions and populations around the world!
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-100"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}

export default Header;
