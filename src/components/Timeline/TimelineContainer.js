// components/TimelineContainer.js
import React from "react";
import TimelineItem from "./TimelineItem";

const TimelineContainer = ({ items }) => {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default TimelineContainer;
