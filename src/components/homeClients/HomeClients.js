import React from "react";
import "./homeClients.css";
import { FaStar } from "react-icons/fa";
import HomeClientsData from "../../data/HomeClientsData";

const HomeClients = () => {
  return (
    <section className="hm-clients">
      <h1>
        Hear out what my <br /> clients say about me.
      </h1>
      <div className="hm-clients_cards">
        {HomeClientsData.map((item) => {
          return (
            <div className="hm-clients_card" key={item.id}>
              <p>{item.comment}</p>
              <h3>{item.name}</h3>
              <img src={item.img} alt="person" />
              <div className="ratting">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeClients;
