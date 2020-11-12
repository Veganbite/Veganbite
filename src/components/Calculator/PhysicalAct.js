import React from "react";

function PhysicalAct (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.sedentary} value={props.currentvalue}>Sedentary</button>
            <button onClick={props.light} value={props.currentvalue}>Light </button>
            <button onClick={props.moderate} value={props.currentvalue}>Moderate </button>
            <button onClick={props.vigorous} value={props.currentvalue}>Vigorous </button>
        </div>
    );
}

export default PhysicalAct;