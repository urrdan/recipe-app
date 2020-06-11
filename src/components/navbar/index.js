import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.sass";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark  justify-content-between  ">
      <NavLink to="/" className="navbar-brand">
        <img src={require("./logo.png")} alt="" />
      </NavLink>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="menu">
        <ul className="navbar-nav">
          <NavLink to="/">
            <li className="nav-link  ">HOME</li>
          </NavLink>
          <NavLink to="allmeals">
            <li className="nav-link ">ALL MEALS</li>
          </NavLink>
          <NavLink to="about">
            <li className="nav-link  ">ABOUT</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
