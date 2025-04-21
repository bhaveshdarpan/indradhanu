import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ title, description1, description2, image, link }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description1}</p>
      <div className="project-image-container">
        <img className="project-image" alt="project-img" src={image} />
      </div>
      <p className="project-description">{description2}</p>
      <button className="know-more-button">
        <Link to={link} target="_blank" rel="noopener noreferrer">
          Know More
        </Link>
      </button>
    </div>
  );
}

export default ProjectCard;
