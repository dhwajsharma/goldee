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
import LuxuryBus from "./components/LuxuryBus/LuxuryBus";
import LuxuryBusWedding from "./components/LuxuryBusWedding/LuxuryBusWedding";
import LuxuryBusTours from "./components/LuxuryBusTours/LuxuryBusTours";
import LuxuryBusSchools from "./components/LuxuryBusSchools/LuxuryBusSchools";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/luxurybus">
            <LuxuryBus />
          </Route>
          <Route path="/luxurybuswedding">
            <LuxuryBusWedding />
          </Route>
          <Route path="/luxurybustours">
            <LuxuryBusTours />
          </Route>
          <Route path="/luxurybusschools">
            <LuxuryBusSchools />
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
