// import React, { useState } from "react";
import "./BeAnAlly.css";
import $ from "jquery";
import React, { useEffect } from "react";

const TextInput = ({ id, label, required }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type="text" id={id} name={id} required={required} />
  </div>
);

const EmailInput = ({ id, label, required }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type="email" id={id} name={id} required={required} />
  </div>
);

const RadioGroup = ({ question, options, name }) => (
  <div className="radio-group">
    <p>{question}</p>
    {options.map((option) => (
      <label key={option.value}>
        <input type="radio" name={name} value={option.value} /> {option.label}
      </label>
    ))}
  </div>
);

const CheckboxGroup = ({ options, name }) => (
  <div className="checkbox-group">
    {options.map((option) => (
      <label key={option.value}>
        <input type="checkbox" name={name} value={option.value} /> {option.label}
      </label>
    ))}
  </div>
);

const BeAnAlly = () => {
  useEffect(() => {
    window.postToGoogle = function () {
      const data = {
        "entry.1308067135": $("#name").val(),
        "entry.1732293729": $("#pronouns").val(),
        "entry.510246480": $("#email").val(),
        "entry.1062605281": $("#affiliation").val(),
        "entry.1821301504": $("#knowledge").val(),
        "entry.1479059500": $("input[name='entry.1479059500']:checked").val(),
        "entry.1638587756": $("input[name='entry.1638587756']:checked")
          .map(function () {
            return this.value;
          })
          .get()
          .join(", "),
        "entry.1380397274": $("input[name='entry.1380397274']:checked").val(),
        "entry.953590735": $("input[name='entry.953590735']:checked").val(),
        "entry.1324685707": $("#feedback").val(),
        "entry.1153964510": $("#pledge").is(":checked") ? "Yes" : "No",
      };

      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfiGwQos7bPVl-NOgWZq4rN69LrlBPaqveTXLMpwg8IF3bCMg/formResponse",
        type: "POST",
        data,
        dataType: "xml",
        success: function () {
          alert("Form submitted successfully!");
          $("#contact-form").trigger("reset");
        },
        error: function () {
          alert("Form submitted successfully!");
          $("#contact-form").trigger("reset");
        },
      });

      return false; // Prevent default form submission
    };
  }, []);
  // const [showGreeting, setShowGreeting] = useState(false);

  // const handleGreetingToggle = () => {
  //     setShowGreeting(!showGreeting);
  // };

  return (
    <main>
      <div className="form-container">
        <h2>Be an Ally</h2>
        <p>Welcome! Thank you for your interest in becoming an ally to the LGBTQ+ community...</p>

        <form
          id="contact-form"
          onSubmit={(e) => e.preventDefault()}
          // action="https://docs.google.com/forms/d/e/1FAIpQLSfiGwQos7bPVl-NOgWZq4rN69LrlBPaqveTXLMpwg8IF3bCMg/formResponse"
          // method="POST"
          // target="_blank"
        >
          <div className="box blue">
            <TextInput id="name" name="entry.1308067135" label="Name :" required />
            <TextInput id="pronouns" name="entry.1732293729" label="Pronouns :" />
          </div>

          <div className="box green">
            <EmailInput id="email" name="entry.510246480" label="Email Address :" required />
            <label htmlFor="affiliation">Affiliation with the College :</label>
            <select id="affiliation" name="entry.1062605281">
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
              <option value="alumni">Alumni</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="box orange">
            <label htmlFor="knowledge">Rate your current understanding of LGBTQ+ issues :</label>
            <input type="range" id="knowledge" name="entry.1821301504" min="1" max="5" />
            <RadioGroup
              question="Would you be interested in receiving resources or attending workshops on LGBTQ+ issues?"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              name="entry.1479059500"
            />
          </div>

          <div className="box blue">
            <p>Please check the actions you commit to :</p>
            <CheckboxGroup
              options={[
                { value: "listening", label: "Listening and Learning" },
                { value: "speakingUp", label: "Speaking Up" },
                { value: "supporting", label: "Supporting LGBTQ+ Rights" },
                { value: "safeSpaces", label: "Creating Safe Spaces" },
                {
                  value: "inclusiveLanguage",
                  label: "Using Inclusive Language",
                },
              ]}
              name="entry.1638587756"
            />
          </div>

          <div className="box green">
            <RadioGroup
              question="Are you interested in volunteering for events or activities organized by Indradhanu?"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              name="entry.1380397274"
            />
            <RadioGroup
              question="Would you like to be informed about upcoming events and activities?"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              name="entry.953590735"
            />
          </div>

          <div className="box orange">
            <label htmlFor="feedback">Do you have any suggestions or ideas on how we can improve our efforts to create a more inclusive environment?</label>
            <textarea id="feedback" name="entry.1324685707"></textarea>
          </div>

          <div className="commitment">
            <input type="checkbox" id="pledge" name="entry.1153964510" required />
            <label htmlFor="pledge">I understand the importance of being an ally and commit to the actions listed above to support the LGBTQ+ community.</label>
          </div>
          <button type="submit" onClick={() => window.postToGoogle()}>
            Submit
          </button>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>

      {/* <div className="form-container">
                <h2>Hello</h2>
                <button onClick={handleGreetingToggle}>Toggle Greeting</button>
                {showGreeting && (
                    <form action="https://docs.google.com/forms/d/e/1FAIpQLScSqG4sbDI7-F3CXOzLgvVL9axp496gpVGFzFW7fz7BoXsa7w/formResponse" method="POST" style={{ display: showGreeting ? 'block' : 'none' }}>
                        <p>
                            Hey! How you doing?
                            <TextInput id="greetName" label="Your Name" />
                            <TextInput id="greetEntry" label="Your Entry" />
                            <TextInput id="greetDesignation" label="Your Designation" />
                        </p>
                        <button type="submit">Submit Greeting</button>
                    </form>
                )}
            </div> */}
    </main>
  );
};

export default BeAnAlly;
