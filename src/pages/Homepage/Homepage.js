import React from "react";
import "./Homepage.css";
import home from "../../assets/images/home.png";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Resources from "../../components/Resources/Resources";
import ContactUs from "../../components/ContactUs/ContactUs";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-image">
        <img src={home} alt="Home" />
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
}

export default Homepage;
