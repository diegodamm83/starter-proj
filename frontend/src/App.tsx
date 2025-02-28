import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import MyProfile from "./pages/MyProfile";
import Leaderboards from "./pages/Leaderboards";
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
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/my-profile"
            element={authUser ? <MyProfile /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/leaderboards"
            element={authUser ? <Leaderboards /> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
