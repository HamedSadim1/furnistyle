/**
 * Auth context object and type — separated from the Provider component
 * so that each file only exports one thing (idiomatic for react-refresh).
 */
import { createContext } from "react";
import type { USER } from "../types";

export interface AuthContextValue {
  user: USER;
  setUser: (user: USER) => void;
  isAuthenticated: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
