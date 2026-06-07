/**
 * useProduct — Finds a product by ID from the URL params.
 *
 * Centralises the pattern of reading useParams(), looking up the product,
 * and returning a not-found state. Used by SingleProduct.
 *
 * Usage:
 *   const { product, notFound } = useProduct();
 *   if (notFound) return <NotFoundPage />;
 */
import { useParams } from "react-router-dom";
import { products } from "../data";
import type { IPRODUCT } from "../types";

interface UseProductResult {
  /** The matched product, or null when not found */
  product: IPRODUCT | null;
  /** True when the product ID doesn't match any product */
  notFound: boolean;
}

export const useProduct = (): UseProductResult => {
  const { productId } = useParams<{ productId: string }>();

  if (!productId) {
    return { product: null, notFound: true };
  }

  const product = products.find((p) => p.id === productId) ?? null;

  return {
    product,
    notFound: product === null,
  };
};
