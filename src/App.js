import React from "react";
import "./App.css";
import Announcement from "./components/Announcement/Announcement";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Announcement />
    </div>
  );
}

export default App;
