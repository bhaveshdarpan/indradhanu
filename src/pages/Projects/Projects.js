import React from "react";
import "./Projects.css";
import projectsImage from "../../assets/images/group-photo.png";
import Timeline from "./Timeline";
import ProjectCard from "./ProjectCard"
const Projects = () => {
  return (
    <div className="projects">
      <section className="projects-container">
        <div className="projects-wrapper">
          <ProjectCard
            title="Gender Inclusive Restrooms for Trans/Queer Persons"
            description1="Indradhanu has been working with IIT Delhi to address the lack of any gender inclusive restrooms for public use on the IIT Delhi campus. Indradhanu members drafted a proposal that provides basic recommendations regarding the rolling out of gender-inclusive restrooms on the campus with the necessary signage system. The suggestions comply with the spirit of the NALSA vs Union of India 2014 Judgement, the Transgender Persons (Protection of Rights) Act 2019, Rights of Persons with Disabilities Act 2016, and the National Education Policy 2020. The proposal outlines an equity-centred rationale within a social justice framework to build single stalled gender-inclusive restrooms on the main campus. These changes are an important step towards making IIT Delhi an accessible campus for diverse gender and sexual minorities."
            image={projectsImage}
            description2="Indradhanu, in collaboration with IGES (Initiative for Gender Equity and Sensitization), carried out a restroom accessibility assessment of all public-use restrooms in 7 major segments of the campus — Lecture Hall Complex, the main building, blocks I, II, III, IV, V, VI, Library, SAC, and IIT Hospital — to conclude the present gendered classification and conditions of restrooms on the campus disproportionately impact LGBTQIA+ persons. To put the findings into perspective, only 1 out of the 7 segments had unisex washrooms."
            link="https://instagram.com/indradhanu.iitd"
          />
        </div>
      </section>

      <section className="timeline">
        <div>
          <h2 className="project-title">Indradhanu's History</h2>
        </div>
        <Timeline />
      </section>
    </div>
  );
};

export default Projects;
