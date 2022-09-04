import React from "react";

const ContactForm = () => {
  return (
    <section>
      <h1>How I can help you?</h1>
      <form>
        <div>
          <label htmlFor="email"> Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="name"> Your Name</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="message"> Your Message</label>
          <input id="message" rows="5" />
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
