import React from "react";

function GoalsCard (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.handleGoals} name='goals' value='lose'>Lose Weight</button>
            <button onClick={props.handleGoals} name='goals' value='maintain'>Maintain</button>
            <button onClick={props.handleGoals} name='goals' value='gain'>Gain Weight</button>
        </div>
    );
}

export default GoalsCard