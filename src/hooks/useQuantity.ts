/**
 * useQuantity — Manages a numeric quantity with min / max bounds.
 *
 * Usage:
 *   const { qty, inc, dec, set } = useQuantity({ min: 1, max: stock });
 */
import { useState, useCallback } from "react";

interface UseQuantityOptions {
  min?: number;
  max: number;
  initial?: number;
}

interface UseQuantityResult {
  qty: number;
  inc: () => void;
  dec: () => void;
  set: (n: number) => void;
  isMin: boolean;
  isMax: boolean;
}

export const useQuantity = ({
  min = 1,
  max,
  initial = 1,
}: UseQuantityOptions): UseQuantityResult => {
  const [qty, setQty] = useState(Math.max(min, Math.min(initial, max)));

  const inc = useCallback(() => {
    setQty((prev) => Math.min(prev + 1, max));
  }, [max]);

  const dec = useCallback(() => {
    setQty((prev) => Math.max(prev - 1, min));
  }, [min]);

  const set = useCallback(
    (n: number) => {
      setQty(Math.max(min, Math.min(n, max)));
    },
    [min, max],
  );

  return { qty, inc, dec, set, isMin: qty <= min, isMax: qty >= max };
};
