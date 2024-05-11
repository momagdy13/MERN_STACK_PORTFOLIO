import React from "react";

const TecnologyItem = ({ image, title, items }) => (
  <div className="col-lg-4 col-md-4 col-sm-6">
    <div className="sectionBox">
      <div className="sectionImage">
        <img src={image} alt="blockchain" />
      </div>
      <div className="sectionWords">
        <h4>{title}</h4>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default TecnologyItem;
