import React from "react";
import { Navigate } from "react-router-dom";
import { user } from "../Types/Types";
type ProtectedRouteProps = {
  user: user|null;
  children: React.ReactNode;
};
const ProtectedRoute = (props: ProtectedRouteProps) => {
  if (!props.user) {
    return <Navigate to="/" replace />;
  }
  return props.children;
};

export default ProtectedRoute;
