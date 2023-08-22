import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";


const ProtectedRoute = ({ element, adminOnly, ...rest }) => {
  const isAuthenticated = useSelector(
    (state) => state.auth.accessToken !== null
  );
  const isAdmin = useSelector((state) => state.auth.user?.isAdmin);

  if (!isAuthenticated && !isAdmin) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  return <Route element={element} {...rest} />;
};

export default ProtectedRoute;
