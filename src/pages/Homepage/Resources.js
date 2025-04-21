import React from "react";
import "./Resources.css";
import legs from "../../assets/images/legs.png";

const ResourceLink = ({ href, text }) => (
  <p>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </p>
);

const Resources = () => {
  const resourceLinks = [
    {
      href: "https://forms.gle/wYz8Qgy3Xqz1DajXA",
      text: "ViभिNN 2024 - All India Queer Collective Conference",
    },
    {
      href: "https://forms.gle/stDQ1MJm8CBKQTi88",
      text: "ViभिNN 2024 - Queer Talent Show",
    },
    {
      href: "https://forms.gle/xBkw4H4EG2TJcBE48",
      text: "ViभिNN 2024 - Townhall Meeting RSVP",
    },
    {
      href: "https://forms.gle/1tngdb9wh3Te9UXq6",
      text: "ViभिNN 2024 - Pride Parade RSVP",
    },
  ];

  return (
    <div className="resources" id="resources">
      <h2>resources</h2>
      <div className="resources-inner">
        <div className="resource-art">
          <img src={legs} alt="Legs" />
          <div className="resources-art-underline"></div>
        </div>
        <div className="resources-info">
          <div className="resources-info-inner">
            {resourceLinks.map((link, index) => (
              <ResourceLink key={index} href={link.href} text={link.text} />
            ))}
            <a href="https://linktr.ee/indradhanu_iitd/" id="resource-view-more" target="_blank" rel="noopener noreferrer">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
