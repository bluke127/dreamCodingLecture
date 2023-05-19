import { useAuthContext } from "@contexts/AuthContext";
import React from "react";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  if (!user.name) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
}
