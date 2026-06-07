/**
 * FurniStyle Data Layer
 *
 * This file contains all static data used throughout the FurniStyle application.
 */

import { IPRODUCT, INAV } from "../types";

/**
 * Furniture product catalog with rich product data
 */
export const products: IPRODUCT[] = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&crop=center",
    ],
    price: 259.99,
    originalPrice: 319.99,
    description:
      "A beautifully crafted accent chair that combines mid-century modern design with plush comfort. The curved backrest and angled wooden legs create a timeless silhouette that complements any room.",
    features: [
      { label: "Premium velvet upholstery", included: true },
      { label: "Solid rubberwood legs", included: true },
      { label: "High-density foam cushion", included: true },
      { label: "Easy 30-minute assembly", included: true },
      { label: "Removable cushion cover", included: false },
    ],
    specs: [
      { label: "Dimensions", value: '28″ x 30″ x 32″' },
      { label: "Weight Capacity", value: "350 lbs" },
      { label: "Material", value: "Velvet + Rubberwood" },
      { label: "Assembly", value: "Required (30 min)" },
      { label: "Warranty", value: "5 years" },
    ],
    stock: 18,
    category: "chairs",
    rating: 4.8,
    reviewCount: 127,
    colors: [
      { name: "Navy Blue", hex: "#1a2744" },
      { name: "Emerald", hex: "#2d6a4f" },
      { name: "Blush Pink", hex: "#e8a0bf" },
      { name: "Charcoal", hex: "#36454f" },
    ],
    materials: ["Velvet", "Rubberwood", "Foam"],
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&h=500&fit=crop&crop=center",
    ],
    price: 1099.99,
    description:
      "Our spacious Albany sectional is designed for family gatherings and movie nights. With deep seats, plush cushions, and a durable fabric that resists stains and wear.",
    features: [
      { label: "Stain-resistant fabric", included: true },
      { label: "Removable seat cushions", included: true },
      { label: "Built-in storage ottoman", included: true },
      { label: "Cup holder armrests", included: true },
      { label: "Machine-washable covers", included: false },
    ],
    specs: [
      { label: "Dimensions", value: '120″ x 80″ x 35″' },
      { label: "Seating Capacity", value: "6 people" },
      { label: "Material", value: "Polyester + Pine frame" },
      { label: "Cushion Fill", value: "Memory foam" },
      { label: "Warranty", value: "10 years" },
    ],
    stock: 5,
    category: "sofas",
    rating: 4.9,
    reviewCount: 243,
    colors: [
      { name: "Slate Gray", hex: "#708090" },
      { name: "Beige", hex: "#d4c5a9" },
      { name: "Forest Green", hex: "#2d5a27" },
    ],
    materials: ["Polyester", "Pine wood", "Memory foam"],
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "albany table",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&h=500&fit=crop&crop=center",
    ],
    price: 309.99,
    originalPrice: 389.99,
    description:
      "A stunning dining table crafted from solid acacia wood. The live-edge design brings a rustic charm while the sleek metal base adds modern industrial appeal.",
    features: [
      { label: "Solid acacia wood top", included: true },
      { label: "Industrial metal base", included: true },
      { label: "Seats up to 6 people", included: true },
      { label: "Live-edge natural grain", included: true },
      { label: "Extension leaf included", included: false },
    ],
    specs: [
      { label: "Dimensions", value: '72″ x 36″ x 30″' },
      { label: "Weight Capacity", value: "400 lbs" },
      { label: "Material", value: "Acacia wood + Steel" },
      { label: "Finish", value: "Natural matte lacquer" },
      { label: "Warranty", value: "5 years" },
    ],
    stock: 12,
    category: "tables",
    rating: 4.7,
    reviewCount: 89,
    colors: [
      { name: "Natural Oak", hex: "#c4a67a" },
      { name: "Walnut", hex: "#5c4033" },
    ],
    materials: ["Acacia wood", "Steel", "Lacquer"],
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "armchair",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1564485377539-5af72da1b1f8?w=500&h=500&fit=crop&crop=center",
    ],
    price: 125.99,
    description:
      "Sink into this cozy armchair with its deep seat and plush pillow-top armrests. Perfect for your reading nook or as a stylish addition to any room.",
    features: [
      { label: "Pillow-top armrests", included: true },
      { label: "Linen-blend fabric", included: true },
      { label: "Reinforced stitching", included: true },
      { label: "Non-slip foot pads", included: true },
      { label: "Reclining function", included: false },
    ],
    specs: [
      { label: "Dimensions", value: '32″ x 34″ x 30″' },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Material", value: "Linen blend + Plywood" },
      { label: "Assembly", value: "No assembly required" },
      { label: "Warranty", value: "3 years" },
    ],
    stock: 0,
    category: "chairs",
    rating: 4.6,
    reviewCount: 64,
    colors: [
      { name: "Light Gray", hex: "#d3d3d3" },
      { name: "Teal", hex: "#008080" },
      { name: "Mustard", hex: "#e5b25d" },
    ],
    materials: ["Linen blend", "Plywood", "Foam"],
  },
  {
    id: "recoM2MyHJGHLVi5l",
    name: "bar stool",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1631645193419-ca5c6a5c9c4b?w=500&h=500&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1600789479916-78f4c3e93c13?w=500&h=500&fit=crop&crop=center",
    ],
    price: 89.99,
    description:
      "Modern bar stool with a sleek metal frame and comfortable padded seat. The footrest bar adds extra comfort, making it perfect for kitchen islands and home bars.",
    features: [
      { label: "Padded faux leather seat", included: true },
      { label: "360° swivel", included: true },
      { label: "Built-in footrest", included: true },
      { label: "Floor-protecting caps", included: true },
      { label: "Adjustable height", included: false },
    ],
    specs: [
      { label: "Height", value: '30″ (counter height)' },
      { label: "Seat Diameter", value: '14″' },
      { label: "Weight Capacity", value: "250 lbs" },
      { label: "Material", value: "Faux leather + Steel" },
      { label: "Warranty", value: "2 years" },
    ],
    stock: 42,
    category: "chairs",
    rating: 4.5,
    reviewCount: 38,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#f5f5f5" },
    ],
    materials: ["Faux leather", "Steel", "Foam"],
  },
];

/**
 * Navigation menu configuration
 */
export const NavData: INAV[] = [
  { id: "1", to: "/", text: "Home" },
  { id: "2", to: "/about", text: "About" },
  { id: "3", to: "/products", text: "Products" },
  { id: "4", to: "/login", text: "Login" },
];
