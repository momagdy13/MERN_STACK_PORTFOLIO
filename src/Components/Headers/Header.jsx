import React from "react";
import Lottie from "lottie-react";
import animate from "../asset/letterm.json";
import { HashLink } from "react-router-hash-link";

export default function Header(props) {
  return (
    <header className={`header-${props.bgColor || "white"}`}>
      <div class="container">
        <div class="nav">
          <div class="nav1">
            <a href="/" className="letterm">
              <Lottie animationData={animate} />
            </a>
          </div>
          <div class="nav2">
            <div class="menu">
              <HashLink to="/#about">about Me</HashLink>
            </div>
            <div class="menu">
              <HashLink to="/#services">services</HashLink>
            </div>
            <div class="menu">
              <HashLink to="/#blogs">Blogs</HashLink>
            </div>
            <div class="menu">
              <HashLink to="/portfolio">Portifolio</HashLink>
            </div>
            <div class="menu">
              <HashLink to="/#contact">contact Me</HashLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
