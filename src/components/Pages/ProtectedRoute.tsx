import { Navigate } from "react-router-dom";
import { USER } from "../../types";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  user: USER;
}

const ProtectedRoute = ({ children, user }: ProtectedRouteProps) => {
  if (!user.name || user.email) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
