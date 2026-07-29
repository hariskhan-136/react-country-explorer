import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Country } from "../types/Country";

interface Props {
  country: Country;
}

function CountryCard({ country }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          : "overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      }
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h2
          className={
            theme === "dark"
              ? "mb-4 text-2xl font-bold text-white"
              : "mb-4 text-2xl font-bold text-gray-900"
          }
        >
          {country.name.common}
        </h2>

        <p
          className={
            theme === "dark" ? "mb-2 text-gray-300" : "mb-2 text-gray-700"
          }
        >
          🌎 <strong>Region:</strong> {country.region}
        </p>

        <p
          className={
            theme === "dark" ? "mb-2 text-gray-300" : "mb-2 text-gray-700"
          }
        >
          🏙 <strong>Capital:</strong> {country.capital?.[0] ?? "N/A"}
        </p>

        <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
          👥 <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
