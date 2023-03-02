import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/userData";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);
  return user.role === "Admin" || "SuperAdmin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
