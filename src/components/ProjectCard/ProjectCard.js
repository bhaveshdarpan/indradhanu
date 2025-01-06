import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ title, description1, description2, image, link }) {
  return (
    <div className="project-card">
      <h2 className="mb-3 font-bold text-[#3a8561] text-4xl">{title}</h2>
      <p className="leading-relaxed text-base">{description1}</p>
      <div className="rounded-lg h-64 overflow-hidden my-4">
        <img alt="project-img" src={image} />
      </div>
      <p className="leading-relaxed text-base">{description2}</p>
      <button className="btn-primary">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          Know More
        </Link>
      </button>
    </div>
  );
}

export default ProjectCard;
