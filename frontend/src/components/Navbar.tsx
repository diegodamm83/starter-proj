import useLogout from "../hooks/useLogout";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import { Goal } from "lucide-react";

const Navbar = ({ fullName }: { fullName: string }) => {
  const navigate = useNavigate();
  const { logout } = useLogout();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid space-between">
        <div className="navbar-brand flex items-center gap-2">
          {/* <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top mr-3"
          /> */}
          <Goal size={30} className="" />
          PathExplorer
        </div>
        {fullName ? (
          <div>
            <span className="mr-3">Welcome, {fullName}</span>
            <button
              onClick={logout}
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
