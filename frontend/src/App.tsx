import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import UserPage from "./pages/UserPage";

function App() {
  const { authUser, isLoading } = useAuthContext();

  if (isLoading) return null;

  return (
    <>
      <BrowserRouter>
        <Navbar fullName={authUser?.fullName ?? ""} />
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route
            path="/userpage"
            element={authUser ? <UserPage /> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
