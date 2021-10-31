import React from "react";
import { useHistory } from "react-router";
import "./Header.css";

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">
      <div className="header__left">
        <h1 onClick={() => history.push("/")}>GOLDEE TRAVELS</h1>
      </div>

      <div className="header__right">
        <h2 onClick={() => history.push("/details")}>DETAILS</h2>
        <h2 onClick={() => history.push("/contactus")}>CONTACT US</h2>
        <h2 onClick={() => history.push("/aboutus")}>ABOUT US</h2>
      </div>
    </div>
  );
};

export default Header;
