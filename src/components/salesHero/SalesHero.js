import React from "react";
import "./salesHero.css";
import { CgShapeZigzag } from "react-icons/cg";
import { Link } from "react-router-dom";

const SalesHero = () => {
  return (
    <section className="sales-hero">
        <div>
      <CgShapeZigzag className="sh-zigzag" />
      <div className="sh-info">
        <span>Proven strategies backed by science for success.</span>
        <h1>Self Esteem Therapy</h1>
        <p>
          I help people to discover their true potential and live a fulfilling
          life... Discover the simple 3 steps that I discovered to hack
          productivity. It just works and it is begin using backed by science.
          Wanna transform your life?
        </p>
        <Link to='/' className="btn">Claim your spot</Link>
      </div>
      </div>
      <div className="sh-img">
        <img src="/assets/sales.jpg" alt="sales-img" />
      </div>
    </section>
  );
};

export default SalesHero;
