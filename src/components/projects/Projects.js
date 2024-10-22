// Projects.js
import React from "react";
import ProjectCard from "./ProjectCard";
import TimelineEvent from "../Timeline/TimelineEvent";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container w-full px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <ProjectCard
            title="Gender Inclusive Restrooms for Trans/Queer Persons"
            description1="Indradhanu has been working with IIT Delhi to address the lack of any gender inclusive restrooms for public use on the IIT Delhi campus. Indradhanu members drafted a proposal that provides basic recommendations regarding the rolling out of gender-inclusive restrooms on the campus with the necessary signage system. The suggestions comply the spirit of the NALSA vs Union of India 2014 Judgement, the Transgender Persons (Protection of Rights) Act 2019, Rights of Persons with Disabilities Act 2016, and the National Education Policy 2020. The proposal outlines an equity-centred rationale within a social justice framework to build single stalled gender-inclusive restrooms on the main campus. These changes are an important step towards making IIT Delhi an accessible campus for diverse gender and sexual minorities."
            description2={"Indradhanu in collaboration with IGES (Initiative for Gender Equity and Sensitization) carried out a restroom accessibility assessment of all the public use restrooms in 7 major segments of the campus – Lecture Hall Complex, the main building, the blocks I, II, III and IV, V, VI, Library, SAC and IIT Hospital to conclude the present gendered-classification and conditions of restrooms on the campus disproportionately impacts LGBTQIA+ persons. To put the findings into perspective only 1 out of the 7 segments had unisex washrooms."}
            image="assets/images/projects.png"
            link="https://instagram.com/indradhanu.iitd"
          />
        </div>
      </div>

      <div className="timeline-title">
        Indradhanu's History
      </div>

      <div className="timeline-container container w-full h-full p-5">
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
        {/* Add more TimelineEvent components as needed */}
      </div>
    </section>
  );
};

export default Projects;
