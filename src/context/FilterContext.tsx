import { useState, type ReactNode } from "react";

import { FilterContext, type Filter } from "./filter-context";

interface Props {
  children: ReactNode;
}

export function FilterProvider({ children }: Props) {
  const [search, setSearch] = useState("");

  const [region, setRegion] = useState<Filter>("All");

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        region,
        setRegion,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
