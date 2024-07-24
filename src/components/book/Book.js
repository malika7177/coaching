import React from "react";
import "./book.css";
import { Link } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";

const Book = () => {
  return (
    <section className="book container">
      <div className="book-container">
        <div className="book-info">
          <h1>
            Get 15-Minutes Complimentary <br /> online session.
          </h1>
          <p>Limited Period Offer. Claim Now.</p>
          <Link to="/" className="btn">
            Book Now
          </Link>
        </div>
        <div className="book-img">
          <img src="/assets/book.jpg" alt="book" />
          <div className="book-icon">
            <SiGooglemeet />
            meet
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
