/**
 * FurniStyle - Modern Furniture E-commerce Application
 *
 * This is the main entry point for the FurniStyle React application.
 * It renders the App component into the DOM using React 18's createRoot API.
 *
 * Tech Stack:
 * - React 19.2.4 with TypeScript
 * - React Router DOM 7.13.0 for routing
 * - Vite for build tooling
 * - Modern CSS with custom properties
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Create the root React element and render the App component
// StrictMode helps identify potential problems in the application during development
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
