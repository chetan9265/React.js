import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IsAuthcontext } from "../context/Auth";

const Navbar = () => {
    const {Logout}=useContext(IsAuthcontext)
  return (
    <div>
      <div className="Navbar">
        <NavLink
          style={({ isActive }) => {
            return isActive ?   { color: "black" }:{ color: "#646cff" };
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ?  { color: "black" }:{ color: "#646cff" };
          }}
          to={"/About"}
        >
          {" "}
          About{" "}
        </NavLink>
        <NavLink             style={({ isActive }) => {
            return isActive ?  { color: "black" }: { color: "#646cff" }
          }} to={"/Product"}> Product </NavLink>
        <div>
          <button style={{ margin: "20px" }}>
            <NavLink  style={{color:"black"}}  to={"/Login"}> Login </NavLink>
          </button>
          <button   onClick={Logout}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
