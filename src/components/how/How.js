import React from "react";
import "./how.css";
import { SiSkypeforbusiness } from "react-icons/si";
import { RiChat1Line } from "react-icons/ri";


const How = () => {
  return (
    <section className="how">
      <div className="how-heading">
        <div className="how-info">
          <span>How does it work?</span>
          <h1>Are you ready to transform your life?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        <div className="how-icon">
          <div className="icon1">
            <div className="h-icon">
            <SiSkypeforbusiness className="icon" />
            </div>
            <div className="icon1-info">
              <h3>Online consultation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="icon2">
            <div className="h-icon">
            <RiChat1Line className="icon" />
            </div>
            <div className="icon2-info">
              <h3>Ready to start? Let's talk!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-img">
        <img src="/assets/article2.jpg" alt="article" />
      </div>
    </section>
  );
};

export default How;
