import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    email: "",
    affiliation: "",
    knowledge: 3,
    interestedInWorkshop: "no",
    actions: [],
    volunteer: "no",
    eventsInfo: "no",
    feedback: "",
    pledge: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "pledge") {
        setFormData({ ...formData, [name]: checked });
      } else {
        const updatedActions = checked
          ? [...formData.actions, value]
          : formData.actions.filter((action) => action !== value);
        setFormData({ ...formData, actions: updatedActions });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Be an Ally</h2>
      <p>
        Welcome! Thank you for your interest in becoming an ally to the LGBTQ+
        community. Please fill out this form to show your commitment.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="box blue">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />

          <label htmlFor="pronouns">Pronouns :</label>
          <input
            type="text"
            id="pronouns"
            name="pronouns"
            onChange={handleChange}
          />
        </div>

        <div className="box green">
          <label htmlFor="email">Email Address :</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />

          <label htmlFor="affiliation">Affiliation with the College :</label>
          <select id="affiliation" name="affiliation" onChange={handleChange}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="staff">Staff</option>
            <option value="alumni">Alumni</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="box orange">
          <label htmlFor="knowledge">
            Rate your current understanding of LGBTQ+ issues :
          </label>
          <input
            type="range"
            id="knowledge"
            name="knowledge"
            min="1"
            max="5"
            onChange={handleChange}
          />

          <p>
            Would you be interested in receiving resources or attending
            workshops on LGBTQ+ issues?
          </p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="interestedInWorkshop"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="interestedInWorkshop"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>

          <label htmlFor="actions">
            Please check the actions you're interested in:
          </label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="actions"
                value="workshop"
                onChange={handleChange}
              />{" "}
              Attend Workshops
            </label>
            <label>
              <input
                type="checkbox"
                name="actions"
                value="volunteer"
                onChange={handleChange}
              />{" "}
              Volunteer
            </label>
            <label>
              <input
                type="checkbox"
                name="actions"
                value="events"
                onChange={handleChange}
              />{" "}
              Attend Events
            </label>
          </div>

          <label htmlFor="feedback">Any other feedback or questions?</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="commitment">
          <input
            type="checkbox"
            id="pledge"
            name="pledge"
            onChange={handleChange}
          />
          <label htmlFor="pledge">
            I pledge to be an ally to the LGBTQ+ community.
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
