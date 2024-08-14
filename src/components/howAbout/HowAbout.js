import React, {useEffect} from "react";
import "./howAbout.css";
import { IoMdChatbubbles } from "react-icons/io";
import { RiChat1Line } from "react-icons/ri";
import { GrFormSchedule } from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css"

const HowAbout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="how-about">
      <div className="ha-heading">
        <span>How does it work?</span>
        <h1>Are you ready to transform your life?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
      </div>
      <div className="ha-cards">
        <div className="ha-card" data-aos="fade-up">
          <div className="ha-card_icon">
            <RiChat1Line className="ha-icon" />
          </div>
          <h3>Ready to start? Let’s talk!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit,  sed do
            eiusmod tempor incididunt. Lorem <br /> ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="ha-card" data-aos="fade-up">
          <div className="ha-card_icon">
            <GrFormSchedule className="ha-icon" />
          </div>
          <h3>Ready to start? Let’s talk!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit,  sed do
            eiusmod tempor incididunt. Lorem <br /> ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="ha-card" data-aos="fade-up">
          <div className="ha-card_icon">
            <IoMdChatbubbles className="ha-icon" />
          </div>
          <h3>Ready to start? Let’s talk!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit,  sed do
            eiusmod tempor incididunt. Lorem <br /> ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="ha-card" data-aos="fade-up">
          <div className="ha-card_icon">
            <RiMedalLine className="ha-icon" />
          </div>
          <h3>Ready to start? Let’s talk!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit,  sed do
            eiusmod tempor incididunt. Lorem <br /> ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="ha-card" data-aos="fade-up">
          <div className="ha-card_icon">
            <MdNotificationsActive className="ha-icon" />
          </div>
          <h3>Ready to start? Let’s talk!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit,  sed do
            eiusmod tempor incididunt. Lorem <br /> ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="ha-card" data-aos="fade-up">
          <div className="ha-card_icon">
            <IoMdChatbubbles className="ha-icon" />
          </div>
          <h3>Ready to start? Let’s talk!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit,  sed do
            eiusmod tempor incididunt. Lorem <br /> ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowAbout;
