import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  element,
  requiresAuth,
}: {
  element: ReactNode;
  requiresAuth?: boolean;
}) => {
  // const isAuthenticated = useAuth();
  const isAuthenticated = true;

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  if (requiresAuth && isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{element}</>;
};

export { ProtectedRoute };
