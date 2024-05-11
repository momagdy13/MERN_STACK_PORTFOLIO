import React from "react";

export default function WebCreated({image , descripe, title, time, url  }) {
  return (
    <div class="container blogcontainer">
      <div class="row">
        <div class="blogBox col-lg-4 col-md-6 col-sm-6">
          <div class="blogBox_pic">
            <img src={image} alt="" />
            <div class="blogLebal">
              <a href={url} target="block">
                Project Details
              </a>
            </div>
          </div>
          <div class="blog_text">
            <ul>
              <li>
                <i class="far fa-calendar"></i> {time}
              </li>
            </ul>
            <h5>
              <a href="">{title}</a>
            </h5>
            <p>{descripe}</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}
