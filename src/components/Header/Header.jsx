import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>GOLDEE TRAVELS</h1>
      </div>

      <div className="header__right">
        <h2>LUXURY BUS ON HIRE</h2>
        <h2>BUS ON HIRE FOR WEDDING</h2>
        <h2>BUS ON HIRE FOR TOURS</h2>
        <h2>BUS ON HIRE FOR SCHOOLS</h2>
        <h2>CONTACT US</h2>
        <h2>ABOUT US</h2>
      </div>
    </div>
  );
};

export default Header;
