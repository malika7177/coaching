import React from "react";
import "./homeClients.css";
import { IoStarOutline } from "react-icons/io5";

const HomeClients = () => {
  return (
    <section className="hm-clients container">
      <h1>
        Hear out what my <br /> clients say about me.
      </h1>
      <div className="hm-clients_cards">
        <div className="hm-clients_card">
          <p>
            "I gained so much confidence in my ability to connect and deepen my
            relationships with people. "
          </p>
          <h3>Jane</h3>
          <img src="/assets/person1.png" />
          <IoStarOutline className="star" /> <IoStarOutline className="star" />{" "}
          <IoStarOutline className="star" /> <IoStarOutline className="star" />{" "}
          <IoStarOutline className="star" />
        </div>
        <div className="hm-clients_card">
          <p>
            "I gained so much confidence in my ability to connect and deepen my
            relationships with people. "
          </p>
          <h3>Jane</h3>
          <img src="/assets/person1.png" />
          <IoStarOutline className="star" /> <IoStarOutline className="star" />{" "}
          <IoStarOutline className="star" /> <IoStarOutline className="star" />{" "}
          <IoStarOutline className="star" />
        </div>
        <div className="hm-clients_card">
          <p>
            "I gained so much confidence in my ability to connect and deepen my
            relationships with people. "
          </p>
          <h3>Jane</h3>
          <img src="/assets/person1.png" />
          <IoStarOutline className="star" /> <IoStarOutline className="star" />{" "}
          <IoStarOutline className="star" /> <IoStarOutline className="star" />{" "}
          <IoStarOutline className="star" />
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
