import React from "react";
import emailjs from "emailjs-com";

import "./email.scss";

export default function Email() {
  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_Fio2YPhJ",
        event.target,
        "user_pjfxHGckNRbG9jLyUaKXL"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <div className="contact-name">
        <label>Name</label>
        <input type="text" name="user_name" />
      </div>
      <div className="contact-email">
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div className="contact-message">
        <label>Message</label>
        <textarea name="message" />
      </div>
      <div className="contact-submit">
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}
