import React from "react";
import "./aboutClients.css";

const AboutClients = () => {
  return (
    <section className="about-clients">
      <h1>
        Hear out what my <br />
        clients say about me.
      </h1>
      <div className="ac-cards">
        <div className="ac-card">
          <h2>5/5</h2>
          <p>
            "I gained so much <br /> <span>confidence</span> in my ability to connect and deepen my
            relationships with people. "
          </p>
          <h3>Jane</h3>
          <div className="ac-card_img">
            <img src="/assets/person3.png" alt="person" />
          </div>
        </div>
        <div className="ac-card">
          <h2>5/5</h2>
          <p>
            “Denise helped me <span>organise</span> my diet. Highly recommend her services!”
          </p>
          <h3>Catherine</h3>
          <div className="ac-card_img">
            <img src="/assets/person2.png" alt="person" />
          </div>
        </div>
        <div className="ac-card">
          <h2>5/5</h2>
          <p>
            "I gained so much <br /> <span>confidence</span> in my ability to connect and deepen my
            relationships with people. "
          </p>
          <h3>Jane</h3>
          <div className="ac-card_img">
            <img src="/assets/person3.png" alt="person" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClients;
