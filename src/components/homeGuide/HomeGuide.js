import React from "react";
import "./homeGuide.css";
import { Link } from "react-router-dom";
import { RiChat1Line } from "react-icons/ri";

const HomeGuide = () => {
  return (
    <section className="home-guide container">
      <div className="hm-guide_info">
        <h1>
          Don’t miss out on my <br /> ‘Live life at the full <br /> potential’
          free guide
        </h1>
        <p className="info-p1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
        <p className="info-p2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <Link to="/guide" className="btn">
          Get your free guide now
        </Link>
      </div>
      <div className="hm-guide_img">
        <img src="/assets/homeGuide.jpg" alt="home guide" />
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
    </section>
  );
};

export default HomeGuide;
