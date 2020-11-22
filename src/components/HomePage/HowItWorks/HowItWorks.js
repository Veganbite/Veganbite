import React from "react";
import "./HowItWorks.css";

function HowItWorks(props) {
  return (
    <div>
      <div className="wrapper">
        <div className="cards-container">
          <div className="cards-info">
            <img
              src={props.cardImage}
              alt={props.description}
              className="cards-image"
            />
            <h3 className="cards-description">{props.description}</h3>
          </div>
        </div>
        {/* <img src={props.addButton} className="cards-button" /> */}
      </div>
    </div>
  );
}

export default HowItWorks;
