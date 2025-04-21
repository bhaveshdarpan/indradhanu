import React from "react";
import "./FacultyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FacultyCard = ({ name, role, description, imgSrc, link }) => {
  return (
    <div className="faculty-card">
      <div className="linkedin-icon">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p className="description">{description}</p>
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default FacultyCard;
