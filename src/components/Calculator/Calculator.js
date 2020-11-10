import React from "react";
import Card from "./Card";

class Calculator extends React.Component {
  state = {
    age: null,
    weight: null,
    gender: "",
    height: null
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.caloricCalculator();
    });
  };

  caloricCalculator = () => {
    const { weight, height, age } = this.state;
    if (weight && height) {
      console.log(Number(weight) + Number(height) + Number(age));
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
        <Card
          title="Age"
          name="age"
          currentValue={this.state.age}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Calculator;
