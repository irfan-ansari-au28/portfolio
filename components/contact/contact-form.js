import React, { useState } from "react";
import Button from "../home-page/ui/button";

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
    //     <form>
    //   <label className="block">
    //     <span className="block text-sm font-medium text-slate-700">Social Security Number</span>
    //     <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
    //     <p className="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
    //       We need this to steal your identity.
    //     </p>
    //   </label>
    // </form>
    <section>
      <h1 className="my-8 text-center relative ">
        I&apos;m glad you&apos;re here !
      </h1>
      <div className=" my-4  bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 sm:w-1/2 border-2 border-transparent rounded-lg">
        <form
          onSubmit={sendMessageHandler}
          className="bg-white  dark:bg-black  rounded-lg  p-5  "
        >
          <div className="my-4">
            <label htmlFor="email" className="block">
              <span className=" my-2 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Your Email
              </span>
              <input
                className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2 py-2 border rounded-md w-full "
                type="email"
                id="email"
                placeholder="jaydoe@example.com"
                required
                value={enteredEmail}
                onChange={(event) => setEnteredEmail(event.target.value)}
              />
            </label>
          </div>
          <div className="my-4">
            <label htmlFor="name" className="block">
              <span className=" my-2 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Your Name
              </span>
              <input
                className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-300 px-2 py-2 border rounded-md w-full"
                type="text"
                id="name"
                placeholder="Jay Doe"
                required
                value={enteredName}
                onChange={(event) => setEnteredName(event.target.value)}
              />
            </label>
          </div>
          {/* <div>
          <label htmlFor="name"> Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div> */}
          <div className="my-4">
            <label htmlFor="message" className="block">
              <span className="block text-sm font-medium text-slate-700 my-2 dark:text-white">
                How can I help you?
              </span>
              <textarea
                className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2 py-2 border rounded-md w-full"
                type="text"
                id="message"
                placeholder="Type your message here.."
                rows="5"
                value={enteredMessage}
                onChange={(event) => setEnteredMessage(event.target.value)}
              />
            </label>
          </div>
          {/* <div>
          <label htmlFor="message"> Your Message</label>
          <input
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div> */}
          <div className="flex justify-end items-center">
            <Button className="bg-purple-600 text-white px-6">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
