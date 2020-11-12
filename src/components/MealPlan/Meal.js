import React from "react";
import "./MealPlan.css"

class Meal extends React.Component {
render(){
  return(
    <div className="MealCard">
      <img src={this.props.image} alt=""></img>
      <div className="right">
          <div className="tipe"><h1>{this.props.tipe}</h1></div>
          <h2>{this.props.title}</h2>
          <div className="buttons">
            <button className="OrangeButton">{this.props.calories}</button>
            <button>Recipe</button>
            <button>Ingredients</button> 
          </div>
      </div>
    </div>
)
}  
}
export default Meal;