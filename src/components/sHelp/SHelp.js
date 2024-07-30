import React from "react";
import "./sHelp.css";
import { RiBookletLine } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import { BiMaleFemale } from "react-icons/bi";

const SHelp = () => {
  return (
    <section className="s-help">
      <div className="s-help_info">
        <h1>
          I can help you in these <br /> particular areas
        </h1>
      </div>
      <div className="s-help_container">

      <div className="s-help_content">

        <div className="s-help_box">
          <div className="s-help_icons">
            <BiMaleFemale className="s-help_icon" />
          </div>
          <h2>Group Coaching Sessions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>

        <div className="s-help_box">
          <div className="s-help_icons">
            <IoMdChatbubbles className="s-help_icon" />
          </div>
          <h2>Consultation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>


      <div className="s-help_content2">
        <div className="s-help_box">
          <div className="s-help_icons">
            <RiBookletLine className="s-help_icon" />
          </div>
          <h2>Online course</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>

        <div className="s-help_box boxx">
          <div className="s-help_icons">
            <RiBookletLine className="s-help_icon" />
          </div>
          <h2>1:1 Coaching</h2>
          <p>
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
