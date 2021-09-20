import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <h4>COVID-19 VACCINE INFO</h4>
      </Link>
    </div>
  );
};

export default Header;
