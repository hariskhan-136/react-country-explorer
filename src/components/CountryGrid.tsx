import { useContext } from "react";

import CountryCard from "./CountryCard";

import { FilterContext } from "../context/filter-context";

import type { Country } from "../types/Country";

interface Props {
  countries: Country[];
}

function CountryGrid({ countries }: Props) {
  const { search, region } = useContext(FilterContext);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion = region === "All" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  if (filteredCountries.length === 0) {
    return (
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold">No countries found</h2>

        <p className="mt-3 text-gray-500">Try another search or region.</p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl font-semibold">
          Showing {filteredCountries.length} Countries
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
}

export default CountryGrid;
