import React from "react";
import { Link } from 'react-router-dom';

const HowItWorksButton = () => {
  return (
    <div>
      <div className="btnInes">
        <button className="buttonInes">
          <span>
          <Link to="/calculator"> Let's Start! </Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HowItWorksButton;
