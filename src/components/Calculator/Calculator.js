import React from "react";
import InputCard from "./InputCard";
import GenderCard from './GenderCard';

class Calculator extends React.Component {
  state = {
    age: null,
    weight: null,
    gender: '',
    height: null
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.caloricCalculator();
    });
  };

  isMan = () => {
    this.setState({ gender: 'male' }, () => {
      this.caloricCalculator();
    });
  }

  isWoman = () => {
    this.setState({ gender: 'female' }, () => {
      this.caloricCalculator();
    })
  }

  caloricCalculator = () => {
    const { weight, height, age, gender } = this.state;
    if (weight && height && age && gender) {
      console.log(Number(weight) + Number(height) + Number(age) + gender);
    }
  };

  render() {
    return (
      <div>
        <GenderCard
        title="Gender"
        isMan={this.isMan}
        isWoman={this.isWoman}
        currentValue={this.state.gender}
        />
        <InputCard
          title="Weight"
          name="weight"
          currentValue={this.state.weight}
          handleChange={this.handleChange}
        />
        <InputCard
          title="Height"
          name="height"
          currentValue={this.state.height}
          handleChange={this.handleChange}
        />
        <InputCard
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
