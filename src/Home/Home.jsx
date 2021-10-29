import React from "react";
import Count from "../components/Count/Count";
import Intro from "../components/Intro/Intro";
import Products from "../components/Products/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Products />
      <Count />
    </div>
  );
};

export default Home;
