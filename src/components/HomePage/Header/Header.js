import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="img-container">
        <div className="inner-container">
          <h1 className='header-title'>VEGAN DOESN'T MEAN BORING!</h1>
        </div>
      </div>

      <div className="message">
        <p>
          Say no to blend and tasteless food, we are here to help you with meal
          plans suitable for your goals.
        </p>
        <h3>100% cruelty-free!</h3>
      </div>
      <div>
        <h2 className="how-it-works-title">How it Works?</h2>
      </div>
    </div>
  );
};

export default Header;
