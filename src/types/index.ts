/**
 * FurniStyle Type Definitions
 *
 * This file contains all TypeScript interfaces and types used throughout
 * the FurniStyle application. These types ensure type safety and provide
 * clear contracts for data structures.
 */

/**
 * Product feature with label and optional icon
 */
export interface ProductFeature {
  label: string;
  included: boolean;
}

/**
 * Product interface representing a furniture item in the catalog
 */
export interface IPRODUCT {
  id: string;
  name: string;
  image: string;
  images: string[];
  price: number;
  originalPrice?: number;
  description: string;
  features: ProductFeature[];
  specs: { label: string; value: string }[];
  stock: number;
  category: string;
  rating: number;
  reviewCount: number;
  colors: { name: string; hex: string }[];
  materials: string[];
}

/**
 * Navigation item interface for navbar menu items
 */
export interface INAV {
  id: string;
  to: string;
  text: string;
}

/**
 * User interface for authentication and user management
 */
export interface USER {
  name: string;
  email: string;
}
