import React from "react";
import letterm from "../asset/letterm.json";
import Lottie from "lottie-react";
import linkedin from "../asset/linkedin.png";
import github from "../asset/github.png";
import instagram from "../asset/instagram.png";
import { HashLink } from "react-router-hash-link";

export default function Fotter() {
  return (
    <footer>
      <div class="container">
        <div class="footerContainer">
          <div class="footerLogo">
            <Lottie animationData={letterm} />
          </div>
          <div class="footerNav">
            <p>
              <HashLink to="/#about">About me</HashLink>
            </p>
            <p>
              <HashLink to="/#services">services</HashLink>
            </p>
            <p>
              <HashLink to="/#blogs">blogs</HashLink>
            </p>
            <p>
              <HashLink to="/portfolio">Portifolio</HashLink>
            </p>
            <p>
              <HashLink to="/#contact">contact me</HashLink>
            </p>
          </div>
          <div class="footerMedias">
            <div class="footerMedia">
              <a
                href="https://www.linkedin.com/in/mohamed-magdy-863339304/"
                target="block"
              >
                <img src={linkedin} target="block" />
              </a>
            </div>
            <div class="footerMedia">
              <a href="https://github.com/momagdy13" target="block">
                <img src={github} alt="" />
              </a>
            </div>

            <div class="footerMedia">
              <a href="https://www.instagram.com/mmagdy89/" target="block">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
          <span>Copyright ©2024 All rights reserved </span>
        </div>
      </div>
    </footer>
  );
}
