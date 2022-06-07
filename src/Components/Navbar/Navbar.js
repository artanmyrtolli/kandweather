import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>KAND Weather</h1>
      <div className="nav-buttons">
      <NavLink to="/kand-weather" className="nav-link">
        <button className="home-btn">HOME</button>
      </NavLink>
      <NavLink to="/details/24-hours" className="nav-link">
            <button className="24hr-btn">Next 24Hrs</button>
      </NavLink>
      </div>
    </div>
  )
}

export default Navbar;
