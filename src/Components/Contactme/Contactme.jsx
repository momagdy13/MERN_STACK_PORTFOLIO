import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    emailjs
      .sendForm(
        "service_l7lmgtq",
        "template_lrx460d",
        form,
        "BQ2T2KLYs-VmMvUSE"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          showResult(true);
          setTimeout(() => {
            showResult(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    form.reset();
  };

  return (
    <div className="contactme" id="contact">
      <div className="contactOverlay">
        <div className="container">
          <div className="form">
            <form onSubmit={sendEmail}>
              <div className="formWord">
                <h2>Contact Me!</h2>
                <span>Full Name</span>
                <br />
                <input
                  className="input100"
                  type="text"
                  name="fullname"
                  required
                />
                <br />
                <span>Enter Email</span>
                <br />
                <input
                  className="input100"
                  type="email"
                  name="email"
                  required
                />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" required />
                <br />
              </div>
              <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button type="submit">SUBMIT</button>
                <div className="row">{result ? <Result /> : null}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Result = () => {
  return <p>Your message has been successfully sent!</p>;
};

export default ContactForm;
