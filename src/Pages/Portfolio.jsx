import React from "react";
import web from "../Components/asset/website.png";
import seo from "../Components/asset/seo.png";
import webanimate from "../Components/asset/webanimate.json";
import Lottie from "lottie-react";
import OwlCarousl from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Header from "../Components/Headers/Header";
import projects from "../data/My_Project";

export default function Portfolio() {
  return (
    <>
      <Header bgColor="white" />
      <div class="banner">
        <div class="overlay">
          <div class="container">
            <h1>Some of my works</h1>
            <a href="/">
              <button className="home">Home</button>
            </a>
          </div>
        </div>
      </div>

      <div class="container portifolios">
        <div class="slides row">
          <div class="sliderWordsImage">
            <Lottie animationData={webanimate} />
          </div>
          <div class="sliderWords col-lg-4 col-md-5">
            <div class="sliderHeading">
              <h4>web Development</h4>
              <p>
                I have developed many MERN-stack websites and RESTful APIs. Here
                are some examples of my work:
              </p>
            </div>
          </div>

          <div class="sliderIterms col-lg-8 col-md-7">
            <OwlCarousl
              className="owl-theme"
              loop
              items={3}
              margin={20}
              autoplay={true}
            >
              {projects.Recent.map((item) => (
                <div class="sliderShow" key={item.id}>
                  <img src={item.image} alt="works" />
                  <div class="saleslebal">
                    <div
                      class="salesLebalIcon"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="View Project"
                    >
                      <a href={item.deployment} target='_blank'>
                        <i class="fas fa-laptop">
                          <img src={seo} alt="SEO" />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousl>
          </div>
        </div>
      </div>
    </>
  );
}
