import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/login";
import ProtectedRoute from "./views/protected-route/protected-route";
import Dashboard from "./views/Dashboard/";
import LoginLayout from "./views/layout/login-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
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
