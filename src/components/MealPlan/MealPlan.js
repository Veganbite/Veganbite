import React from "react";
import BFCard from "./BFCard";
import LCard from "./LCard";
import DCard from "./DCard";
import SCard from "./SCard";
import shuffle from "../HomePage/HowItWorks/shuffle.png";
import unnamed from "../../assets/unnamed.png";
import axios from "axios";
import { Row } from "react-bootstrap";

const YOUR_APP_ID = "60645151";
const YOUR_APP_KEY = "755275472391afd460251ecf421222b1";

class MealPlan extends React.Component {
  state = {
    caloricIntake: "",
    breakfast: [
      {
        label: "",
        image: "",
        url: "",
        calories: "",
      },
    ],
    lunch: [
      {
        label: "",
        image: "",
        url: "",
        calories: "",
      },
    ],
    dinner: [
      {
        label: "",
        image: "",
        url: "",
        calories: "",
      },
    ],
    snack: [
      {
        label: "",
        image: "",
        url: "",
        calories: "",
      },
    ],
    // isButtonDisabled: false
  };

<<<<<<< HEAD
// import React, { Component } from 'react';
// import './QuoteForm.css';

// const MAX_LENGTH = 30; // You can change the value

// class QuoteForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       character: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }

//   handleChange(event) {
//     // SOLUTION to limit the input to 30 characters: if the new value
//     // (event.target.value) is SHORTER OR EQUAL than the maximum then set the state, do nothing otherwise
//     if (event.target.value.length <= MAX_LENGTH) {
//       this.setState({ character: event.target.value });
//     }
//   }

//   render() {
//     // SOLUTION for conditional border color : compute a BOOLEAN
//     // telling if we've reached the maximum, and use it in the input's className
//     const maximumReached = this.state.character.length >= MAX_LENGTH;

//     // SOLUTION for displaying the number of remaining characters :
//     // we compute it here and use it below
//     const numRemaining = MAX_LENGTH - this.state.character.length;
//     return (
//       <form className="QuoteForm" onSubmit={this.handleSubmit}>
//         <label htmlFor="character">Character:</label>
//         {/* show a class or another depending on maximumReached */}
//         <input
//           className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
//           id="name"
//           name="character"
//           type="text"
//           value={this.state.character}
//           onChange={this.handleChange}
//         />
//         <small className="remaining-characters">
//           {numRemaining} remaining characters
//         </small>
//         <p>
//           You typed: <strong>{this.state.character}</strong>
//         </p>
//       </form>
//     );
//   }
// }

// export default QuoteForm;



// class MealPlan extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Meal Plan</h1>
//                 <div><CardList /></div>
                
//             </div>
//         )
//     }
// }

// export default MealPlan
=======
  componentDidMount() {
    // this.getSnackData();
    let CALORIC_GOAL = Number(
      this.props.location.state
        ? this.props.location.state.CALORIC_INTAKE
        : "Calories not set yet"
    );
    let minRangeBreakfast = 0;
    let maxRangeBreakfast = CALORIC_GOAL * 0.50;
    let minRangeLunch = CALORIC_GOAL * 0.15;
    let maxRangeLunch = CALORIC_GOAL * 0.70;
    let minRangeDinner = CALORIC_GOAL * 0.15;
    let maxRangeDinner = CALORIC_GOAL * 0.70;
    let minRangeSnack = 0;
    let maxRangeSnack = CALORIC_GOAL * 0.50;
    // console.log(CALORIC_GOAL);
    this.getMealData("breakfast", minRangeBreakfast, maxRangeBreakfast);
    this.getMealData("lunch", minRangeLunch, maxRangeLunch);
    this.getMealData("dinner", minRangeDinner, maxRangeDinner);
    this.getMealData("snack", minRangeSnack, maxRangeSnack);
  }

  randomNumberGenerator = () => {
    return Math.floor(Math.random() * 80);
  };

  getMealData = (mealType, minRange, maxRange) => {
    axios
      .get(
        `https://api.edamam.com/search?q=${mealType}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=80&calories=${minRange}-${maxRange}&health=vegan`
      )
      .then((response) =>
        this.setState({
          [mealType]: [response.data.hits[this.randomNumberGenerator()].recipe]
        })
      );
  };

  //   getSnackData = () => {
  //     axios
  //       .get(
  //         `https://api.edamam.com/search?q=snack&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=80&calories=${minRangeSnack}-${maxRangeSnack}&health=vegan`
  //       )
  //       .then((response) =>
  //         this.setState({
  //           snack: [response.data.hits[this.randomNumberGenerator()].recipe],
  //         })
  //       );
  //   };

  // shuffleListener = (event) => {
  //     event.preventDefault();
  //     this.setState({ isButtonDisabled: true });
  //     setTimeout(() => this.setState({ isButtonDisabled: false }), 20000);
  // }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${unnamed})`,
          paddingBottom: "10px",
          paddingTop: "10px",
        }}
      >
        {this.state.breakfast.map((meal, index) => (
          <BFCard
            key={index}
            label={meal.label}
            image={meal.image}
            calories={meal.calories / meal.yield}
            recipe={meal.url}
          />
        ))}
        {this.state.lunch.map((meal, index) => (
          <LCard
            key={index}
            label={meal.label}
            image={meal.image}
            calories={meal.calories / meal.yield}
            recipe={meal.url}
          />
        ))}
        {this.state.dinner.map((meal, index) => (
          <DCard
            key={index}
            label={meal.label}
            image={meal.image}
            calories={meal.calories / meal.yield}
            recipe={meal.url}
          />
        ))}
        {this.state.snack.map((meal, index) => (
          <SCard
            key={index}
            label={meal.label}
            image={meal.image}
            calories={meal.calories / meal.yield}
            recipe={meal.url}
          />
        ))}
        <Row className="d-flex justify-content-center mb-4">
          <button
            title="Go Premium to unlock the Shuffle Functionality"
            className="shuffle-button"
            // onClick={this.shuffleListener}
            // disabled={this.state.isButtonDisabled}
            onClick={() =>
              alert(
                "To shuffle your Meal Plan you need Premium Veganbite. Check out our About Us page for more information."
              )
            }
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <li
              style={{
                listStyle: "none",
                textDecoration: "none",
                color: "orange",
              }}
            >
              <span
                style={{
                  textDecoration: "none",
                  color: "orange",
                  fontSize: "20px",
                }}
              >
                <img
                  src={shuffle}
                  alt="shuffle-icon"
                  height="75px"
                  width="75px"
                />
                <br />
                Shuffle
              </span>
            </li>
          </button>
        </Row>
      </div>
    );
  }
}

export default MealPlan;
>>>>>>> 065038fb19c3fb67b145861592cc29d626917a85
