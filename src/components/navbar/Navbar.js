import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu.jsx"; // fixed import path for shadcn navigation menu
import indradhanuLogo from "../../assets/images/indradhanu-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";
import Hamburger from "../ui/hamburger/Hamburger.js";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavigationMenu className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={indradhanuLogo} alt="logo" />
        </Link>

        <div className="nav-links desktop-menu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about-us">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/vibhinn" className="vibhinn-text">
                  <b>Vibhinn'25</b>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/projects">Our Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <HashLink smooth to="/#resources">
                  Resources
                </HashLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <HashLink smooth to="/#contact-us">
                  Contact Us
                </HashLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/be-an-ally">Be an Ally</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="nav-social">
            <a href="https://instagram.com/indradhanu.iitd" target="_blank" rel="noopener noreferrer" className="instagram-gradient">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <Hamburger isOpen={mobileMenuOpen} />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/vibhinn" onClick={() => setMobileMenuOpen(false)} className="vibhinn-text">
                  <b>Vibhinn'25</b>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>
                  Our Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <HashLink smooth to="/#resources" onClick={() => setMobileMenuOpen(false)}>
                  Resources
                </HashLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <HashLink smooth to="/#contact-us" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </HashLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/be-an-ally" onClick={() => setMobileMenuOpen(false)}>
                  Be an Ally
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="nav-social">
            <a href="https://instagram.com/indradhanu.iitd" target="_blank" rel="noopener noreferrer" className="instagram-gradient">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      )}
    </NavigationMenu>
  );
};

export default Navbar;
