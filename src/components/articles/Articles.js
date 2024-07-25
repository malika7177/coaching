import React from "react";
import "./articles.css";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <section className="articles container">
      <h1>
        Stay Motivated, read the <br /> weekly blog articles.
      </h1>
      <div className="articles-container">
        <div className="article-box">
          <div className="box-img">
            <img src="/assets/article1.jpg" alt="article1" />
          </div>
          <div className="article-info">
            <h2>Balancing your love and work life</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
        <div className="article-box">
          <div className="box-img">
            <img src="/assets/article2.jpg" alt="article1" />
          </div>
          <div className="article-info">
            <h2>A short break from Social Media is important.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
        <div className="article-box">
          <div className="box-img">
            <img src="/assets/article3.jpg" alt="article1" />
          </div>
          <div className="article-info">
            <h2>How to be 1% Better Every Day</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
      </div>
      <Link to="/blog" className="btn">
        Read more blogs
      </Link>
    </section>
  );
};

export default Articles;
