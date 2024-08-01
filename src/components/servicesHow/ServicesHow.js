import React from "react";
import "./servicesHow.css";
import { SiSkypeforbusiness } from "react-icons/si";
import { RiChat1Line } from "react-icons/ri";
import { GrFormSchedule } from "react-icons/gr";
import { IoMdChatbubbles } from "react-icons/io";

const ServicesHow = () => {
  return (
    <section className="s-how">
      <div className="s-how_info">
        <span>How does it work?</span>
        <h1>
          Are you ready to <br /> transform your life?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
      </div>
      <div className="s-how_content">
        <div className="content-info">
          <div className="content-box">
            <div className="info-icons">
              <IoMdChatbubbles className="info-icon" />
            </div>
            <div>
              <h3>Talk to me first</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="info-icons">
              <GrFormSchedule className="info-icon" />
            </div>
            <div>
              <h3>Schedule a meeting</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="info-icons">
              <SiSkypeforbusiness className="info-icon" />
            </div>
            <div>
              <h3>Online consultation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="info-icons">
              <RiChat1Line className="info-icon" />
            </div>
            <div>
              <h3>Ready to start? Let’s talk!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        <div className="content-img">
          <img src="/assets/home-hero.jpg" alt="person" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHow;
