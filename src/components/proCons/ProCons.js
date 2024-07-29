import React from "react";
import "./proCons.css";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const ProCons = () => {
  return (
    <section className="proCons">
      <div className="proCons-info">
        <span>This is not for everyone!</span>
        <h1>
          This program is <br /> perfect for you if...
        </h1>
      </div>
      <div className="proCons-content">
        <div className="con">
          <h2>
            This is <span>not</span> for you if...
          </h2>
          <div className="con-content">
            <div className="box">
              <FaRegCircleXmark className="con-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="box">
              <FaRegCircleXmark className="con-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="box">
              <FaRegCircleXmark className="con-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="box">
              <FaRegCircleXmark className="con-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
        <div className="pro">
          <h2>This is for you if...</h2>
          <div className="pro-content">
            <div className="box">
              <IoCheckmarkCircleOutline className="pro-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="box">
              <IoCheckmarkCircleOutline className="pro-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="box">
              <IoCheckmarkCircleOutline className="pro-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="box">
              <IoCheckmarkCircleOutline className="pro-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCons;
