import React from "react";
import Intro from "../components/Intro/Intro";
import Products from "../components/Products/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Products />
    </div>
  );
};

export default Home;
