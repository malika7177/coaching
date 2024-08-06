import React from "react";
import "./homeClients.css";
import { FaStar } from "react-icons/fa";

const HomeClients = () => {
  return (
    <section className="hm-clients">
      <h1>
        Hear out what my <br /> clients say about me.
      </h1>
      <div className="hm-clients_cards">
        <div className="hm-clients_card">
          <p>
            "I gained so much <span>confidence</span> in my ability to connect and deepen my
            relationships with people. "
          </p>
          <h3>Jane</h3>
          <img src="/assets/person1.png" alt="person" />
          <div className="ratting">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>
        <div className="hm-clients_card">
          <p>
            "I gained so much <span>confidence</span> in my ability to connect and deepen my
            relationships with people. "
          </p>
          <h3>Catherine</h3>
          <img src="/assets/person2.png" alt="person" />
          <div className="ratting">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>
        <div className="hm-clients_card">
          <p>
            "I gained so much <span>confidence</span> in my ability to connect and deepen my
            relationships with people. "
          </p>
          <h3>Angelina</h3>
          <img src="/assets/person3.png" alt="person" />
          <div className="ratting">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
