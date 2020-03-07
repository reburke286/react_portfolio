import React from "react";
import Button from "../Button";
import "./style.css";

function ContactForm() {
  return (
    <form id="row-padding">
      <div className="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="your name..."
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="your email address..."
        ></input>
      </div>
      <label for="exampleFormControlTextarea1">Your Message</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="your message..."
      ></textarea>{" "}
      <Button />
    </form>
  );
}

export default ContactForm;
