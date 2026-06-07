/**
 * FurniStyle Shared Constants
 *
 * Single source of truth (SSOT) for all app-wide constants.
 * Import these instead of hardcoding values in multiple places.
 */

/* ─── Application Meta ─────────────────────────────── */

/** Application brand name */
export const SITE_NAME = "Comfy Store";

/** Current year (dynamic) */
export const CURRENT_YEAR = new Date().getFullYear();

/* ─── Route Paths ───────────────────────────────────── */

/** App routes - single SSOT for all route paths */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PRODUCTS: "/products",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
} as const;

/* ─── UI / Config ───────────────────────────────────── */

/** Default number of stars for ratings */
export const RATING_STARS = 5;

/** Simulated login delay in milliseconds */
export const LOGIN_TIMEOUT_MS = 1000;

/** Placeholder texts for login form */
export const LOGIN_PLACEHOLDERS = {
  name: "John Doe",
  email: "john@example.com",
} as const;

/** Icon background colors for dashboard action cards */
export const DASHBOARD_ICON_COLORS = {
  shop: { bg: "#645cff15", color: "var(--primary-500)" },
  favorites: { bg: "#f59e0b15", color: "#f59e0b" },
  settings: { bg: "#3b82f615", color: "#3b82f6" },
} as const;

/* ─── Hero Section Stats ────────────────────────────── */

export const HERO_STATS = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Unique Products" },
  { value: "99%", label: "Satisfaction Rate" },
] as const;

/* ─── About Hero Section Stats ──────────────────────── */

export const ABOUT_HERO_STATS = [
  { value: "200+", label: "Products Curated" },
  { value: "10K+", label: "Happy Customers" },
  { value: "50+", label: "Design Partners" },
] as const;

/* ─── Stats Banner ──────────────────────────────────── */

export const BANNER_STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Orders Delivered" },
  { value: "4.9★", label: "Average Rating" },
  { value: "30+", label: "Awards Won" },
] as const;

/* ─── Features Data ─────────────────────────────────── */

export interface Feature {
  iconType: "star" | "truck" | "shield";
  title: string;
  desc: string;
  benefits: string[];
  featured: boolean;
}

export const FEATURES: Feature[] = [
  {
    iconType: "star",
    title: "Premium Quality",
    desc: "Every piece is handpicked by our curation team to ensure exceptional quality, durability, and craftsmanship you can see and feel.",
    benefits: ["Sustainably sourced materials", "Rigorous quality testing", "5-year warranty included"],
    featured: false,
  },
  {
    iconType: "truck",
    title: "Lightning-Fast Delivery",
    desc: "From our warehouse to your door in record time. Track your order in real-time with our integrated shipping partners.",
    benefits: ["Free shipping on orders over $99", "2-3 business day delivery", "White glove assembly option"],
    featured: true,
  },
  {
    iconType: "shield",
    title: "Secure Shopping",
    desc: "Shop with confidence. Our platform uses enterprise-grade encryption and offers a 30-day no-questions-asked return policy.",
    benefits: ["256-bit SSL encryption", "30-day free returns", "Price match guarantee"],
    featured: false,
  },
];

/* ─── Testimonials Data ─────────────────────────────── */

export interface Testimonial {
  quote: string;
  author: string;
  initials: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The quality exceeded my expectations. The sofa set I ordered completely transformed my living room. Delivery was prompt and the assembly team was professional.",
    author: "Sarah Mitchell",
    initials: "SM",
    role: "Verified Buyer",
  },
  {
    quote: "I was hesitant to buy furniture online, but the detailed product descriptions and photos made it easy. The dining table is stunning!",
    author: "James Rodriguez",
    initials: "JR",
    role: "Verified Buyer",
  },
  {
    quote: "Outstanding customer service! When I had a question about measurements, the team responded within minutes. The bed frame is gorgeous and well-built.",
    author: "Amy Liu",
    initials: "AL",
    role: "Verified Buyer",
  },
];

/* ─── Values Data ───────────────────────────────────── */

export interface ValueItem {
  iconType: "heart" | "users" | "award" | "leaf";
  title: string;
  desc: string;
  color: string;
}

export const VALUES: ValueItem[] = [
  { iconType: "heart", title: "Passion", desc: "We love what we do and it shows in every product we curate for your home.", color: "#ef4444" },
  { iconType: "users", title: "Community", desc: "Building lasting relationships with our customers and partners worldwide.", color: "#3b82f6" },
  { iconType: "award", title: "Quality", desc: "Only the finest products make it to our curated collection. Excellence guaranteed.", color: "#f59e0b" },
  { iconType: "leaf", title: "Sustainability", desc: "Committed to eco-friendly practices and sustainable sourcing for a better tomorrow.", color: "#22c55e" },
];
