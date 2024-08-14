import React, { useEffect } from "react";
import "./homeHelp.css";
import { CgShapeZigzag } from "react-icons/cg";
import { RiBookletLine } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import { BiMaleFemale } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeHelp = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="home-help container">
      <CgShapeZigzag className="zigzag" />
      <div className="hm-box1">
        <div>
          <h1 data-aos="fade-right">I can help you in these particular areas.</h1>
        </div>
        <p data-aos="fade-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam. <br />
          <br /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="hm-box2">
        <div className="hm-box" data-aos="fade-up">
          <RiBookletLine className="hm-box_icon" />
          <h2>1:1 Coaching</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        <div className="hm-box" data-aos="fade-up">
          <IoMdChatbubbles className="hm-box_icon" />
          <h2>Consultation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        <div className="hm-box" data-aos="fade-up">
          <BiMaleFemale className="hm-box_icon" />
          <h2>Group Coaching Sessions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHelp;
