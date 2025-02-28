import React from "react";
import useLogout from "../hooks/useLogout";

const MyProfile = () => {
  const { loading, logout } = useLogout();
  return (
    <div>
      <button className="btn btn-active btn-error" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default MyProfile;
