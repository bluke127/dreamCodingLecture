import { useAuthContext } from "@/contexts/AuthContext";
import React from "react";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({
  children,
  requireAdmin,
}: {
  children;
  requireAdmin?;
}) {
  //로그인한 사용자가 있는지 확인
  //그 사용자가 어드민 권한이 있는지
  //requireAdmin이 true 인 경우에는 로그인, 어드민 권한도 있어야
  //조건 맞지 않으면, 상위경로로
  //조건에 맞는 경우에만 전달된 children보여줌
  const { state } = useAuthContext();
  if (!state || !state.user.name) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
}
