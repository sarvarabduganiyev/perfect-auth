import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/login";
import ProtectedRoute from "./views/protected-route/protected-route";
import NotFound from "./views/not-found/";
import Dashboard from "./views/Dashboard/";
import About from "./views/About";
import { useSelector, useDispatch } from "react-redux";
import { authLogOut } from "./redux/slices/auth";
import LoginLayout from "./views/layout/login-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const auth = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const Token = () => {
    dispatch(authLogOut());
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path=['/', '/login'] element={ <Login />}> */}
          <Route path={"/"} element={<Navigate to="/login" />} />
          <Route
            path={"/login"}
            element={
              <LoginLayout>
                <Login />
              </LoginLayout>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
