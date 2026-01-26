/**
 * FurniStyle Data Layer
 *
 * This file contains all static data used throughout the FurniStyle application.
 * In a real-world application, this data would typically come from an API or database.
 * The product images are sourced from Unsplash for high-quality, reliable images.
 */

import { IPRODUCT, INAV } from "../types";

/**
 * Furniture product catalog
 * Contains all available products with their details, pricing, and images
 * Images are optimized to 500x500 pixels for consistent display
 */
export const products: IPRODUCT[] = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
    price: 259.99,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop&crop=center",
    price: 1099.99,
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "albany table",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&crop=center",
    price: 309.99,
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "armchair",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop&crop=center",
    price: 125.99,
  },
  {
    id: "recoM2MyHJGHLVi5l",
    name: "bar stool",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
    price: 89.99,
  },
];

/**
 * Navigation menu configuration
 * Defines the main navigation links used in the StyledNavbar component
 * Each item maps to a React Router path
 */
export const NavData: INAV[] = [
  {
    id: "1",
    to: "/",
    text: "Home",
  },
  {
    id: "2",
    to: "/about",
    text: "About",
  },
  {
    id: "3",
    to: "/products",
    text: "Products",
  },
  {
    id: "4",
    to: "/login",
    text: "Login",
  },
];
