import React from "react";
import "./companies.css";
import { Link } from "react-router-dom";

const Companies = () => {
  return (
    <section className="companies">
      <p>From startups to the world’s largest companies</p>
      <div className="companies-imgs">
        <Link to="/">
          <img src="/assets/company1.png" alt="logo1" />
        </Link>
        <Link to="/">
          <img src="/assets/company2.png" alt="logo2" />
        </Link>
        <Link to="/">
          <img src="/assets/company3.png" alt="logo3" />
        </Link>
        <Link to="/">
          <img src="/assets/company4.png" alt="logo4" />
        </Link>
        <Link to="/">
          <img src="/assets/company5.png" alt="logo5" />
        </Link>
      </div>
    </section>
  );
};

export default Companies;
