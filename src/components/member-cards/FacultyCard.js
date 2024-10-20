import React from "react";
import "./FacultyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function FacultyCard({ name, role, imgSrc, link }) {
  return (
    <div className="faculty-card">
      <div className="linkedin-icon">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default FacultyCard;
