import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoginLayout({ children }) {
  const auth = useSelector((state) => state.auth.accessToken);
  return !auth ? children : <Navigate to={"/dashboard"} />;
}

export default LoginLayout;
