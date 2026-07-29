import { useContext } from "react";

import Header from "./components/Header";
import CountryGrid from "./components/CountryGrid";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import RegionFilter from "./components/RegionFilter";
import SearchBar from "./components/SearchBar";

import { ThemeContext } from "./context/ThemeContext";
import { useCountries } from "./hooks/useCountries";

function App() {
  const { theme } = useContext(ThemeContext);

  const { data, loading, error } = useCountries();

  if (loading) {
    return (
      <main
        className={
          theme === "dark"
            ? "min-h-screen bg-gray-900 text-white"
            : "min-h-screen bg-slate-100 text-gray-900"
        }
      >
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main
        className={
          theme === "dark"
            ? "min-h-screen bg-gray-900 text-white"
            : "min-h-screen bg-slate-100 text-gray-900"
        }
      >
        <ErrorMessage message={error} />
      </main>
    );
  }

  return (
    <main
      className={
        theme === "dark"
          ? "min-h-screen bg-gray-900 text-white transition-all duration-300"
          : "min-h-screen bg-slate-100 text-gray-900 transition-all duration-300"
      }
    >
      <div className="mx-auto max-w-7xl p-6">
        <Header />

        <div className="mb-8 space-y-6">
          <SearchBar />

          <RegionFilter />
        </div>

        <CountryGrid countries={data} />
      </div>
    </main>
  );
}

export default App;
