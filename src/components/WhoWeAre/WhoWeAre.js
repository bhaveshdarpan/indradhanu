import React from "react";
import { Link } from "react-router-dom";
import "./WhoWeAre.css";

function WhoWeAre() {
  return (
    <div className="who-we-are" id="about-us">
      <h2>who we are</h2>
      <p>
        Indradhanu is IIT Delhi's LGBTQ+ resource group. It was founded in 2022
        to raise awareness on issues relating to the LGBTQ+ community and
        advocate for an inclusive campus experience for all.
      </p>
      {/* Use Link component for navigation */}
      <Link to="/about-us">More about us</Link>
    </div>
  );
}

export default WhoWeAre;
