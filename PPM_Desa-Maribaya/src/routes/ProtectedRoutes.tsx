import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const token = localStorage.getItem("token");

  console.log("TOKEN =", token);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}