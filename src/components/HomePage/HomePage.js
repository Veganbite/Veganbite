import React from "react";
import Header from "./Header/Header";
import HowItWorksCards from "./HowItWorks/HowItWorksCards";
import HowItWorksButton from "./HowItWorks/HowItWorksButton";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HowItWorksCards />
      <HowItWorksButton />
    </div>
  );
};

export default Homepage;
