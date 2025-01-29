import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "green",
      }}
    >
      <div>LOGO</div>
      <div>
        <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
