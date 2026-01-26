/**
 * FurniStyle App Component
 *
 * This is the main application component that sets up the routing structure
 * for the FurniStyle furniture e-commerce application. It demonstrates advanced
 * React Router 6 patterns including:
 *
 * - Nested routing with layout components
 * - Protected routes with authentication
 * - Dynamic routing for individual products
 * - Shared layouts for related pages
 *
 * The app uses a simple user state for demonstration of authentication concepts.
 */

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Products from "./components/Pages/Products";
import Error from "./components/Pages/Error";
import SharedLayout from "./components/Pages/SharedLayout";
import Dashboard from "./components/Pages/Dashboard";
import Login from "./components/Pages/Login";
import SingleProduct from "./components/Pages/SingleProduct";
import { USER } from "./types";
import ProtectedRoute from "./components/Pages/ProtectedRoute";
import SharedProductLayout from "./components/Pages/SharedProductLayout";

function App() {
  // Simple user state for authentication demonstration
  // In a real app, this would be managed by a state management library or context
  const [user, setUser] = useState<USER>({ name: "", email: "" });

  return (
    // BrowserRouter provides the routing context for the entire application
    <BrowserRouter>
      <Routes>
        {/* SharedLayout wraps all main pages and provides common navigation and footer */}
        <Route path="/" element={<SharedLayout />}>
          {/* Index route renders Home component at the root path */}
          <Route index element={<Home />} />

          {/* Static routes for about and login pages */}
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login setUser={setUser} />} />

          {/* Nested routing for products section */}
          {/* SharedProductLayout provides breadcrumbs and common product page styling */}
          <Route path="products" element={<SharedProductLayout />}>
            {/* Products listing page */}
            <Route index element={<Products />} />
            {/* Dynamic route for individual product pages using productId parameter */}
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          {/* Protected route that requires authentication */}
          {/* ProtectedRoute component checks if user is logged in before rendering Dashboard */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route for 404 errors - must be last */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
