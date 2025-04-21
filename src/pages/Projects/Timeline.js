import React from "react";
import "./Timeline.css";
import timelineData from "./timelineData";

const TimelineItem = ({ year, title, image, description }) => {
  return (
    <article className="timeline-item">
      <figure className="timeline-img-wrapper">
        <img className="timeline-img" src={require(`../../assets/icons/${image}`)} alt={title} />
      </figure>
      <section className="timeline-content">
        <h2 className="timeline-year">{year}</h2>
        <h3 className="timeline-title">{title}</h3>
        <ul className="timeline-text">
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};

const Timeline = () => {
  return (
    <section className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-line" />
        {timelineData.map((event, index) => (
          <TimelineItem key={index} year={event.year} title={event.title} image={event.image} description={event.description} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
