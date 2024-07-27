import React from "react";
import "./download.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Download = () => {
  return (
    <section className="download">
      <div className="download-container">
        <div className="download-img">
          <img src="/assets/person1.png" alt="person" className="img1" />
          <img src="/assets/person2.png" alt="person" className="img2" />
        </div>
        <div className="download-info">
          <h1>
            Don’t miss out on my <span>‘Live life at the full potential’</span>
            free guide
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium.
          </p>
          <Link to="/" className="btn">
            Download my free guide
          </Link>
          <div className="reviews">
          <span>More than 100+ 5 start reviews</span>
          <div className="download-stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
          </div>
        </div>
        <div className="download-img">
          <img src="/assets/person1.png" alt="person" className="img3" />
          <img src="/assets/person2.png" alt="person" className="img4" />
          <img src="/assets/person3.png" alt="person" className="img5" />
        </div>
      </div>
    </section>
  );
};

export default Download;
