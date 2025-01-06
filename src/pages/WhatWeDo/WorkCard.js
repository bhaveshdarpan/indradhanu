import React from "react";

function WorkCard({ icon, type, title, link }) {
  return (
    <div className="what-we-do-card">
      <i className="fa-solid fa-list-check"></i>
      <h4>{type}</h4>
      <p>{title}</p>
      <a href={link}>Know More</a>
    </div>
  );
}
