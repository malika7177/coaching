import React from "react";
import "./home.css";
import HomeHero from "../../components/homeHero/HomeHero";
import HomeHelp from "../../components/homeHelp/HomeHelp";
import HomeClients from "../../components/homeClients/HomeClients";
import Articles from "../../components/articles/Articles";
import HomeGuide from "../../components/homeGuide/HomeGuide";
import Book from "../../components/book/Book";

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <HomeHelp />
      <HomeClients />
      <Articles />
      <HomeGuide />
      <Book />
    </div>
  );
};

export default Home;
