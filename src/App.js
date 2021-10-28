import React from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Announcement from "./components/Announcement/Announcement";
import Header from "./components/Header/Header";
import Home from "./Home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Announcement />
      {/* <Banner /> */}
      <Home />
    </div>
  );
}

export default App;
