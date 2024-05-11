import React from "react";

const ServiceBox = ({ image, altText, title, description }) => (
  <div className="col-lg-4 col-md-4 col-sm-6">
    <div className="sectionBox">
      <div className="sectionImage">
        <img src={image} alt={altText} />
      </div>
      <div className="sectionWords">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default ServiceBox;
