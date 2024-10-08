import React, {useEffect} from "react";
import "./homeHero.css";
import { CgShapeZigzag } from "react-icons/cg";
import { BiTargetLock } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Aos from "aos";
import 'aos/dist/aos.css';

const HomeHero = () => {
   useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home-hero">
      <div className="hm-hero_content"  data-aos="zoom-in-right">
        <div className="hm-hero_icon">
          <CgShapeZigzag />
        </div>
        <div className="hm-hero_info">
          <span>Proven strategies backed by science for success.</span>
          <h1>Live life at the full potential</h1>
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
      </div>
      <div className="hm-hero_img">
        <LazyLoadImage effect="blur" src="/assets/home-hero.jpg" alt="hero" />
        <div className="img-target">
          <div>
            <BiTargetLock className="target" />
          </div>
          <div>
            <h1>100%</h1>
            <p>Success rate this rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
