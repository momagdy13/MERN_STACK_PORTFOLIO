import React from "react";
import Lottie from "lottie-react";
import image_animate from "../asset/laptop.json";
export default function Home() {
  return (
    <div class="Mainbackground" >
      <div class="topBackground"></div>
      <svg
        xmlns="https://th.bing.com/th/id/OIG2.Obalztb9BsiMylgx7oG4?pid=ImgGn"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#001517"
          fillopacity="1"
          d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        >
        </path>
      </svg>

      <div class="container fluids">
        <div class="row" id="home">
          <div class="col-md-12 col-lg-6">
            <div class="screenWords">
              <h1>Hello, I'm Mohamed.</h1>
              <p>
                A MERN-stack developer. Specializing in building exceptional
                trending websites. Feel free to take a
                look at my latest projects. Remotely available.
                momagdy2267@gmail.com Tel:+(20) 01015314045
              </p>
              <div class="twoMainButton">
                <div class="buttonMain">
                  <a href="/websites">My_Websites</a>
                  <div class="hrizontalLine diff"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="screenImage" >
              <Lottie animationData={image_animate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
