import React from "react";
import "./testimonials.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="tes-info">
        <div className="tes-intro">
          <p>Testimonials</p>
          <h1>Results that speak for themselves</h1>
        </div>
        <div className="tes-btn">
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
      <div className="tes-cards">
        <div className="tes-card">
          <p>
            Lorem ipsum dolor sit amet,
            <span>consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
             Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <img src="/assets/person1.png" alt="person" />
          <h3>Naam</h3>
          <h5>Bedrijf</h5>
          <div className="stars">
          <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>
        <div className="tes-card">
          <p>
            Lorem ipsum dolor sit amet,
            <span>consectetur adipiscing elit, sed do</span>
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <img src="/assets/person1.png" alt="person" />
          <h3>Naam</h3>
          <h5>Bedrijf</h5>
          <div className="stars">
          <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>
        <div className="tes-card">
          <p>
            Lorem ipsum dolor sit amet,
            <span>consectetur adipiscing elit, sed do</span>
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <img src="/assets/person1.png" alt="person" />
          <h3>Naam</h3>
          <h5>Bedrijf</h5>
          <div className="stars">
          <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>
        <div className="tes-card">
          <p>
            Lorem ipsum dolor sit amet,
            <span>consectetur adipiscing elit, sed do</span>
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <img src="/assets/person1.png" alt="person" />
          <h3>Naam</h3>
          <h5>Bedrijf</h5>
          <div className="stars">
          <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
