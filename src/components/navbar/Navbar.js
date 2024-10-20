import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css";
import Hamburger from "../Hamburger/Hamburger"; // Import the Hamburger component
import indradhanuLogo from "../../assets/indradhanu-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-icon">
        <Link to="/">
          <img src={indradhanuLogo} alt="logo" />
        </Link>
      </div>
      <div className={`nav-right ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="nav-items">
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <b>
              <Link to="/vibhinn" className="vibhinn-text">
                Vibhinn'24
              </Link>
            </b>
          </li>
          <li>
            <Link to="/projects">Our Projects</Link>
          </li>
          <li>
            <Link to="#resources">Resources</Link>
          </li>
          <li>
            <Link to="#contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/be-an-ally">Be an Ally</Link>
          </li>
        </ul>
        <div className="nav-social">
          <a
            href="https://instagram.com/indradhanu.iitd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      {/* Use the Hamburger component */}
      {window.innerWidth < 768 && (
        <Hamburger isOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
      )}
    </nav>
  );
};

export default Navbar;
