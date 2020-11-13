import React from "react";

function PhysicalAct (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button 
                onClick={props.handleActivityLevel}
                name="physicalActivity"
                value="sedentary"
            >
                Sedentary
            </button>
            <button
                onClick={props.handleActivityLevel}
                name="physicalActivity"
                value="light"
            >
                Light
            </button>
            <button 
                onClick={props.handleActivityLevel}
                name="physicalActivity"
                value="moderate"
            >
                Moderate
            </button>
            <button 
                onClick={props.handleActivityLevel}
                name="physicalActivity"
                value="vigorous"
            >
                Vigorous
            </button>
        </div>
    );
}

export default PhysicalAct;