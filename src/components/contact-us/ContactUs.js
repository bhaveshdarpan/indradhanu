import React from "react";
import "./ContactUs.css"; // Add CSS styling here or import from a CSS file

function ContactUs() {
  return (
    <div className="contact-us" id="contact-us">
      <div className="contact-us-inner">
        <h2>contact us</h2>
        <p>
          Hey! If you want to talk to us, have queries, want to share your
          stories, or have any other questions, just drop a message!
        </p>
        <a
          href="https://forms.gle/j8A8uoxnGKE6eKb98"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fill the form
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
