import React from "react";
import "./Footer.css"; // Add CSS styling here or import from a CSS file
import indradhanuLogo from "../../assets/indradhanu-logo.png";
import iitdelhi from "../../assets/iitdelhi.png";
function Footer() {
  return (
    <>
      <div className="footer-separator"></div>
      <footer>
        <div className="footer-left">
          <p>IIT Delhi, Hauz Khas</p>
          <img src={indradhanuLogo} alt="Logo" />
          <p>
            <a href="mailto:indradhanu.iitdelhi@gmail.com">
              indradhanu.iitdelhi@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-right">
          <img src={iitdelhi} alt="IIT Delhi" />
        </div>
      </footer>
      <p className="copyright">&copy; 24 Copyright: Indradhanu, IIT Delhi</p>
    </>
  );
}

export default Footer;
