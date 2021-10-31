import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Announcement from "./components/Announcement/Announcement";
import Count from "./components/Count/Count";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details/Details";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/" exact>
            <Header />
            <Announcement />
            <Intro />
            <Count />
            {/* <Banner /> */}
            {/* <Footer /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
