import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "../Hamburger/Hamburger";
import indradhanuLogo from "../../assets/images/indradhanu-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Small delay to ensure navigation completes
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
            <button onClick={() => scrollToSection("resources")}>Resources</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact-us")}>Contact Us</button>
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
      {window.innerWidth < 768 && (
        <Hamburger isOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
      )}
    </nav>
  );
};

export default Navbar;
