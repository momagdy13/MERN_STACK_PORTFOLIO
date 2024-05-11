import React, {  useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your message has been successfully sent. i will contact you soon </p>
  );
};
export default function Contactme() {
  const [result, showResult] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm("service_l7lmgtq", "template_lrx460d", form, {
        publicKey: "BQ2T2KLYs-VmMvUSE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
    showResult(true);
    setTimeout(() => {
      showResult(false);
    }, 5000);
  };

  return (
    <div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <form action="" onSubmit={sendEmail}>
              <div class="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input class="input100" type="text" name="fullname" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input class="input100" type="email" name="email" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input class="input100" type="text" name="phone" required />
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div class="row">{result ? <Result /> : null}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
