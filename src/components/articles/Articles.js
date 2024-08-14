import React, {useEffect} from "react";
import "./articles.css";
import { Link } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"

const Articles = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
            <h2 data-aos="fade-down">Balancing your love and work life</h2>
            <p data-aos="zoom-in">
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
            <h2 data-aos="fade-down">A short break from Social Media is important.</h2>
            <p data-aos="zoom-in">
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
            <h2 data-aos="fade-down">How to be 1% Better Every Day</h2>
            <p data-aos="zoom-in">
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
