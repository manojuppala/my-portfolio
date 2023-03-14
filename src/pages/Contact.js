import React from "react";
import { Input } from "../components/atoms";

function Contact() {
  return (
    <React.Fragment>
      <p className="h5 text-primary" id="contact">
        Contact
      </p>
      <div className="card text-white bg-dark mb-3 contact-card-width card-border anchor-div p-2">
        <label for="name" className="text-light">
          Enter your name:
        </label>
        <Input type="text" id="name" placeholder="What's your name?" />
        <label for="email" className="text-light">
          Enter your email:
        </label>
        <Input type="email" id="email" placeholder="What's your email?" />
        <label for="message" className="text-light">
          Enter the message:
        </label>
        <textarea
          className="form-control text-light bg-dark input-query mb-3"
          id="message"
          name="message"
          rows="4"
          cols="50"
          placeholder="What do you want to say?"
        />
        <p align="center">
          <button type="button" className="btn btn-primary btn-sm">
            Submit
          </button>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Contact;
