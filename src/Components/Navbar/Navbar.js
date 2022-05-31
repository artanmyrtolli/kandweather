import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {


return (
  <div className="navbar">
    <h1>KandWeather</h1>
    <NavLink to="/">
      <button className="home-btn">HOME</button>
    </NavLink>
  </div>
)

}
export default Navbar;
