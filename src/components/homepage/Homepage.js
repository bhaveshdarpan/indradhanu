import React from "react";
import "./Homepage.css";
import home from "../../assets/home.png";
import WhoWeAre from "../who-we-are/WhoWeAre";
import WhatWeDo from "../what-we-do/WhatWeDo";
import Resources from "../resources/Resources";
import ContactUs from "../contact-us/ContactUs";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-image">
        <img src={home} alt="Home" />
      </div>
      <div className="homepage-content">
        <WhoWeAre />
        <WhatWeDo />
        <Resources />
        <ContactUs />
      </div>
    </div>
  );
}

export default Homepage;
