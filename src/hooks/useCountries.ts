import { useEffect, useState } from "react";
import type { Country } from "../types/Country";

export function useCountries(): {
  data: Country[];
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountries() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://restcountries.conventus.de/v3.1/all?fields=name,capital,population,region,flags,cca3",
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch countries.");
        }

        const countries: Country[] = await response.json();

        setData(countries);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    data,
    loading,
    error,
  };
}
