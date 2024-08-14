import React from "react";
import "./servicesHow.css";
import { SiSkypeforbusiness } from "react-icons/si";
import { RiChat1Line } from "react-icons/ri";
import { GrFormSchedule } from "react-icons/gr";
import { IoMdChatbubbles } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicesHow = () => {
  return (
    <section className="s-how">
      <div className="s-how_info">
        <span data-aos="fade-up">How does it work?</span>
        <h1 data-aos="fade-up">
          Are you ready to <br /> transform your life?
        </h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
      </div>
      <div className="s-how_content">
        <div className="content-info">
          <div className="content-box">
            <div className="info-icons" data-aos="fade-right">
              <IoMdChatbubbles className="info-icon" />
            </div>
            <div data-aos="fade-left">
              <h3>Talk to me first</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="info-icons" data-aos="fade-right">
              <GrFormSchedule className="info-icon" />
            </div>
            <div data-aos="fade-left">
              <h3>Schedule a meeting</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="info-icons" data-aos="fade-right">
              <SiSkypeforbusiness className="info-icon" />
            </div>
            <div data-aos="fade-left">
              <h3>Online consultation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="info-icons" data-aos="fade-right">
              <RiChat1Line className="info-icon" />
            </div>
            <div data-aos="fade-left">
              <h3>Ready to start? Let’s talk!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
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
