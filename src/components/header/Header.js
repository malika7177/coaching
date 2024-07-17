import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <div className="header">
      <Link to="/" className="logo">
        <span>
          <i className="fa-regular fa-message"></i>
        </span>
        <h3 className="logo-h3">Happy Coaching</h3>
      </Link>
      <div className="nav">
        <ul>
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/sales"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              Extra Sales
            </Link>
          </li>
        </ul>
        <div className="guide-btn">
          <Link
            to="/guide"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
          >
            Get your free guide now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
