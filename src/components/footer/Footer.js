import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { LuMessageSquare } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe">
        <div className="subscribe-info">
          <h2>Get notified when I publish new articles</h2>
          <p>
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button className="sub-btn">Subscribe</button>
        </form>
      </div>
      <div className="footer-main">
        <div className="fm-info">
          <Link to="/" className="fm-logo">
            <span>
              <LuMessageSquare className="fm-icon" />
            </span>
            <h3 className="fm-logoh3">Happy Coaching</h3>
          </Link>
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div className="fm-pages">
          <h3>Pages</h3>
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
              <Link to="/sales">Extra Sales/Landingpage</Link>
            </li>
            <li>
              <Link to="/guide">Free Guide</Link>
            </li>
          </ul>
        </div>
        <div className="fm-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:+1-123-456-7890">+1-123-456-7890</a>
            </li>
            <li>
              <a href="mailto:hello@happydigital.nl">hello@happydigital.nl</a>
            </li>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <Link to="https://github.com/malika7177">
          Made By <b>Malika Djurayeva</b>
        </Link>
        <div className="social-media">
          <Link to="http://linkedin.com">
            <FaLinkedin />
          </Link>
          <Link to="http://facebook.com">
            <FaFacebookSquare />
          </Link>
          <Link to="/">
            <IoBasketballOutline />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
