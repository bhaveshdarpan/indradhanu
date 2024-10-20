import React from "react";
import "./StudentCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function StudentCard({ name, role, imgSrc, link }) {
  return (
    <div className="student-card">
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

export default StudentCard;
