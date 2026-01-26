/**
 * FurniStyle Type Definitions
 *
 * This file contains all TypeScript interfaces and types used throughout
 * the FurniStyle application. These types ensure type safety and provide
 * clear contracts for data structures.
 */

/**
 * Product interface representing a furniture item in the catalog
 * Used for displaying products in the Products page and SingleProduct details
 */
export interface IPRODUCT {
  id: string; // Unique identifier for the product
  name: string; // Display name of the furniture item
  image: string; // URL to the product image (hosted on Unsplash)
  price: number; // Price in USD
}

/**
 * Navigation item interface for navbar menu items
 * Used by the StyledNavbar component to render navigation links
 */
export interface INAV {
  id: string; // Unique identifier for the nav item
  to: string; // React Router path for navigation
  text: string; // Display text for the navigation link
}

/**
 * User interface for authentication and user management
 * Used for login state and dashboard personalization
 */
export interface USER {
  name: string; // User's display name
  email: string; // User's email address for identification
}
