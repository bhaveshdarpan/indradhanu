import React from "react";
import "./Hamburger.css";

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="stack"></div>
      <div className="stack"></div>
    </div>
  );
};

export default Hamburger;
