import useLogout from "../hooks/useLogout";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import { Goal } from "lucide-react";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { authUser } = useAuthContext();

  return (
    // <nav className="navbar navbar-light bg-light">
    //   <div className="container-fluid space-between">
    //     <div className="navbar-brand flex items-center gap-2">
    //       {/* <img
    //         src="/docs/5.0/assets/brand/bootstrap-logo.svg"
    //         alt=""
    //         width="30"
    //         height="24"
    //         className="d-inline-block align-text-top mr-3"
    //       /> */}
    //       <Goal size={30} />
    //       <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
    //         PathExplorer
    //       </a>
    //     </div>
    //     {fullName ? (
    //       <div>
    //         <span className="mr-3">Welcome, {fullName}</span>
    //         <button
    //           onClick={logout}
    //           style={{
    //             padding: "5px 10px",
    //             backgroundColor: "red",
    //             color: "white",
    //             border: "none",
    //             cursor: "pointer",
    //             borderRadius: "5px",
    //           }}
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     ) : (
    //       <span
    //         style={{
    //           cursor: "pointer",
    //         }}
    //         onClick={() => navigate("/login")}
    //       >
    //         Login
    //       </span>
    //     )}
    //   </div>
    // </nav>
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/my-profile">My profile</a>
            </li>
            {authUser ? (
              <li>
                <a href="/leaderboards">Leaderboards</a>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">PathExplorer</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
