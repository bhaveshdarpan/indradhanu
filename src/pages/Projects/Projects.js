import React from "react";
import "./Projects.css";
import projectsImage from "../../assets/images/group-photo.png"; // Make sure this path matches where your image is stored
// import TimelineEvent from "../../components/Timeline/TimelineEvent.js";
import TimelineContainer from "../../components/Timeline/TimelineContainer.js";
import timelineData from "./timelineData.js";
const Projects = () => {
  return (
    <div className="projects">
      <section className="projects-container">
        <div className="projects-wrapper">
          <div className="project-card">
            <h2 className="project-title">
              Gender Inclusive Restrooms for Trans/Queer Persons
            </h2>
            <p className="project-description">
              Indradhanu has been working with IIT Delhi to address the lack of
              any gender inclusive restrooms for public use on the IIT Delhi
              campus. Indradhanu members drafted a proposal that provides basic
              recommendations regarding the rolling out of gender-inclusive
              restrooms on the campus with the necessary signage system. The
              suggestions comply with the spirit of the NALSA vs Union of India
              2014 Judgement, the Transgender Persons (Protection of Rights) Act
              2019, Rights of Persons with Disabilities Act 2016, and the
              National Education Policy 2020. The proposal outlines an
              equity-centred rationale within a social justice framework to
              build single stalled gender-inclusive restrooms on the main
              campus. These changes are an important step towards making IIT
              Delhi an accessible campus for diverse gender and sexual
              minorities.
            </p>
            <div className="project-image-container">
              <img
                alt="Gender Inclusive Restrooms Project"
                className="group-image"
                src={projectsImage}
              />
            </div>
            <p className="project-description">
              Indradhanu, in collaboration with IGES (Initiative for Gender
              Equity and Sensitization), carried out a restroom accessibility
              assessment of all public-use restrooms in 7 major segments of the
              campus — Lecture Hall Complex, the main building, blocks I, II,
              III, IV, V, VI, Library, SAC, and IIT Hospital — to conclude the
              present gendered classification and conditions of restrooms on the
              campus disproportionately impact LGBTQIA+ persons. To put the
              findings into perspective, only 1 out of the 7 segments had unisex
              washrooms.
            </p>
            <button className="know-more-button">
              <a
                href="https://instagram.com/indradhanu.iitd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know More
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="timeline-title">Indradhanu's History</div>
        <TimelineContainer items={timelineData} />
      </section>
      {/* <div className="timeline-container container w-full h-full p-5">
        <TimelineEvent
          year="2017"
          title="Queering Conversations - Indradhanu Talk Series"
          description="1. Queering Conversations - Indradhanu Talk Series #1..."
          icon="assets/icons/1.png"
        />
        <TimelineEvent
          year="2018"
          title="Indradhanu Talk Series & Film Screening"
          description="4. Queering Conversations - Indradhanu Talk Series #4..."
          icon="assets/icons/2.png"
        />
      </div> */}
    </div>
  );
};

export default Projects;
