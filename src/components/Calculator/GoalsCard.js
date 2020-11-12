import React from "react";

function GoalsCard (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.loseWeight} value={props.currentvalue}>Lose Weight</button>
            <button onClick={props.maintainWeight} value={props.currentvalue}>Maintain</button>
            <button onClick={props.gainWeight} value={props.currentvalue}>Gain Weight</button>
        </div>
    );
}

export default GoalsCard