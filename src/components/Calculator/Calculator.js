import React from "react";
import Card from "./Card";

class Calculator extends React.Component {
  state = {
    age: "",
    weight: null,
    gender: "",
    height: null
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("name", name);
    // console.log("value", value);
    this.setState({ [name]: value }, () => {
      this.caloricCalculator();
    });
  };

  caloricCalculator = () => {
    const { weight, height } = this.state;
    if (weight && height) {
      console.log(Number(weight) + Number(height));
    }
  };

  render() {
    return (
      <div>
        <Card
          title="Weight"
          name="weight"
          currentValue={this.state.weight}
          handleChange={this.handleChange}
        />
        <Card
          title="Height"
          name="height"
          currentValue={this.state.height}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Calculator;
