import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
