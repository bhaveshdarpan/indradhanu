import React from "react";

const TimelineEvent = ({ year, title, description, icon }) => {
  return (
    <div className="timeline-event flex justify-between items-center w-full mb-8">
      <div className="order-1 md:w-5/12 w-1/12"></div>
      <div className="z-20 flex items-center order-1 w-50 h-50 rounded-full">
        <img
          alt="content"
          className="object-cover object-center h-full w-full rounded"
          src={icon}
        />
      </div>
      <div className="order-1 rounded-lg w-full md:w-5/12 px-6 py-4 dropdown">
        <h2 className="year-title mb-3 font-bold text-5xl">{year}</h2>
        <h2 className="event-title mb-3 font-bold text-3xl">{title}</h2>
        <p className="event-description text-sm leading-snug tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineEvent;
