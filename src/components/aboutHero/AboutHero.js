import React from "react";
import "./aboutHero.css";
import { GrFormSchedule } from "react-icons/gr";
import { IoMdChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero_info">
        <span>Proven strategies backed by science for success.</span>
        <h1>About me</h1>
        <p>
          I help people to discover their true potential and live a fulfilling
          life... Discover the simple 3 steps that I discovered to hack
          productivity. It just works and it is begin using backed by science.
          Wanna transform your life?
        </p>
        <Link to="/guide" className="btn">
          Get your free guide now
        </Link>
      </div>
      <div className="about-hero_img_container">
        <div className="about-hero_img">
          <LazyLoadImage
            src="/assets/article1.jpg"
            alt="person"
            effect="blur"
          />
        </div>
        <div className="about-hero_img_icons">
          <div className="a-icon1">
            <GrFormSchedule className="schedule" />
          </div>
          <div className="a-icon2">
            <IoMdChatbubbles className="chat" />
            <span>
              More than 250+ <br />
              <b>Online Sessions</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
