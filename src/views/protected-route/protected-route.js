import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const auth = useSelector((state) => state.auth.accessToken);
  const location = useLocation();

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
