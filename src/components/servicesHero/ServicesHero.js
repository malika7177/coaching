import React, {useEffect} from "react";
import "./servicesHero.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Aos from "aos";
import 'aos/dist/aos.css'

const ServicesHero = () => {
   useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="s-hero">
      <div className="s-hero_info" data-aos="zoom-in">
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
        <LazyLoadImage effect="blur" src="/assets/s-hero.jpg" alt="person" />
      </div>
    </section>
  );
};

export default ServicesHero;
