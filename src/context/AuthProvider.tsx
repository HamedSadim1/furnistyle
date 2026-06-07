/**
 * AuthProvider — Wraps the app tree so any component can access auth state
 * via the `useAuth` hook from `../../hooks/useAuth`.
 */
import { useState, type ReactNode } from "react";
import type { USER } from "../types";
import { AuthContext } from "./authContext";

const INITIAL_USER: USER = { name: "", email: "" };

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<USER>(INITIAL_USER);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: Boolean(user.name && user.email),
        logout: () => setUser(INITIAL_USER),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
