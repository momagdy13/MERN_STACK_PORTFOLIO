import React from "react";
import weblogo from "../Components/asset/website.png";
import WebCreated from "../Components/WebCreated/WebCreated";
import Header from "../Components/Headers/Header";
import projects from "../data/My_Project";

export default function Website() {
  return (
    <>
      <Header bgColor="white" />
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>My Recent Web Sites</h1>
            <a href="/">
              <button className="home">Home</button>
            </a>
          </div>
        </div>
      </div>

      <div className="project-display">
        {projects.Recent.map((item, index) => (
          <div className="project-item" key={item.id}>
            <WebCreated
              image={item.image}
              descripe={item.description}
              title={item.title}
              url={item.url}
            />
          </div>
        ))}
      </div>
    </>
  );
}
