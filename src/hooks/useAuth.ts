/**
 * useAuth — Access authentication state from any component.
 *
 * Must be called within an <AuthProvider> (wrapped in App.tsx).
 *
 * Usage:
 *   const { user, setUser, isAuthenticated, logout } = useAuth();
 */
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return ctx;
};
