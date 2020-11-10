import React from "react";

function Meal(props){
    return(
        <div className="MealCard">
          <img src={props.image} alt=""></img>
          <div className="right">
              <div className="tipe"><h1>{props.tipe}</h1></div>
              <h2>{props.title}</h2>
              <div className="buttons">
                <button className="OrangeButton">{props.calories}</button>
                <button>Recipe</button>
                <button>Ingredients</button> 
              </div>
          </div>
        </div>
    )
}
export default Meal;