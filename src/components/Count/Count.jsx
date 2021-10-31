import React from "react";
import CountUp from "react-countup";
import "./Count.css";

const Count = () => {
  return (
    <div className="count">
      <div className="count__container">
        <CountUp end={1200} duration={5} />
        <h4>Tours</h4>
      </div>
      <div className="count__container">
        <CountUp end={1600} duration={5} />
        <h4>Customers Satisfied</h4>
      </div>
      <div className="count__container">
        <CountUp end={200} duration={5} />
        <h4>Destinations</h4>
      </div>
      <div className="count__container">
        <CountUp end={20} duration={5} />
        <h4>Buses</h4>
      </div>
    </div>
  );
};

export default Count;
