import React from "react";
import "./aboutClients.css";
// import AboutClientsData from '../../data/AboutClientsData'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

const AboutClients = ({AboutClientsData}) => {
  return (
    <section className="about-clients">
      <h1>
        Hear out what my <br />
        clients say about me.
      </h1>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="ac-cards">
        {AboutClientsData.map((item) => {
          return (
            <SwiperSlide className="ac-card" key={item.id}>
              <h2>{item.number}</h2>
              <p>{item.comment}</p>
              <h3>{item.name}</h3>
              <div className="ac-card_img">
                <img src={item.img} alt="person" />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default AboutClients;
