import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const LoginPage = lazy(() => import("../pages/login/LoginPage"));
const SignupPage = lazy(() => import("../pages/signup/SignupPage"));

function App() {
  const { authUser } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignupPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
