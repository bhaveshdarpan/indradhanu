import React from "react";
import "./Footer.css";
import indradhanuLogo from "../../assets/images/indradhanu-logo.png";
import iitdelhi from "../../assets/images/iitdelhi-logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-separator"></div>
      <footer>
        <div className="footer-left">
          <p>IIT Delhi, Hauz Khas, New Delhi</p>
          <img src={indradhanuLogo} alt="logo" />
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
      <p className="copyright">
        &copy; {new Date().getFullYear()} Indradhanu, IIT Delhi. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
