import React from "react";
import "./homeClients.css";
import { FaStar } from "react-icons/fa";
import HomeClientsData from "../../data/HomeClientsData";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

const HomeClients = () => {
  return (
    <section className="hm-clients">
      <h1>
        Hear out what my <br /> clients say about me.
      </h1>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="hm-clients_cards"
      >
        {HomeClientsData.map((item) => {
          return (
            <SwiperSlide className="hm-clients_card" key={item.id}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HomeClients;
