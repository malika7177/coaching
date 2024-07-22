import React from "react";
import { Link} from "react-router-dom";
import "./header.css";
import { LuMessageSquare } from "react-icons/lu";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <span>
        <LuMessageSquare className="header-icon"/>
        </span>
        <h3 className="logo-h3">Happy Coaching</h3>
      </Link>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/sales">Extra Sales</Link>
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
