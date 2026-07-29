import { createContext } from "react";

export type Filter =
  | "All"
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania";

export interface FilterContextType {
  search: string;
  setSearch: (value: string) => void;

  region: Filter;
  setRegion: (value: Filter) => void;
}

export const FilterContext =
  createContext({} as FilterContextType);