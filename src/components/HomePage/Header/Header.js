import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="img-container">
        <div className="inner-container">
          <h1 className="header-title">
            VEGAN <br />
            DOESN'T
            <br /> MEAN
            <br /> BORING!
          </h1>
        </div>
      </div>

      <div className="message">
        <h3 className="message-h3">
          Say no to blend and tasteless food, we are here to help you with meal
          plans suitable for your goals.
        </h3>{" "}
        <br />
        <h4>100% cruelty-free!</h4>
      </div>
      <div>
        <h2 className="how-it-works-title">How it Works?</h2>
      </div>
    </div>
  );
};

export default Header;
