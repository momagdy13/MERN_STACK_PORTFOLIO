import Lottie from "lottie-react";
import React from "react";
import sell from '../asset/sell.json'

export default function Blogs() {
  return (
    <div class="container" id="blogs">
      <div class="article">
        <h2>Recent Work</h2>
        <hr />
        <div class="rows">
          <div class="shop col-lg-3 col-md-4 col-sm-6">
            <div class="shopBack">
              <Lottie animationData={sell} />
              <div class="shoplebal">
                <a href="/websites">Read More</a>
              </div>
            </div>
            <div class="shoptext">
              <p>My Recent project</p>
              <h3>
                MERN Stack Projects Click To Show My Projects!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
