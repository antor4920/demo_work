import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">LOGO</div>
      <ul className="UlLink">
        <Link className="All_Link" to="/">
          Home
        </Link>
        <Link className="All_Link" to="/countries">
          Countries
        </Link>
        <Link className="All_Link" to="/about_us">
          About Us
        </Link>
      </ul>
      <button className="btn">Contact Us</button>
    </nav>
  );
};

export default NavBar;
