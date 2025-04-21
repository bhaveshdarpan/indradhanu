import React, { useState } from "react";
import StudentCard from "../../components/member-cards/StudentCard";
import FacultyCard from "../../components/member-cards/FacultyCard";
import "./AboutUs.css";
import teamData from "./teamData"; // Import the separated teamData

const AboutUs = () => {
  const [selectedYear, setSelectedYear] = useState("2024-25");
  return (
    <div>
      <div className="about-us-image">
        <img src={require("../../assets/images/about-us.png")} alt="about-us" />
      </div>
      <div className="about-us-text">
        <h2>Indradhanu</h2>
        <p>
          Indradhanu is an independent student-driven resource body committed to raising collective consciousness and sensitization on the lives and struggles
          of diverse gender and sexual minorities among the IIT Delhi campus fraternity. The objective of the collective is two-pronged - on one hand, we are
          committed to creating a conducive space for diverse gender and sexual minorities in the campus to explore, socialize, learn and unlearn in a safe,
          comforting, and holistic environment, and on the other, it collaborates with relevant institute-level bodies on policy formulation and decisions that
          concern the rights, needs and human development of persons belonging to the LGBTQIA+ community. It is done through a range of activities like
          community-level robust support mechanisms, awareness programmes, thematic dialogues, knowledge creation and hosting social events.{" "}
        </p>
        <p>
          Since 2013, the collective has played instrumental role in mainstreaming conversations on the rights of LGBTQIA+ persons within the campus through
          talks, pride marches and on the national stage by being a part of the Pan IIT petitioners' group that challenged the constitutional validity of Indian
          Penal Code 377 (that criminalized homosexuality).{" "}
        </p>
        <p>
          Indradhanu endeavours to make IIT Delhi a more gender and sex- positive campus and strive towards the intersectional causes of social justice,
          equality, and freedom.
        </p>
      </div>
      <div className="charter">
        <div className="charter-inner">
          <h2>Our Charter</h2>
          <p>Indradhanu Charter encapsulates the purpose of the collective in IIT Delhi.</p>
          <ul>
            <li>
              Enhance the institute's commitment towards safeguarding the fundamental right to life with dignity of every constituent of the IIT Delhi
              fraternity through robust support mechanisms, thematic dialogues, and awareness materials.
            </li>
            <li>Strive to educate and enhance understanding, acceptance, and awareness regarding LGBTQ+ issues and concerns among the campus community.</li>
            <li>
              Promote equality and mitigate heteronormative stereotypes, homophobia, transphobia, queerphobia and any form of discrimination or violence based
              on marginalised gender and sexual identities.
            </li>
            <li>
              Provide accessible infrastructure and supportive space to individuals, who have faced discrimination, harassment, or intimidation because of their
              sexual orientations and/or gender identities/expressions.
            </li>
            <li>
              Advice relevant bodies (office or council) on institute policy formulation, amendments and decisions that concerns the rights, needs and human
              development of persons with marginalised gender and sexual identities.
            </li>
            <li>
              Further the institute's mission to prepare students to become contributing, compassionate citizens of society by instilling the values of social
              justice and elimination of all forms of discrimination in their thoughts and actions.
            </li>
          </ul>
          <a href={require("../../assets/docs/indradhanu-charter.pdf")} target="_blank" rel="noreferrer">
            Get Charter
          </a>
        </div>
      </div>
      {/* Our Team Section */}
      <div className="team">
        <h2>Our Team</h2>
        <div className="team-buttons">
          <button onClick={() => setSelectedYear("2024-25")}>Current</button>
          <button onClick={() => setSelectedYear("2023-24")}>2023-24</button>
          {/* <button onClick={() => setSelectedYear("2022-23")}>2022-23</button> */}
          {/* Add more buttons for other years */}
        </div>

        {/* Faculty Cards Section */}
        <div className="faculty-cards">
          {teamData[selectedYear]?.faculty?.map((faculty, index) => (
            <FacultyCard key={index} name={faculty.name} role={faculty.role} imgSrc={faculty.imgSrc} link={faculty.link} />
          ))}
        </div>

        {/* Student Cards Section */}
        <div className="student-cards">
          {teamData[selectedYear]?.students?.map((student, index) => (
            <StudentCard key={index} name={student.name} role={student.role} imgSrc={student.imgSrc} link={student.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
