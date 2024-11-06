import React, { useState } from "react";

const TimelineItem = ({ year, title, description, image, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`timeline-item ${isOpen ? "open" : ""}`}>
      <div className="timeline-item-content">
        <div className="timeline-year">{year}</div>
        <img src={image} alt="icon" className="timeline-icon" />
        <h2 className="timeline-title">{title}</h2>
        <p className="timeline-description">{description}</p>
        {dropdownContent && (
          <div className="dropdown">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="dropdown-toggle"
            >
              {isOpen ? "Close" : "More Info"}
            </button>
            {isOpen && (
              <div className="dropdown-content">{dropdownContent}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
