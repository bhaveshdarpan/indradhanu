import React from "react";
import "./Footer.css";
import indradhanuLogo from "../../../assets/images/indradhanu-logo.png";
import iitdelhi from "../../../assets/images/iitdelhi-logo.png";

const FooterLeft = () => (
  <div className="footer-left">
    <p>IIT Delhi, Hauz Khas, New Delhi</p>
    <img src={indradhanuLogo} alt="logo" />
    <p>
      <a href="mailto:indradhanu.iitdelhi@gmail.com">indradhanu.iitdelhi@gmail.com</a>
    </p>
  </div>
);

const FooterRight = () => (
  <div className="footer-right">
    <img src={iitdelhi} alt="IIT Delhi" />
  </div>
);

const FooterSeparator = () => <div className="footer-separator"></div>;

const FooterCopyright = () => (
  <p className="copyright">
    &copy; {new Date().getFullYear()} Indradhanu, IIT Delhi. All rights reserved.
    <br />
    Developed with ❤️ by{" "}
    <a href="https://github.com/bhaveshdarpan" target="_blank" rel="noopener noreferrer" style={{ color: "#007acc", textDecoration: "underline" }}>
      Bhavesh Darpan
    </a>
    .
  </p>
);

const Footer = () => {
  return (
    <div className="footer">
      <FooterSeparator />
      <footer>
        <FooterLeft />
        <FooterRight />
      </footer>
      <FooterCopyright />
    </div>
  );
};

export default Footer;
