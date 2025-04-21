import React from "react";
import { Link } from "react-router-dom";
import "./WhatWeDo.css"; // Add CSS styling here or import from a CSS file
import raisehands from "../../assets/images/raise-hands.png";
const WhatWeDoCard = ({ iconClass, title, description, link }) => (
  <div className="what-we-do-card">
    <i className={iconClass}></i>
    <h4>{title}</h4>
    <p>{description}</p>
    <Link to={link}>Know More</Link>
  </div>
);

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <h2>what we do</h2>
      <h3>We bring change.</h3>
      <img src={raisehands} alt="Raise Hands" />
      <div className="what-we-do-underline"></div>
      <div className="what-we-do-cards">
        <WhatWeDoCard
          iconClass="fa-solid fa-calendar-days"
          title="Programmes"
          description="Community Building, Sensitization and Knowledge Sharing"
          link="/projects"
        />
        <WhatWeDoCard
          iconClass="fa-solid fa-list-check"
          title="Projects"
          description="Gender Neutral Washrooms, Community Classes, Pride Fest"
          link="/projects"
        />
        <WhatWeDoCard iconClass="fa-solid fa-route" title="Campaigns" description="Paint Queerness, Queer Collective Network, Legal Reform" link="/projects" />
      </div>
    </div>
  );
};

export default WhatWeDo;
