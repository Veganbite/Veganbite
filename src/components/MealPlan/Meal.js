import React from "react";

function Meal(props){
    return(
        <div>
            <p>{props.tipe}</p>
            <p>{props.title}</p>
            <img src={props.image} alt=""></img>
            <button>{props.calories}</button>
            <button>Recipe</button>
            <button>Ingredients</button>  
        </div>
    )
}
export default Meal;