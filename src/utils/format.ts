/**
 * FurniStyle Utility Functions
 *
 * Shared helper functions used across the application.
 * Import these instead of duplicating logic in multiple components.
 */

/**
 * Extracts initials from a full name.
 *
 * @param name - The full name (e.g. "John Doe")
 * @param maxLength - Maximum number of initials to return (default: 2)
 * @returns Uppercase initials (e.g. "JD")
 *
 * @example
 * getInitials("John Doe")        // "JD"
 * getInitials("john doe", 1)     // "J"
 * getInitials("Alice B. Carol")  // "AB"
 */
export function getInitials(name: string, maxLength = 2): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, maxLength);
}

/**
 * Formats a number as a USD price string.
 *
 * @param price - The numeric price value
 * @returns Formatted price string with $ symbol
 *
 * @example
 * formatPrice(259.99)        // "$259.99"
 * formatPrice(1099.99)       // "$1,099.99"
 * formatPrice(0)             // "$0.00"
 */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

