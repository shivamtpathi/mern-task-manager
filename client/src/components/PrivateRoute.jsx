import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const isAuthenticated = useAuth();

  // If the user is not authenticated, redirect to login page
  if (isAuthenticated === false) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the children (protected route)
  return children;
}
