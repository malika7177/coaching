import React, { useEffect } from "react";
import "./sHelp.css";
import { RiBookletLine } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import { BiMaleFemale } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

const SHelp = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="s-help">
      <div className="s-help_info" data-aos='fade-up'>
        <h1>
          I can help you in these <br /> particular areas
        </h1>
      </div>
      <div className="s-help_container">
        <div className="s-help_content">
          <div className="s-help_box">
            <div className="s-help_icons" data-aos='fade-up'>
              <BiMaleFemale className="s-help_icon" />
            </div>
            <h2 data-aos='fade-up'>Group Coaching Sessions</h2>
            <p data-aos='fade-up'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>

          <div className="s-help_box">
            <div className="s-help_icons" data-aos='fade-up'>
              <IoMdChatbubbles className="s-help_icon" />
            </div>
            <h2 data-aos='fade-up'>Consultation</h2>
            <p data-aos='fade-up'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>

        <div className="s-help_content2">
          <div className="s-help_box">
            <div className="s-help_icons" data-aos='fade-up'>
              <RiBookletLine className="s-help_icon" />
            </div>
            <h2 data-aos='fade-up'>Online course</h2>
            <p data-aos='fade-up'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>

          <div className="s-help_box boxx">
            <div className="s-help_icons" data-aos='fade-up'>
              <RiBookletLine className="s-help_icon" />
            </div>
            <h2 data-aos='fade-up'>1:1 Coaching</h2>
            <p data-aos='fade-up'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SHelp;
