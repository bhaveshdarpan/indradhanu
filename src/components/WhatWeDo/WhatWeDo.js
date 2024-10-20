import React from "react";
import "./WhatWeDo.css"; // Add CSS styling here or import from a CSS file
import raisehands from "../../assets/raise_hands.png"
function WhatWeDo() {
  return (
    <div className="what-we-do">
      <h2>what we do</h2>
      <h3>We bring change.</h3>
      <img src={raisehands} alt="Raise Hands" />
      <div className="what-we-do-underline"></div>
      <div className="what-we-do-cards">
        <div className="what-we-do-card">
          <i className="fa-solid fa-calendar-days"></i>
          <h4>Programmes</h4>
          <p>Community Building, Sensitization and Knowledge Sharing</p>
          <a href="projects.html">Know More</a>
        </div>
        <div className="what-we-do-card">
          <i className="fa-solid fa-list-check"></i>
          <h4>Projects</h4>
          <p>Gender Neutral Washrooms, Community Classes, Pride Fest</p>
          <a href="projects.html">Know More</a>
        </div>
        <div className="what-we-do-card">
          <i className="fa-solid fa-route"></i>
          <h4>Campaigns</h4>
          <p>Paint Queerness, Queer Collective Network, Legal Reform</p>
          <a href="projects.html">Know More</a>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
