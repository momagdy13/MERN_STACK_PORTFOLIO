import React from "react";

function IndustryItem({ image, title, description }) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="sectionBox">
        <div className="sectionImage">
          <img src={image} alt={title} />
        </div>
        <div className="sectionWords">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default IndustryItem;
