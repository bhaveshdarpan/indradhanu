import React from "react";
import "./Homepage.css";
import home from "../../assets/images/home.png";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Resources from "../Resources/Resources";
import ContactUs from "../ContactUs/ContactUs";

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
