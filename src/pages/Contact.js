import React from "react";
import { Input } from "../components/atoms";

function Contact() {
  return (
    <React.Fragment>
      <p className="h5 text-primary">Contact</p>

      <Input type="text" id="name" placeholder="What's your name?" />
      <Input type="email" id="email" placeholder="What's your email?" />
      <textarea
        className="form-control text-light bg-dark input-query"
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
        placeholder="What do you want to say?"
      />
    </React.Fragment>
  );
}

export default Contact;
