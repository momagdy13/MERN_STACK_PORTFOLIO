import Lottie from 'lottie-react';
import React from 'react'
import aboutme from '../asset/aboutme.json'
export default function About() {
  return (
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-md-6">
                <div class="aboutMeImg">
                  <Lottie animationData={aboutme}/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-me">
                  <h5>About me</h5>
                  <div class="aboutHorizontalLine"></div>
                  <p>
                    I enjoy creating things that live on the internet, whether
                    that be websites, applications, or anything in between. My
                    goal is to always build products that provide pixel-perfect,
                    performant experiences.
                  </p>
                  <p>
                    Familiarity with Front End High level programming such as
                    HTML, CSS, ReactJS, XML, jQuery and JSON. Server Side coding
                    skills Node.js and Php Frameworks( Express.js,Laravel).
                  </p>
                  <p>
                    Understanding of data structures algorithms including data
                    migration, transformation and analysis. Deploying, managing,
                    and operating scalable, highly available, and fault tolerant
                    systems on AWS.
                  </p>
                  <p>
                    Excellent communication skills on both Swahili and English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
