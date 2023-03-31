import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../layout/layout";

function ProtectedRoute() {
  const auth = useSelector((state) => state.auth.accessToken);

  return auth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
