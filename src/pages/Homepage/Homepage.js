import React from "react";
import "./Homepage.css";
import homeImg from "../../assets/images/home.png";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Resources from "../Resources/Resources";
import ContactUs from "../ContactUs/ContactUs";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-image">
        <img src={homeImg} alt="Home" />
      </div>
      <div className="homepage-content">
        <WhoWeAre />
        <WhatWeDo />
        <section id="resources">
          <Resources />
        </section>
        <ContactUs />
      </div>
    </div>
  );
};

export default Homepage;
