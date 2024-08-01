import React from "react";
import "./guideHero.css";
import { Link } from "react-router-dom";
import { RiChat1Line } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GuideHero = () => {
  return (
    <section className="guide-hero">
      <div className="gh-content">
        <h1>Results that speak for themselves</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
        <form>
          <input type="text" placeholder="Name" /> <br />
          <input type="email" placeholder="Enter your email" />
        </form>
        <Link to="/">
          We care about your data in our <span>privacy policy</span>
        </Link>
        <div className="gh-content_btn">
          <Link to="/" className="btn">
            Get free guide
          </Link>
        </div>
      </div>

      <div className="gh-img">
        <div className="hm-guide_img">
          <LazyLoadImage
            src="/assets/homeGuide.jpg"
            alt="home guide"
            loading="lazy"
          />
          <div className="hm-guide_img_content">
            <h1>
              Are you <br /> ready to <br /> transform <br />
              your life?
            </h1>
            <div className="img-chat">
              <div className="icon-chat">
                <RiChat1Line className="chat" />
              </div>
              <div>
                <p>Ready to start? Lets's talk!</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="img-guide">
          <p>Free Guide!</p>
        </div>
      </div>
    </section>
  );
};

export default GuideHero;
