import React from "react";
import "./MealPlan.css"

class Meal extends React.Component {
render(){
  return(
    <div className="MealCard">
      <img src={this.props.image} alt={this.props.meal}></img>
      <div className="right">
          <div className="type"><h1>{this.props.calories}</h1></div>
          <h2>{this.props.recipe}</h2>
          <div className="buttons">
            <button className="OrangeButton">{this.props.key}</button>
            <button>Recipe</button>
            <button>Ingredients</button> 
          </div>
      </div>
    </div>
)
}  
}
export default Meal;