import React from "react";
import "./Resources.css";
import legs from "../../assets/images/legs.png";

function Resources() {
  return (
    <div className="resources" id="resources">
      <h2>Resources</h2>
      <div className="resources-inner">
        <div className="resource-art">
          <img src={legs} alt="Legs" />
          <div className="resources-art-underline"></div>
        </div>
        <div className="resources-info">
          <div className="resources-info-inner">
            <p>
              <a
                href="https://forms.gle/wYz8Qgy3Xqz1DajXA"
                target="_blank"
                rel="noopener noreferrer"
              >
                ViभिNN 2024 - All India Queer Collective Conference
              </a>
            </p>
            <p>
              <a
                href="https://forms.gle/stDQ1MJm8CBKQTi88"
                target="_blank"
                rel="noopener noreferrer"
              >
                ViभिNN 2024 - Queer Talent Show
              </a>
            </p>
            <p>
              <a
                href="https://forms.gle/xBkw4H4EG2TJcBE48"
                target="_blank"
                rel="noopener noreferrer"
              >
                ViभिNN 2024 - Townhall Meeting RSVP
              </a>
            </p>
            <p>
              <a
                href="https://forms.gle/1tngdb9wh3Te9UXq6"
                target="_blank"
                rel="noopener noreferrer"
              >
                ViभिNN 2024 - Pride Parade RSVP
              </a>
            </p>
            <a
              href="https://linktr.ee/indradhanu_iitd/"
              id="resource-view-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
