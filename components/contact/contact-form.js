import React, { useState } from "react";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  function sendMessageHandler(event) {
    event.preventDefault();

    // optional : client side validation

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section>
      <h1>How I can help you?</h1>
      <form onSubmit={sendMessageHandler}>
        <div>
          <label htmlFor="email"> Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name"> Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message"> Your Message</label>
          <input
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
