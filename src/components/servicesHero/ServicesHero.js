import React from "react";
import "./servicesHero.css";

const ServicesHero = () => {
  return (
    <section className="s-hero">
      <div className="s-hero_info">
        <span>I can help you in these patricular areas.</span>
        <h1>I help people to discover their true potential</h1>
        <p>
          I help people to discover their true potential and live a fulfilling
          life... Discover the simple 3 steps that I discovered to hack
          productivity. It just works and it is begin using backed by science.
          Wanna transform your life?
        </p>
      </div>
      <div className="s-hero_img">
        <img src="/assets/s-hero.jpg" alt="person" />
      </div>
    </section>
  );
};

export default ServicesHero;
