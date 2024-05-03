import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const LoginPage = lazy(() => import("../pages/login/LoginPage"));
const SignupPage = lazy(() => import("../pages/signup/SignupPage"));

function App() {
  const { authUser } = useAuthContext();
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <SignupPage />}
      />
    </Routes>
  );
}

export default App;
