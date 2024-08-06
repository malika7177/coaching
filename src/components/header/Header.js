import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { LuMessageSquare } from "react-icons/lu";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <span>
          <LuMessageSquare className="header-icon" />
        </span>
        <h3 className="logo-h3">Happy Coaching</h3>
      </Link>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/sales">Extra Sales</NavLink>
          </li>
        </ul>
        <div className="guide-btn">
          <Link to="/guide">Get your free guide now</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
