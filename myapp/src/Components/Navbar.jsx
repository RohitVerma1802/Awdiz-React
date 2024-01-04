import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-parent">
        <div className="flex w-15 ">
          <p onClick={() => navigate("/")}>Home</p>
        </div>
        <div className="flex w-45">
          <p>MEN</p>
          <p>WOMEN</p>
          <p>KIDS</p>
        </div>
        <div className="flex w-20">
          <p onClick={() => navigate("/login")}>LOGIN</p>
          <p onClick={() => navigate("/register")}>REGISTER</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
