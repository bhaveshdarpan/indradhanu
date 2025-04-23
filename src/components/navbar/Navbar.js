import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu.jsx"; // fixed import path for shadcn navigation menu
import indradhanuLogo from "../../assets/images/indradhanu-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";
import Hamburger from "../ui/hamburger/Hamburger.js";

const navigationItems = [
  { label: "About Us", to: "/about-us" },
  { label: "Vibhinn'25", to: "/vibhinn", className: "vibhinn-text", isBold: true },
  { label: "Our Projects", to: "/projects" },
  { label: "Resources", to: "/#resources", isHashLink: true },
  { label: "Contact Us", to: "/#contact-us", isHashLink: true },
  { label: "Be an Ally", to: "/be-an-ally" },
];

const MenuList = ({ onLinkClick }) => (
  <NavigationMenuList>
    {navigationItems.map((item) => (
      <NavigationMenuItem key={item.label}>
        <NavigationMenuLink asChild>
          {item.isHashLink ? (
            <HashLink smooth to={item.to} onClick={onLinkClick}>
              {item.isBold ? <b className={item.className || ""}>{item.label}</b> : item.label}
            </HashLink>
          ) : (
            <Link to={item.to} onClick={onLinkClick} className={item.className || ""}>
              {item.isBold ? <b>{item.label}</b> : item.label}
            </Link>
          )}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
);

const SocialLinks = () => (
  <div className="nav-social">
    <a href="https://instagram.com/indradhanu.iitd" target="_blank" rel="noopener noreferrer" className="instagram-gradient">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <NavigationMenu className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={indradhanuLogo} alt="logo" />
        </Link>

        <div className="nav-links desktop-menu">
          <MenuList />
          <SocialLinks />
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <Hamburger isOpen={mobileMenuOpen} />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <MenuList onLinkClick={() => setMobileMenuOpen(false)} />
          <SocialLinks />
        </div>
      )}
    </NavigationMenu>
  );
};

export default Navbar;
