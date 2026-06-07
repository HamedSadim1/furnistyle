/**
 * useProductSearch — Manages search state and filtered product results.
 *
 * Extracts the search-input + useMemo + clear pattern from Products.tsx
 * into a reusable hook that can be tested in isolation.
 *
 * Usage:
 *   const { searchTerm, setSearchTerm, results, clearSearch, hasSearch } =
 *     useProductSearch();
 */
import { useState, useMemo } from "react";
import { products } from "../data";
import type { IPRODUCT } from "../types";

interface UseProductSearchResult {
  /** Current raw search term */
  searchTerm: string;
  /** Setter — keep in sync with an <input> */
  setSearchTerm: (term: string) => void;
  /** Memoised filtered product list */
  results: IPRODUCT[];
  /** Reset search to empty string */
  clearSearch: () => void;
  /** True when the user has typed something */
  hasSearch: boolean;
}

export const useProductSearch = (): UseProductSearchResult => {
  const [searchTerm, setSearchTerm] = useState("");

  const results = useMemo(() => {
    if (!searchTerm) return products;
    const lowered = searchTerm.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(lowered));
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    results,
    clearSearch: () => setSearchTerm(""),
    hasSearch: searchTerm.length > 0,
  };
};
